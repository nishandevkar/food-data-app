import { HStack, Text } from "@chakra-ui/react";

const Footer = () => {
	return (
		<HStack>
			<Text marginTop={6}>
				©️ U.S. Department of Agriculture (USDA), Agricultural Research
				Service. FoodData Central: Foundation Foods. Version Current:
				April 2024. Internet:{" "}
				<a href="https://fdc.nal.usda.gov" target="_blank">
					fdc.nal.usda.gov
				</a>
			</Text>
		</HStack>
	);
};

export default Footer;
