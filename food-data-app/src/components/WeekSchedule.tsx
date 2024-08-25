import { Box, Grid, Text } from "@chakra-ui/react";
import { DndContext } from "@dnd-kit/core";
import WeeklyScheduleRow from "./WeeklyScheduleRow";

export interface WeekScheduleProps {
	parent: any;
}
const WeekSchedule = ({ parent }: WeekScheduleProps) => {
	const dietContainers: string[] = [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun",
	];
	const dietContainers2: string[] = [
		"Mon2",
		"Tue2",
		"Wed2",
		"Thu2",
		"Fri2",
		"Sat2",
		"Sun2",
	];
	return (
		<Box p={4}>
			<Grid
				templateRows={{ base: "repeat(8, 1fr)", sm: "repeat(2,1fr)" }}
				templateColumns={{
					base: "repeat(2, 1fr)",
					sm: "repeat(8,1fr)",
				}}
				gap={9}
			>
				{/* <Text fontWeight="bold">Lunch</Text> */}
				<WeeklyScheduleRow
					supperDetails="Lunch"
					containers={dietContainers}
					parent={parent}
				></WeeklyScheduleRow>
				{/* <Text fontWeight="bold">Dinner</Text> */}
				<WeeklyScheduleRow
					supperDetails="Dinner"
					containers={dietContainers2}
					parent={parent}
				></WeeklyScheduleRow>
			</Grid>
		</Box>
	);
};

export default WeekSchedule;
