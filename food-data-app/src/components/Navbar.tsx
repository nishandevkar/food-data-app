import { Box, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
interface NavbarProps {
	children: ReactNode;
}
const Navbar = ({ children }: NavbarProps) => {
	return (
		<Box display={"flex"}>
			<HStack padding="1rem">{children}</HStack>
		</Box>
	);
};

export default Navbar;
