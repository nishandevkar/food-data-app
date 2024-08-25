import { NavLink } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Dishes = () => {
	const location = useLocation();
	const [parent, enableAnimation] = useAutoAnimate();
	const isAddingDish = location.pathname === "/dishes/add-dish";
	const isAddingIngredient = location.pathname === "/dishes/add-ingredient";

	return (
		<Box padding={4} ref={parent}>
			{/* Conditionally render the button based on the route */}
			{!isAddingDish && !isAddingIngredient && (
				<NavLink to={"/dishes/add-dish"}>
					<Button>Add a dish!</Button>
				</NavLink>
			)}
			<Outlet />
		</Box>
	);
};

export default Dishes;
