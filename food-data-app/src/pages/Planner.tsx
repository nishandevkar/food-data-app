import { Box, Image } from "@chakra-ui/react";

import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import droppedImage from "../assets/404Cat.png";
import draggableImage from "../assets/errorCat.gif";
import Draggable from "../components/Draggable";
import WeekSchedule from "../components/WeekSchedule";

const Planner = () => {
	const [parent, setParent] = useState(null);
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
					layoutShiftCompensation: false,
					acceleration: 1000,
				}}
			>
				{parent === null ? draggableMarkup : <Box boxSize={20}></Box>}
				<WeekSchedule parent={parent}></WeekSchedule>
			</DndContext>
		</>
	);
	function handleDragEnd(event: any) {
		const { over } = event;
		setParent(over ? over.id : null);
	}
};

export default Planner;
