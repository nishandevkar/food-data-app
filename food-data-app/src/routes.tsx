import { createBrowserRouter } from "react-router-dom";
import SearchFoods from "./pages/SearchFoods";
import Layout from "./pages/Layout";
import Planner from "./pages/Planner";
import Dishes from "./pages/Dishes";
import ErrorPage from "./pages/ErrorPage";

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
			},
		],
	},
	{ path: "/dnd", element: <Planner></Planner> },
]);

export default router;
