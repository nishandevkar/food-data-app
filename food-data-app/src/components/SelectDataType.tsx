import { Select } from "@chakra-ui/react";
import React from "react";

interface SelectDataTypeProps {
	onSelectDataType: (selectedCategory: string) => void;
}
const SelectDataType = ({ onSelectDataType }: SelectDataTypeProps) => {
	return (
		<Select
			defaultValue=""
			onChange={(event) => onSelectDataType(event.target.value)}
			marginBottom={3}
		>
			<option value="Foundation">Foundation</option>
			<option value="SR Legacy">SR Legacy</option>
			<option value="Survey (FNDDS)">Survey (FNDDS)</option>
			<option value="Branded">Branded</option>
		</Select>
	);
};

export default SelectDataType;
