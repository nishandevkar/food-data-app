import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Box,
	Text,
} from "@chakra-ui/react";

import React from "react";

export interface SearchResponse {
	totalHits: number;
	currentPage: number;
	totalPages: number;
	foods: AbrigedFoodItem[];
}
interface AbridgedFoodNutrient {
	nutrientId: number;
	nutrientName: string;
	amount: number;
	unitName: string;
	value: number;
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
	brandName?: string;
	brandOwner?: string;
}
interface FoodListProps {
	searchResponse: SearchResponse;
	searchText: string;
}
const FoodList = ({ searchResponse, searchText }: FoodListProps) => {
	return (
		<>
			<h3>{searchResponse && searchText} data</h3>
			<Accordion allowToggle>
				{searchResponse &&
					searchResponse.foods.map((eachFoodItem, index) => (
						<AccordionItem key={index}>
							<h2>
								<AccordionButton>
									<Box as="span" flex="1" textAlign="left">
										{eachFoodItem.description}{" "}
										{eachFoodItem.dataType === "Branded" ? (
											<Text>
												Data Type:{" "}
												<b>{eachFoodItem.dataType}</b>
												Brand Name:{" "}
												<b>{eachFoodItem.brandName} </b>
												Brand Owner:{" "}
												<b>{eachFoodItem.brandOwner}</b>
											</Text>
										) : (
											<Text>
												Data Type:{" "}
												<b>{eachFoodItem.dataType}</b>
											</Text>
										)}
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<table>
									<thead>
										<tr>
											<th>Nutrient</th>
											<th>Amount Present</th>
											<th>Unit</th>
										</tr>
									</thead>
									<tbody>
										{eachFoodItem.foodNutrients.map(
											(eachNutrientItem) =>
												eachNutrientItem.value ? (
													<tr>
														<td>
															{
																eachNutrientItem.nutrientName
															}
														</td>
														<td>
															{
																eachNutrientItem.value
															}
														</td>
														<td>
															{eachNutrientItem.unitName.toLowerCase()}
														</td>
													</tr>
												) : (
													<></>
												)
										)}
									</tbody>
								</table>
							</AccordionPanel>
						</AccordionItem>
					))}
			</Accordion>
		</>
	);
};
export default FoodList;
