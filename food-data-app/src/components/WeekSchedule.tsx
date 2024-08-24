import React from "react";
import { Box, SimpleGrid, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import droppedImage from "../assets/404Cat.png";
import Droppable from "./Droppable";
import Draggable from "./Draggable";

interface WeekScheduleProps {
	containers: number[];
	parent: any;
}
const WeekSchedule = ({ containers, parent }: WeekScheduleProps) => {
	const elementSize = 20;
	return (
		<Box p={4}>
			<Grid
				templateRows={{ base: "repeat(8, 1fr)", sm: "repeat(2,1fr)" }}
				templateColumns={{
					base: "repeat(2=1, 1fr)",
					sm: "repeat(8,1fr)",
				}}
				gap={1}
			>
				{/* Headings */}
				{/* <Box />
				<Text textAlign="center">Mon</Text>
				<Text textAlign="center">Tue</Text>
				<Text textAlign="center">Wed</Text>
				<Text textAlign="center">Thu</Text>
				<Text textAlign="center">Fri</Text>
				<Text textAlign="center">Sat</Text>
				<Text textAlign="center">Sun</Text> */}
				{/* /* Lunch Row */}
				<Text fontWeight="bold">Lunch</Text>
				{containers.map((id) => (
					<GridItem>
						<Box display={"flex"} justifyContent={"center"}>
							{parent === id.toString() ? (
								<Draggable id="id">
									<Box boxSize={elementSize} aspectRatio={1}>
										<Image
											style={{ touchAction: "none" }}
											width={elementSize}
											height={elementSize}
											src={droppedImage}
											borderRadius={"50%"}
											objectFit={"cover"}
										></Image>
									</Box>
								</Draggable>
							) : (
								<Droppable id={id.toString()}>
									<Box
										style={{ touchAction: "none" }}
										aspectRatio={1}
										boxSize={elementSize}
										borderColor={"gray"}
										bgColor={"teal"}
									></Box>
								</Droppable>
							)}
						</Box>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};

export default WeekSchedule;
