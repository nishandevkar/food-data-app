import { createBrowserRouter } from "react-router-dom";
import SearchFoods from "./components/SearchFoods";
import Layout from "./pages/Layout";
import Planner from "./pages/Planner";

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
		],
	},
]);

export default router;
