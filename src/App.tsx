import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
