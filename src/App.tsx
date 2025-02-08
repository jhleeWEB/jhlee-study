import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';

function App() {
	return (
		<React.StrictMode>
			<RecoilRoot>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</BrowserRouter>
			</RecoilRoot>
		</React.StrictMode>
	);
}

export default App;
