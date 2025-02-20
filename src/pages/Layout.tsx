import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
	width: 100vw;
	background-color: ${({ theme }) => theme.bgColor.secondary};
`;

const Main = styled.section``;

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<Wrapper>
			<Header />
			<NavigationBar />
			<Main>{children}</Main>
			<Footer />
		</Wrapper>
	);
};

export default Layout;
