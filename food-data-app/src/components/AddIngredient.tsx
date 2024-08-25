import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Heading,
} from "@chakra-ui/react";
import { AbrigedFoodItem } from "../components/FoodList";
import { useLocalStorage } from "react-use";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const AddIngredient = () => {
	const [ingredientList, setIngredientList] = useLocalStorage<
		AbrigedFoodItem[]
	>("ingredientList", []);
	return (
		<div>
			<Breadcrumb
				spacing="8px"
				separator={<FaAngleRight color="teal" />}
				fontSize={"xs"}
			>
				<BreadcrumbItem>
					<BreadcrumbLink>
						<NavLink to={"/dishes/add-dish"}>
							<b>Add Dish</b>
						</NavLink>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink>
						<b>Add Ingredient</b>
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Heading as={"h2"} margin={20}>
				{" "}
				select ingredients from the available list and add it to the
				dish
			</Heading>
		</div>
	);
};

export default AddIngredient;
