import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

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
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="searchText" className="form-label">
					Search Foods
				</label>
				<input
					{...register("searchText", {
						required: true,
						minLength: 3,
					})}
					id="searchText"
					type="text"
					className="form-control"
				/>
				{errors.name?.type === "required" && (
					<p className="text-danger">The search text is required</p>
				)}
				{errors.name?.type === "minLength" && (
					<p className="text-danger">
						The name should be 3 characters long
					</p>
				)}
				<button className="btn btn-primary m-3" type="submit">
					Submit{" "}
				</button>
			</form>
		</>
	);
};

export default SearchInput;
