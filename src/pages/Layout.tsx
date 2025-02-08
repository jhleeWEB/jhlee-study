import React from 'react';
import styled from 'styled-components';
import Routers from '../Routers';
import { BrowserRouter } from 'react-router';
import Menu from '@/components/menus/Menu';
import Home from './Home';
import Algorithm from './Algorithm';
import Javascript from './Javascript';

const Wrapper = styled.section`
	display: flex;
	width: 100vw;
	height: 100vh;
`;

const Main = styled.section`
	width: 100%;
	margin: 0;
	background: lightblue;
`;

const Layout = () => {
	return <Wrapper></Wrapper>;
};

export default Layout;
