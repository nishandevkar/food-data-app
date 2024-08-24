import {
	Box,
	Grid,
	GridItem,
	Heading,
	Text,
	Image,
	Square,
	Center,
} from "@chakra-ui/react";

import { DndContext } from "@dnd-kit/core";
import draggableImage from "../assets/errorCat.gif";
import droppedImage from "../assets/404Cat.png";
import Draggable from "../components/Draggable";
import Droppable from "../components/Droppable";
import { MouseEventHandler, useState } from "react";
import DroppableGrid from "../components/DroppableGrid";
import WeekSchedule from "../components/WeekSchedule";

const Planner = () => {
	const containers = ["A", "B", "C"];
	const dietContainers: number[] = [1, 2, 3, 4, 5, 6, 7];
	const [parent, setParent] = useState(null);
	const [isDropped, setIsDropped] = useState(false);
	const draggableMarkup = (
		<Draggable id="draggable">
			<Box boxSize={20}>
				<Image
					src={draggableImage}
					borderRadius={"50%"}
					style={{ touchAction: "none" }}
				></Image>
			</Box>
		</Draggable>
	);
	const droppedMarkup = (
		<Draggable id="id">
			<Box boxSize={20}>
				<Image
					style={{ touchAction: "none" }}
					width={20}
					height={20}
					src={droppedImage}
					borderRadius={"50%"}
					objectFit={"cover"}
				></Image>
			</Box>
		</Draggable>
	);
	return (
		<>
			<DndContext
				onDragEnd={handleDragEnd}
				autoScroll={{
					acceleration: 20000,
				}}
			>
				{parent === null ? draggableMarkup : <Box boxSize={20}></Box>}

				{/* <Grid templateColumns="repeat(6, 1fr)" gap={6}>
					{containers.map((id) => (
						<GridItem
							key={id}
							colSpan={2}
							h="20"
							bg="tomato"
							display={"flex"}
							justifyContent={"center"}
						>
							{parent === id ? (
								droppedMarkup
							) : (
								<Droppable id={id}>Drop here</Droppable>
							)}
						</GridItem>
					))}
				</Grid> */}
				<WeekSchedule
					parent={parent}
					containers={dietContainers}
				></WeekSchedule>
			</DndContext>
		</>
	);
	function handleDragEnd(event: any) {
		const { over } = event;
		setParent(over ? over.id : null);
	}
};

export default Planner;
