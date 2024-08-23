import { Flex, HStack, Heading, Spacer } from "@chakra-ui/react";
import { TbHealthRecognition } from "react-icons/tb";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
	return (
		<Flex margin={3}>
			<HStack>
				<Heading as="h2" size={"xl"}>
					<TbHealthRecognition />
				</Heading>

				<HStack>
					<Link to={"/planner"}>
						<Heading size={"xs"}>Planner</Heading>
					</Link>
					<Link to={"/ingredients"}>
						<Heading size={"xs"}>Ingredients</Heading>
					</Link>
				</HStack>
			</HStack>
			<Spacer></Spacer>
			<HStack>
				<ColorModeSwitch></ColorModeSwitch>
			</HStack>
		</Flex>
	);
};

export default Navbar;
