import "./App.css";
import ColorModeSwitch from "./components/ColorModeSwitch";
import Navbar from "./components/Navbar";
import SearchFoods from "./components/SearchFoods";
import { Spacer, Text } from "@chakra-ui/react";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<SearchFoods></SearchFoods>
		</>
	);
}

export default App;
