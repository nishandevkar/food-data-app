import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Box,
	Text,
	Button,
	HStack,
	VStack,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

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
	const [selectedFoodIngredient, setSelectedFoodIngredient] =
		useState<AbrigedFoodItem>();

	const handleSetFoodItem = (foodItem: AbrigedFoodItem) => {
		// console.log(foodItem);
		setSelectedFoodIngredient(foodItem);
		localStorage.setItem(
			"foodItem",
			JSON.stringify(selectedFoodIngredient)
		);
	};

	const handleRemoveFoodItem = () => {
		setSelectedFoodIngredient(undefined);
		localStorage.setItem(
			"foodItem",
			JSON.stringify(setSelectedFoodIngredient)
		);
	};

	// useEffect(() => {
	// 	localStorage.getItem("foodItem");

	// }, [selectedFoodIngredient]);

	return (
		<>
			<Accordion allowToggle>
				{searchResponse &&
					searchResponse.foods.map((eachFoodItem, index) => (
						<AccordionItem key={index}>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										{eachFoodItem.description}{" "}
										{eachFoodItem.dataType === "Branded" ? (
											<HStack>
												<Text fontSize="sm">
													Data Type:{" "}
													<b>
														{eachFoodItem.dataType}
													</b>
													Brand Name:{" "}
													<b>
														{eachFoodItem.brandName}{" "}
													</b>
													Brand Owner:{" "}
													<b>
														{
															eachFoodItem.brandOwner
														}
													</b>
												</Text>
											</HStack>
										) : null}
										<Text fontSize={"xs"} color={"gray"}>
											Data Type:{" "}
											<b>{eachFoodItem.dataType}</b>
										</Text>
										{/* <Box
												padding={3}
												display={"flex"}
												justifyContent={"space-around"}
											></Box> */}
									</Box>
									<HStack spacing={4}>
										<Button
											size="sm"
											onClick={(e) => {
												handleSetFoodItem(eachFoodItem);
												e.stopPropagation();
											}}
										>
											Add
										</Button>
										<Button
											size="sm"
											onClick={(e) => {
												handleRemoveFoodItem();
												e.stopPropagation();
											}}
										>
											Remove
										</Button>
									</HStack>
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
