import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '@pages/Home';

const Routers = () => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
