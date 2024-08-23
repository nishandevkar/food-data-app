import { Switch, Text, HStack, useColorMode, Icon } from "@chakra-ui/react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div>
			<HStack>
				<Text fontSize="lg" marginTop={3.5} fontWeight={600}>
					<MdOutlineLightMode />
				</Text>
				<Switch
					isChecked={colorMode === "dark"}
					colorScheme="teal"
					onChange={toggleColorMode}
				/>
				<Text fontSize="lg" marginTop={3.5} fontWeight={600}>
					<MdOutlineDarkMode />
				</Text>
			</HStack>
		</div>
	);
};

export default ColorModeSwitch;
