import { Box, GridItem, Text, Image } from "@chakra-ui/react";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import droppedImage from "../assets/404Cat.png";
interface WeeklyScheduleRowProps {
	containers: string[];
	parent: any;
	supperDetails: string;
}
const WeeklyScheduleRow = ({
	containers,
	parent,
	supperDetails,
}: WeeklyScheduleRowProps) => {
	const elementSize = 20;
	return (
		<>
			<Text fontWeight="bold">{supperDetails}</Text>
			{containers.map((id) => (
				<GridItem>
					<Box display={"flex"} justifyContent={"center"} key={id}>
						{parent === id.toString() ? (
							<Draggable id="id" key={id}>
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
									borderRadius={"50%"}
									display={"flex"}
									justifyContent={"center"}
								>
									<Text
										fontWeight={"bold"}
										alignSelf={"center"}
									>
										{" "}
										{id}
									</Text>
								</Box>
							</Droppable>
						)}
					</Box>
				</GridItem>
			))}
		</>
	);
};

export default WeeklyScheduleRow;
