import { Box, Flex, HStack, Spacer, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodList, { SearchResponse } from "./FoodList";
import SearchInput from "./SearchInput";
import SelectDataType from "./SelectDataType";
import { AbrigedFoodItem } from "./FoodList";
import { useLocalStorage } from "react-use";
import AddDishesTray from "./AddDishes";
import Navbar from "./Navbar";
import { useQuery } from "@tanstack/react-query";

function SearchFoods() {
	const [ingredientList, setIngredientList] = useLocalStorage<
		AbrigedFoodItem[]
	>("ingredientList", []);
	const [searchText, setSearchText] = useState("");
	const [selectedDataType, setSelectedDataType] = useState("");
	const [searchResponse, setSearchResponse] = useState<SearchResponse>({
		totalHits: 0,
		currentPage: 0,
		totalPages: 0,
		foods: [],
	});

	const queryResponse = useQuery({
		queryKey: ["searchResult", searchText, selectedDataType],
		queryFn: () =>
			axios
				.get<SearchResponse>(
					"https://api.nal.usda.gov/fdc/v1/foods/search",
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
					setSearchResponse(res.data);
				}),
	});

	// if (queryResponse.error) return queryResponse.error.message;
	return (
		<Box margin={30}>
			<Flex marginY={4}>
				<AddDishesTray
					ingredientList={ingredientList}
					onClear={() => setIngredientList([])}
					onUpdate={(ingredientList) =>
						setIngredientList(ingredientList)
					}
				></AddDishesTray>
				<Spacer></Spacer>
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
			</Flex>

			{queryResponse.isPending ? (
				<Spinner />
			) : (
				<FoodList
					searchResponse={searchResponse}
					ingredientList={ingredientList}
					setIngredientList={setIngredientList}
				></FoodList>
			)}
			<HStack>
				<Text marginTop={6}>
					©️ U.S. Department of Agriculture (USDA), Agricultural
					Research Service. FoodData Central: Foundation Foods.
					Version Current: April 2024. Internet:{" "}
					<a href="https://fdc.nal.usda.gov" target="_blank">
						fdc.nal.usda.gov
					</a>
				</Text>
			</HStack>
		</Box>
	);
}

export default SearchFoods;
