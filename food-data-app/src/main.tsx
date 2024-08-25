import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider, ThemeConfig } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import theme from "./theme.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<RouterProvider router={router} />
				<ReactQueryDevtools />
				<App />
			</ChakraProvider>
		</QueryClientProvider>
	</StrictMode>
);
