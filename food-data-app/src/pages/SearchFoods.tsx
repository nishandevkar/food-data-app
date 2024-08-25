import { Box, Flex, HStack, Spacer, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useLocalStorage } from "react-use";
import FoodList, {
	AbrigedFoodItem,
	SearchResponse,
} from "../components/FoodList";
import IngredientsTray from "../components/IngredientsTray";
import SearchInput from "../components/SearchInput";
import SelectDataType from "../components/SelectDataType";

function SearchFoods() {
	// TODO: Pagination of the list of ingredients

	const [ingredientList, setIngredientList] = useLocalStorage<
		AbrigedFoodItem[]
	>("ingredientList", []);
	const [searchText, setSearchText] = useState(" ");
	const [selectedDataType, setSelectedDataType] = useState("");

	const queryResponse = useQuery({
		queryKey: ["searchResult", searchText, selectedDataType],
		queryFn: () =>
			axios
				.get<SearchResponse>(
					"https://api.nal.usda.gov/fdc/v1/foods/search/",
					{
						params: {
							dataType: selectedDataType,
							api_key: "PdxatbffFmmEXNOGf4w3zVyudklvzavVQje2NaRB",
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
		// INPUTS for searching and source data selection

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
					{/* Drawer for viewing selected ingredients */}
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
