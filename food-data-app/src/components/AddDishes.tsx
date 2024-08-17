import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { AbrigedFoodItem } from "./FoodList";

interface AddDishesProps {
	ingredientList: AbrigedFoodItem[] | undefined;
	onClear: () => void;
}
const AddDishes = ({ ingredientList, onClear }: AddDishesProps) => {
	const [abridgedIngredientList, setAbridgedIngredientList] = useState<
		AbrigedFoodItem[]
	>([]);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const handleOnClear = () => {
		setAbridgedIngredientList([]);
		onClear();
	};

	return (
		<div>
			<Button colorScheme="teal" onClick={onOpen}>
				<RiPlayListAddFill />
			</Button>
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Chosen Ingredients</DrawerHeader>

					<DrawerBody>
						<ul className="list-group" data-bs-theme="dark">
							{ingredientList &&
								ingredientList.map((ingredient) => (
									<li
										className="list-group-item"
										key={ingredient.fdcId}
									>
										{ingredient.description} <br />
									</li>
								))}
						</ul>
					</DrawerBody>

					<DrawerFooter>
						<Button
							variant="outline"
							mr={3}
							onClick={handleOnClear}
						>
							Clear List
						</Button>
						<Button colorScheme="teal" onClick={() => null}>
							Save
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default AddDishes;
