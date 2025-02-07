import React from 'react';
import styled from 'styled-components';
import Routers from '../Routers';
import { BrowserRouter } from 'react-router';
import Menu from '@/components/menus/Menu';
import SubMenu from '@/components/menus/SubMenu';

const Wrapper = styled.section`
	display: flex;
	width: 100vw;
	height: 100vh;
`;

const Left = styled.section`
	min-width: 10rem;
	margin: 0;
	padding: 0;
	background: lightgreen;
`;

const Main = styled.section`
	width: 100%;
	margin: 0;
	background: lightblue;
`;

const Layout = () => {
	return (
		<Wrapper>
			<BrowserRouter>
				<Menu />
				<SubMenu />
				<Main>
					<Routers />
				</Main>
			</BrowserRouter>
		</Wrapper>
	);
};

export default Layout;
