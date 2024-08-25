import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Heading,
} from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AddDish = () => {
	return (
		<div>
			<Breadcrumb
				spacing="8px"
				separator={<FaAngleRight color="teal" />}
				fontSize={"xs"}
			>
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href="/dishes/add-dish">
						<b>Add Dish</b>
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Heading as={"h2"} margin={20}>
				Add a Dish to the app and then select an ingredient{" "}
			</Heading>
			<NavLink to={"/dishes/add-ingredient"}>
				<Button>Add Ingredients!</Button>
			</NavLink>
		</div>
	);
};

export default AddDish;
