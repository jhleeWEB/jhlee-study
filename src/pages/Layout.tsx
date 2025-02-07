import React from 'react';
import styled from 'styled-components';
import Router from '../Router';

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

type Props = {
	leftMenu: React.ReactElement;
};

const Layout = ({ leftMenu }: Props) => {
	return (
		<Wrapper>
			<Left>{leftMenu}</Left>
			<Main>
				<Router />
			</Main>
		</Wrapper>
	);
};

export default Layout;
