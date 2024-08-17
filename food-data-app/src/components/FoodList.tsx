import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	HStack,
	Text,
	useToast,
} from "@chakra-ui/react";
import { useLocalStorage } from "react-use";

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
export interface AbrigedFoodItem {
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
	ingredientList: AbrigedFoodItem[] | undefined;
	setIngredientList: Function;
}

const FoodList = ({
	searchResponse,
	ingredientList,
	setIngredientList,
}: FoodListProps) => {
	const toast = useToast();
	const handleSetFoodItem = (addItem: AbrigedFoodItem) => {
		let updatedList: AbrigedFoodItem[] | undefined = [];
		updatedList =
			ingredientList &&
			!ingredientList?.find((item) => addItem.fdcId === item.fdcId)
				? [...ingredientList, addItem]
				: ingredientList;
		setIngredientList(updatedList);
		if (!ingredientList?.find((item) => addItem.fdcId === item.fdcId)) {
			toast({
				title: "Ingredient Added.",
				description: addItem.description,
				status: "success",
				duration: 2000,
				isClosable: true,
				position: "bottom-right",
			});
		} else {
			toast({
				title: "Ingredient Exists",
				description: '"' + addItem.description + '" already chosen.',
				status: "error",
				duration: 2500,
				isClosable: true,
				position: "bottom-right",
			});
		}
	};

	const handleRemoveFoodItem = (removeItem: AbrigedFoodItem) => {
		let updatedList: AbrigedFoodItem[] | undefined = [];
		updatedList =
			ingredientList &&
			ingredientList.filter(
				(ingredient) => ingredient.fdcId !== removeItem.fdcId
			);
		setIngredientList(updatedList);
	};

	return (
		<Accordion allowToggle>
			{searchResponse &&
				searchResponse.foods.map(
					(eachFoodItem, index) =>
						eachFoodItem.foodNutrients.length > 0 && (
							<AccordionItem key={index}>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										{eachFoodItem.description}{" "}
										{eachFoodItem.dataType === "Branded" ? (
											<HStack>
												<Text fontSize="sm">
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
											colorScheme="teal"
											size="sm"
											onClick={(e) => {
												e.stopPropagation();
												handleSetFoodItem(eachFoodItem);
											}}
										>
											Add
										</Button>
										<Button
											colorScheme={"red"}
											variant={"outline"}
											size="sm"
											marginRight={3}
											onClick={(e) => {
												handleRemoveFoodItem(
													eachFoodItem
												);
												e.stopPropagation();
											}}
										>
											Remove
										</Button>
									</HStack>
									<AccordionIcon />
								</AccordionButton>
								<AccordionPanel pb={4}>
									<table className="table table-dark">
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
														<tr
															key={
																eachNutrientItem.nutrientId
															}
														>
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
						)
				)}
		</Accordion>
	);
};
export default FoodList;
