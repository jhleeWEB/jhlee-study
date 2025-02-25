import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router';
import Routers from './Routers';
import Layout from './pages/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
function App() {
	const queryClient = new QueryClient();

	return (
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<BrowserRouter>
						<ThemeProvider theme={theme}>
							<Layout>
								<Routers />
							</Layout>
						</ThemeProvider>
					</BrowserRouter>
				</RecoilRoot>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</React.StrictMode>
	);
}

export default App;
