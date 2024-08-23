import { Box, HStack, Heading, List, ListItem, Text } from "@chakra-ui/react";
import IngredientsTray from "../components/IngredientsTray";
import { AbrigedFoodItem } from "../components/FoodList";
import { useLocalStorage } from "react-use";
import { useState } from "react";

const Dishes = () => {
	const [ingredientList, setIngredientList] = useLocalStorage<
		AbrigedFoodItem[]
	>("ingredientList", []);
	return (
		<>
			<IngredientsTray
				ingredientList={ingredientList}
				onClear={function (): void {}}
				onUpdate={function (ingredientList: AbrigedFoodItem[]): void {}}
			></IngredientsTray>
		</>
	);
};

export default Dishes;
