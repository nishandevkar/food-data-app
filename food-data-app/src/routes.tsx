import { createBrowserRouter } from "react-router-dom";
import SearchFoods from "./pages/SearchFoods";
import Layout from "./pages/Layout";
import Planner from "./pages/Planner";
import Dishes from "./pages/Dishes";
import ErrorPage from "./pages/ErrorPage";
import AddDish from "./components/AddDish";
import AddIngredient from "./components/AddIngredient";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "ingredients",
				element: <SearchFoods />,
			},
			{
				path: "planner",
				element: <Planner></Planner>,
			},
			{
				path: "dishes",
				element: <Dishes></Dishes>,
				children: [
					{ path: "add-dish", element: <AddDish></AddDish> },
					{
						path: "add-ingredient",
						element: <AddIngredient></AddIngredient>,
					},
				],
			},
		],
	},
	{ path: "/dnd", element: <Planner></Planner> },
]);

export default router;
