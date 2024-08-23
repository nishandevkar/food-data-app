import { createBrowserRouter } from "react-router-dom";
import SearchFoods from "./components/SearchFoods";
import Navbar from "./components/Navbar";
import Planner from "./pages/Planner";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

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
