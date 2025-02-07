import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Algorithm from './pages/Algorithm';
import ReactJS from './pages/ReactJS';
import Javascript from './pages/Javascript';
import ThreeJS from './pages/ThreeJS';
import { PATHNAME } from '@global/constants';

const Routers = () => {
	return (
		<Routes>
			<Route path={PATHNAME.HOME} element={<Home />} />
			<Route path={PATHNAME.ALGORITHM} element={<Algorithm />} />
			<Route path={PATHNAME.REACTJS} element={<ReactJS />} />
			<Route path={PATHNAME.JAVASCRIPT} element={<Javascript />} />
			<Route path={PATHNAME.THREEJS} element={<ThreeJS />} />
		</Routes>
	);
};

export default Routers;
