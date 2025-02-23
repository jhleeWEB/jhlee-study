import Calendar from '@/components/Calendar';
import Events from '@/components/Events';
import Notices from '@/components/Notices';
import SearchBar from '@/components/SearchBar';
import React from 'react';
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

const PanelContainer = styled.section(() => ({
	display: 'grid',
	gridGap: '2rem',
	gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
	padding: '3rem',
	justifyItems: 'center',
}));

const Panel = styled.div(({ theme }) => ({
	width: '100%',
	'&>header': {
		fontWeight: 'bold',
		fontSize: theme.sizes.font.l,
		backgroundColor: theme.colors.background.default,
		padding: ' 1rem',
		borderTopLeftRadius: theme.sizes.border.radius.s,
		borderTopRightRadius: theme.sizes.border.radius.s,
	},
}));

const CalendarContainer = styled.div(({ theme }) => ({
	padding: '3rem',
	'&>header': {
		fontWeight: 'bold',
		fontSize: theme.sizes.font.l,
		backgroundColor: theme.colors.background.default,
		padding: '1rem',
	},
}));

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
					<Notices />
				</Panel>
				<Panel>
					<header>로스트아크 이벤트</header>
					<Events />
				</Panel>
			</PanelContainer>
			<CalendarContainer>
				<header>오늘의 일정</header>
				<Calendar />
			</CalendarContainer>
		</Wrapper>
	);
};

export default Home;
