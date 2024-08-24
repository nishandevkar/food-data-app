import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Droppable from "./Droppable";

const DroppableGrid = () => {
	return (
		<Grid templateColumns="repeat(6, 1fr)" gap={6}>
			<GridItem colSpan={2} h="10" bg="tomato">
				<Droppable>
					<Box bgColor={"gray"}></Box>
				</Droppable>
			</GridItem>
			<GridItem colSpan={2} h="10" bg="tomato">
				<Droppable>
					<Box bgColor={"gray"}>Box</Box>
				</Droppable>
			</GridItem>
			<GridItem colSpan={2} h="10" bg="tomato">
				<Droppable>
					<Box bgColor={"gray"}></Box>
				</Droppable>
			</GridItem>
		</Grid>
	);
};

export default DroppableGrid;
