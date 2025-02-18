import SearchBar from '@/components/SearchBar';
import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`
	width: 100vw;
`;

const Main = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 360px;
	background-color: lightyellow;
`;
const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
`;

const PanelContainer = styled.section``;

const Panel = styled.div``;

const Home = () => {
	return (
		<Wrapper>
			<Main>
				<MainContainer>
					main
					<SearchBar />
				</MainContainer>
			</Main>
			<PanelContainer>
				<Panel></Panel>
			</PanelContainer>
		</Wrapper>
	);
};

export default Home;
