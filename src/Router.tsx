import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Algorithm from './pages/Algorithm';
import ReactPage from './pages/ReactPage';
import Javascript from './pages/Javascript';
import ThreeJS from './pages/ThreeJS';

const Routers = () => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/algorithm' element={<Algorithm />} />
				<Route path='/react' element={<ReactPage />} />
				<Route path='/javascript' element={<Javascript />} />
				<Route path='/threejs' element={<ThreeJS />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
