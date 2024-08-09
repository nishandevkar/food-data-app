import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";

interface SearchResponse {
	totalHits: number;
	currentPage: number;
	totalPages: number;
	foods: AbrigedFoodItem[];
}
interface AbrigedFoodItem {
	dataType: string;
	description: string;
	fdcId: number;
	foodNutrients: AbridgedFoodNutrient[];
	ndbNumber: number;
	publicationDate: string;
	foodCode?: string;
	score: number;
}
interface AbridgedFoodNutrient {
	nutrientId: number;
	nutrientName: string;
	amount: number;
	unitName: string;
	value: number;
}
function App() {
	const [foodItems, setFoodItems] = useState<AbrigedFoodItem[]>([]);
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
					dataType: "SR Legacy",
					api_key: "SaQy2io5EY4siiZgsIKGCHkQxrLaJE7SPZdfkveT",
					query: "cashew",
					pageSize: 30,
				},
			})
			.then((res) => setSearchResponse(res.data));
	}, []);
	return (
		<>
			<h1>food data</h1>
			<Accordion allowToggle>
				{searchResponse &&
					searchResponse.foods.map((eachFoodItem) => (
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as="span" flex="1" textAlign="left">
										{eachFoodItem.description}
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<table>
									<tr>
										<th>Nutrient</th>
										<th>Amount Present</th>
										<th>Unit</th>
									</tr>
									{eachFoodItem.foodNutrients.map(
										(eachNutrientItem) => (
											<tr>
												<td>
													{
														eachNutrientItem.nutrientName
													}
												</td>
												<td>
													{eachNutrientItem.value}
												</td>
												<td>
													{eachNutrientItem.unitName.toLowerCase()}
												</td>
											</tr>
										)
									)}
								</table>
							</AccordionPanel>
						</AccordionItem>
					))}
			</Accordion>
		</>
	);
}

export default App;
