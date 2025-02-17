import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Routers from './Routers';
import Layout from './pages/Layout';

function App() {
	return (
		<React.StrictMode>
			<RecoilRoot>
				<BrowserRouter>
					<Layout>
						<Routers />
					</Layout>
				</BrowserRouter>
			</RecoilRoot>
		</React.StrictMode>
	);
}

export default App;
