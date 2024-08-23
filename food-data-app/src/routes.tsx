import { createBrowserRouter } from "react-router-dom";
import SearchFoods from "./components/SearchFoods";
import Layout from "./pages/Layout";
import Planner from "./components/Planner";
import Dishes from "./components/Dishes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
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
			},
		],
	},
]);

export default router;
