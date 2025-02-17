import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import { PATHNAME } from '@global/constants';

const Routers = () => {
	return (
		<Routes>
			<Route path={PATHNAME.HOME} element={<Home />} />
			<Route path={PATHNAME.RANKINGS} element={<div />} />
			<Route path={PATHNAME.COLLECTIBLES} element={<div />} />
			<Route path={PATHNAME.STATISTICS} element={<div />} />
			<Route path={PATHNAME.GUILDS} element={<div />}>
				<Route path=':guildid' />
			</Route>
			<Route path={PATHNAME.BISCHECK + ':playerid'} element={<div />} />
			<Route path={PATHNAME.CHARACTER + ':playerid'} element={<div />} />
		</Routes>
	);
};

export default Routers;
