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

const Planner = () => {
	const containers = ["A", "B", "C"];
	const [parent, setParent] = useState(null);
	const [isDropped, setIsDropped] = useState(false);
	const draggableMarkupRed = (
		<Box bgColor={"red"} borderRadius={"50%"} boxSize={20}></Box>
	);
	const draggableMarkupGreen = (
		<Box bgColor={"Green"} borderRadius={"50%"} boxSize={20}></Box>
	);
	return (
		<>
			<DndContext onDragEnd={handleDragEnd}>
				{parent === null ? (
					<Draggable id="draggable">
						<Box boxSize={20}>
							<Image
								src={draggableImage}
								borderRadius={"50%"}
							></Image>
						</Box>
					</Draggable>
				) : (
					<Box boxSize={20}></Box>
				)}

				<Grid templateColumns="repeat(6, 1fr)" gap={6}>
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
								<Draggable id="id">
									<Box boxSize={20}>
										<Image
											width={20}
											height={20}
											src={droppedImage}
											borderRadius={"50%"}
											objectFit={"cover"}
										></Image>
									</Box>
								</Draggable>
							) : (
								<Droppable id={id}>Drop here</Droppable>
							)}
						</GridItem>
					))}
				</Grid>
			</DndContext>
		</>
	);
	function handleDragEnd(event: any) {
		const { over } = event;
		setParent(over ? over.id : null);
	}
};

export default Planner;
