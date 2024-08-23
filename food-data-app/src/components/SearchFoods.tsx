import { Box, Flex, HStack, Spacer, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodList, { SearchResponse } from "./FoodList";
import SearchInput from "./SearchInput";
import SelectDataType from "./SelectDataType";
import { AbrigedFoodItem } from "./FoodList";
import { useLocalStorage } from "react-use";
import IngredientsTray from "./IngredientsTray";
import Navbar from "./Navbar";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "../pages/ErrorPage";

function SearchFoods() {
	const [ingredientList, setIngredientList] = useLocalStorage<
		AbrigedFoodItem[]
	>("ingredientList", []);
	const [searchText, setSearchText] = useState("");
	const [selectedDataType, setSelectedDataType] = useState("");

	const queryResponse = useQuery({
		queryKey: ["searchResult", searchText, selectedDataType],
		queryFn: () =>
			axios
				.get<SearchResponse>(
					"https://api.nal.usda.gov/fdc/v1/foods/search/ddd",
					{
						params: {
							dataType: selectedDataType,
							api_key: "SaQy2io5EY4siiZgsIKGCHkQxrLaJE7SPZdfkveT",
							query: searchText,
							pageSize: 6,
						},
					}
				)
				.then((res) => {
					return res.data;
				}),
		retry: false,
	});

	if (queryResponse.error) throw new Error();
	return (
		<Box marginBottom={250}>
			<Flex marginY={4}>
				<HStack>
					<SearchInput
						onSubmit={(e) => {
							setSearchText(e.searchText);
						}}
					></SearchInput>
					<SelectDataType
						onSelectDataType={(e) => {
							setSelectedDataType(e);
						}}
					></SelectDataType>
				</HStack>
				<Spacer />
				<Box marginLeft={4}>
					<IngredientsTray
						ingredientList={ingredientList}
						onClear={() => setIngredientList([])}
						onUpdate={(ingredientList) =>
							setIngredientList(ingredientList)
						}
					></IngredientsTray>
				</Box>
			</Flex>

			{queryResponse.isPending ? (
				<Spinner />
			) : (
				<FoodList
					searchResponse={queryResponse.data}
					ingredientList={ingredientList}
					setIngredientList={setIngredientList}
				></FoodList>
			)}
		</Box>
	);
}

export default SearchFoods;
