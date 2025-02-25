import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import { PATHNAME } from '@global/constants';
import Characters from './components/Characters/Characters';

const Routers = () => {
	return (
		<Routes>
			<Route path={PATHNAME.HOME} element={<Home />} />
			<Route path={PATHNAME.RANKINGS} element={<div />} />
			<Route path={PATHNAME.COLLECTIBLES} element={<div />} />
			<Route path={PATHNAME.STATISTICS} element={<div />} />
			<Route path={PATHNAME.GUILDS} element={<div />}>
				<Route path=':guildId' />
			</Route>
			<Route path={PATHNAME.BISCHECK + ':playerId'} element={<div />} />
			<Route path={PATHNAME.CHARACTER + ':playerId'} element={<Characters />} />
		</Routes>
	);
};

export default Routers;
