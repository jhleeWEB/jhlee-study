import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router';
import Routers from './Routers';
import Layout from './pages/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
	const queryClient = new QueryClient();

	return (
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<BrowserRouter>
						<Layout>
							<Routers />
						</Layout>
					</BrowserRouter>
				</RecoilRoot>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</React.StrictMode>
	);
}

export default App;
