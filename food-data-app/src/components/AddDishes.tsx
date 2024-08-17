import {
	Button,
	ButtonGroup,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { AbrigedFoodItem } from "./FoodList";

interface AddDishesProps {
	ingredientList: AbrigedFoodItem[] | undefined;
	onClear: () => void;
}
const AddDishes = ({ ingredientList, onClear }: AddDishesProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const handleOnClear = () => {
		onClear();
	};

	return (
		<div>
			<ButtonGroup>
				<Button onClick={onOpen}>
					<RiPlayListAddFill />
					<Text
						padding={"1px"}
						fontSize={"8"}
						bgColor={"teal"}
						borderRadius={"50%"}
						height="3"
						width="3"
					>
						{ingredientList?.length}
					</Text>
				</Button>
			</ButtonGroup>
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
