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

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // default: true
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<ReactQueryDevtools />
				<App />
			</ChakraProvider>
		</QueryClientProvider>
	</StrictMode>
);
