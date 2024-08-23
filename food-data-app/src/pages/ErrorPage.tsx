import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import image from "../assets/errorCat.gif";
interface ErrorPageProps {
	children: string;
}
const ErrorPage = ({ children }: ErrorPageProps) => {
	return (
		<>
			<VStack marginY={100}>
				<Heading as={"h2"} size={"xl"}>
					Unexpected Error, Give me the Page!
				</Heading>
				<Box boxSize="sm">
					<Image src={image} borderRadius={"50%"} />
				</Box>
			</VStack>
			<Text>{children}</Text>
		</>
	);
};

export default ErrorPage;
