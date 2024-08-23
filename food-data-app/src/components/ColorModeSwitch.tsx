import { Switch, Text, HStack, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div>
			<HStack>
				<Switch
					isChecked={colorMode === "dark"}
					colorScheme="red"
					onChange={toggleColorMode}
				/>
				<Text fontSize="sm" marginTop={3.5} fontWeight={600}>
					Dark Mode
				</Text>
			</HStack>
		</div>
	);
};

export default ColorModeSwitch;
