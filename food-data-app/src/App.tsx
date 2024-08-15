import axios from "axios";
import "./App.css";
import { CgCopyright } from "react-icons/cg";
import { useEffect, useState } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Box,
	Text,
	HStack,
} from "@chakra-ui/react";
import SearchInput from "./components/SearchInput";
import FoodList, { SearchResponse } from "./components/FoodList";
import SelectDataType from "./components/SelectDataType";

function App() {
	const [searchText, setSearchText] = useState("");
	const [selectedDataType, setSelectedDataType] = useState("");
	const [searchResponse, setSearchResponse] = useState<SearchResponse>({
		totalHits: 0,
		currentPage: 0,
		totalPages: 0,
		foods: [],
	});
	useEffect(() => {
		const foodDataResponse = axios
			.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
				params: {
					dataType: selectedDataType,
					api_key: "SaQy2io5EY4siiZgsIKGCHkQxrLaJE7SPZdfkveT",
					query: searchText,
					pageSize: 10,
				},
			})
			.then((res) => {
				setSearchResponse(res.data);
			});
		// const foodListResponse = axios
		// 	.get("https://api.nal.usda.gov/fdc/v1/foods/list", {
		// 		params: {
		// 			api_key: "SaQy2io5EY4siiZgsIKGCHkQxrLaJE7SPZdfkveT",
		// 		},
		// 	})
		// 	.then((res) => console.log(res.data));
	}, [searchText, selectedDataType]);
	return (
		<>
			<SearchInput
				onSubmit={(e) => {
					setSearchText(e.searchText);
					console.log(e.searchText);
				}}
			></SearchInput>
			<Box margin={6}>
				<SelectDataType
					onSelectDataType={(e) => {
						setSelectedDataType(e);
						// console.log(e);
						// console.log(selectedDataType);
					}}
				></SelectDataType>
			</Box>
			<FoodList
				searchResponse={searchResponse}
				searchText={searchText}
			></FoodList>
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
		</>
	);
}

export default App;
