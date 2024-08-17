import { Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
	return (
		<Flex margin={3}>
			<Heading as="h2" size="xl">
				SearchFoods
			</Heading>
			<Spacer></Spacer>
			<HStack>
				<ColorModeSwitch></ColorModeSwitch>
			</HStack>
		</Flex>
	);
};

export default Navbar;
