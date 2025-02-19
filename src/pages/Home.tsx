import News from '@/components/News';
import SearchBar from '@/components/SearchBar';
import React, { useMemo, useRef, useState } from 'react';
import { styled } from 'styled-components';
import bgImg from '../imgs/bg-img.jpg';

const Wrapper = styled.section`
	width: 100%;
`;

const Main = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 360px;
	background-image: linear-gradient(
			180deg,
			rgba(17, 17, 20, 40%),
			rgba(17, 17, 20, 90%)
		),
		url(${bgImg});
	background-size: cover;
`;
const MainContainer = styled.div`
	justify-content: center;
	text-align: center;
`;

const PanelContainer = styled.section`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	padding: 3rem;
	justify-items: center;
`;

const Panel = styled.div`
	width: 100%;
	& > header {
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSize.lg};
		background-color: ${({ theme }) => theme.bgColor.primary};
		padding: 1rem;
	}
`;

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
				<Panel>
					<header>로스트아크 공지사항</header>
					<News type='notices' />
				</Panel>
				<Panel>
					<header>즐겨찾기</header>
					<News type='notices' />
				</Panel>
				<Panel>
					<header>로스트아크 이벤트</header>
					<News type='notices' />
				</Panel>
				<Panel>
					<header>오늘의 일정</header>
					<News type='notices' />
				</Panel>
			</PanelContainer>
		</Wrapper>
	);
};

export default Home;
