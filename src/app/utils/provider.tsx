"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Provider({ children }: React.PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: { staleTime: 5000, refetchOnWindowFocus: false },
			},
		})
	);

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default Provider;
