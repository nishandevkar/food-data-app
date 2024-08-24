import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
	children?: ReactNode;
	id: string;
}
function Droppable({ children, id }: DroppableProps) {
	const { isOver, setNodeRef } = useDroppable({
		id: id,
	});
	const style = {
		color: isOver ? "green" : undefined,
	};

	return (
		<div ref={setNodeRef} style={style}>
			{children}
		</div>
	);
}

export default Droppable;
