import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardHeader,
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
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spacer,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { AbrigedFoodItem } from "./FoodList";
import { MdDeleteForever } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
interface IngredientsTrayProps {
	ingredientList: AbrigedFoodItem[] | undefined;
	onClear: () => void;
	onUpdate: (ingredientList: AbrigedFoodItem[]) => void;
}
const IngredientsTray = ({
	ingredientList,
	onClear,
	onUpdate,
}: IngredientsTrayProps) => {
	const [parent, enableAnimations] = useAutoAnimate();
	const handleRemoveFoodItem = (removeItem: AbrigedFoodItem) => {
		let updatedList: AbrigedFoodItem[] | undefined = [];
		updatedList =
			ingredientList &&
			ingredientList.filter(
				(ingredient) => ingredient.fdcId !== removeItem.fdcId
			);
		updatedList && onUpdate(updatedList);
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
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Chosen Ingredients</DrawerHeader>

					<DrawerBody>
						<ul
							className="list-group"
							data-bs-theme="dark"
							ref={parent}
						>
							{ingredientList && ingredientList.length > 0 ? (
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
								))
							) : (
								<Card variant={"outline"}>
									<CardHeader>
										{" "}
										<Text
											fontStyle={"italic"}
											fontSize={"medium"}
										>
											Select an Ingredient to add to this
											tray.
										</Text>
									</CardHeader>
								</Card>
							)}
						</ul>
					</DrawerBody>

					<DrawerFooter>
						<Button
							isDisabled={
								ingredientList && ingredientList?.length > 0
									? false
									: true
							}
							variant="outline"
							mr={3}
							onClick={onClear}
						>
							Clear List
						</Button>
						<Button
							isDisabled={
								ingredientList && ingredientList?.length > 0
									? false
									: true
							}
							colorScheme="teal"
							onClick={() => null}
						>
							Save
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default IngredientsTray;
