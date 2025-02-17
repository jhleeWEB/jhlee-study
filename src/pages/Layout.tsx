import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Home from './Home';

const Wrapper = styled.section`
	width: 100vw;
	background-color: salmon;
`;

const Main = styled.section``;

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<Wrapper>
			<Header>
				<h1>lostark search</h1>
				<input placeholder='케릭터 검색'></input>
			</Header>
			<Main>{children}</Main>
			<Footer />
		</Wrapper>
	);
};

export default Layout;
