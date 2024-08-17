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
	Flex,
	HStack,
	IconButton,
	Spacer,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { AbrigedFoodItem } from "./FoodList";
import { MdDeleteForever } from "react-icons/md";
interface AddDishesProps {
	ingredientList: AbrigedFoodItem[] | undefined;
	onClear: () => void;
	onUpdate: (ingredientList: AbrigedFoodItem[]) => void;
}
const AddDishes = ({ ingredientList, onClear, onUpdate }: AddDishesProps) => {
	const handleRemoveFoodItem = (removeItem: AbrigedFoodItem) => {
		let updatedList: AbrigedFoodItem[] | undefined = [];
		updatedList =
			ingredientList &&
			ingredientList.filter(
				(ingredient) => ingredient.fdcId !== removeItem.fdcId
			);
		updatedList && onUpdate(updatedList);
		console.log(updatedList);
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

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
										<Flex paddingTop={"3"}>
											<Text width={"10rem"}>
												{ingredient.description}
											</Text>
											<Spacer></Spacer>
											<Button
												colorScheme={"red"}
												variant={"outline"}
												size={"xs"}
												onClick={() =>
													handleRemoveFoodItem(
														ingredient
													)
												}
											>
												<MdDeleteForever />
											</Button>
										</Flex>
									</li>
								))}
						</ul>
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClear}>
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
