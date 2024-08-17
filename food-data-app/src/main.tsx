import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider, ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
			},
		},
		Select: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
			},
		},
	},
	colors: {
		gray: {
			50: "#f9f9f9",
			100: "#ededed",
			200: "#d3d3d3",
			300: "#b3b3b3",
			400: "#a0a0a0",
			500: "#898989",
			600: "#636363",
			700: "#202020",
			800: "#121212",
			900: "#111",
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</StrictMode>
);
