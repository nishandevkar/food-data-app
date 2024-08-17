import {
	Box,
	Button,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { MdOutlineSearch } from "react-icons/md";

interface SearchInputProps {
	onSubmit: (data: FieldValues) => void;
}
const SearchInput = ({ onSubmit }: SearchInputProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<Box>
			<form onSubmit={handleSubmit(onSubmit)}>
				<HStack marginX={2}>
					<InputGroup size="md">
						<Input
							variant={"filled"}
							placeholder="Search"
							{...register("searchText", {
								required: true,
								minLength: 3,
							})}
							id="searchText"
							type="text"
						/>
						<InputRightElement>
							<IconButton
								type="submit"
								onSubmit={handleSubmit(onSubmit)}
								aria-label="Search database"
								icon={<MdOutlineSearch />}
							/>
						</InputRightElement>
					</InputGroup>
					{errors.name?.type === "required" && (
						<p className="text-danger">
							The search text is required
						</p>
					)}
					{errors.name?.type === "minLength" && (
						<p className="text-danger">
							The name should be 3 characters long
						</p>
					)}
				</HStack>
			</form>
		</Box>
	);
};

export default SearchInput;
