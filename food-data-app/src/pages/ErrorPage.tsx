import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import sadCatImage from "../assets/404Cat.png";
import giveMeImage from "../assets/errorCat.gif";
import Navbar from "../components/Navbar";
interface ErrorPageProps {
	children?: ReactNode;
}
const ErrorPage = ({ children }: ErrorPageProps) => {
	const error = useRouteError();

	return (
		<>
			<Navbar></Navbar>
			{isRouteErrorResponse(error) ? (
				<>
					<VStack marginX={"24"}>
						<Heading as={"h2"}>
							This page does{" "}
							<Text as="span" color="teal">
								not
							</Text>{" "}
							exist
						</Heading>
						<Box>
							<Image
								boxSize={80}
								src={sadCatImage}
								objectFit={"cover"}
								borderRadius={"50%"}
							/>
						</Box>
						<Heading as={"h5"} size={"sm"} marginTop={4}>
							Select a page from the navbar
						</Heading>
					</VStack>
				</>
			) : (
				<>
					<VStack marginX={"24"}>
						<Heading as={"h2"}>
							Unexpected Error, Give me the Page!
						</Heading>
						<Box>
							<Image
								boxSize={60}
								src={giveMeImage}
								borderRadius={"50%"}
								objectFit={"cover"}
							/>
						</Box>
					</VStack>
				</>
			)}

			<Text>{children}</Text>
		</>
	);
};

export default ErrorPage;
