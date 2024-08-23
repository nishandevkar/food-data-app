import { Flex, HStack, Heading, Spacer } from "@chakra-ui/react";
import { TbHealthRecognition } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
	return (
		<Flex margin={3}>
			<HStack>
				<Heading as="h2" size={"xl"}>
					<TbHealthRecognition />
				</Heading>

				<HStack spacing={4}>
					<NavLink
						to={"/planner"}
						style={({ isActive }) => {
							return {
								fontWeight: isActive ? "bold" : "",
								color: isActive ? "teal" : "",
							};
						}}
					>
						<Heading
							size={"xs"}
							_hover={{
								transform: "scale(1.1)",
								transition: " .4s ease",
							}}
						>
							Planner
						</Heading>
					</NavLink>
					<NavLink
						to="/ingredients"
						style={({ isActive }) => {
							return {
								fontWeight: isActive ? "bold" : "",
								color: isActive ? "teal" : "",
							};
						}}
					>
						<Heading
							size={"xs"}
							_hover={{
								transform: "scale(1.1)",
								transition: " .4s ease",
							}}
						>
							Ingredients
						</Heading>
					</NavLink>
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
