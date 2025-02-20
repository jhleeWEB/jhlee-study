import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import apis, { CalendarResponse, CategoryName } from '@/apis/api';
import { styled } from 'styled-components';
import AdventureIsland from './AdventureIsland/AdventureIsland';
import useTimer from '@/hooks/useTimer';

const Wrapper = styled.div``;

const Title = styled.p`
	display: flex;
	justify-content: space-between;
	padding: 0rem 1rem;
	font-size: ${({ theme }) => theme.fontSize.lg};
`;
const Calendar = () => {
	const { data } = useQuery<any, any, CalendarResponse[]>({
		queryKey: ['gamecontent', 'calendar'],
		queryFn: () => apis.contents.getCalender(),
	});
	const [worldBoss, setWorldBoss] = useState<CalendarResponse[]>([]);
	const [chaosGate, setChaosGate] = useState<CalendarResponse[]>([]);
	const [adventureIsland, setAdventureIsland] = useState<CalendarResponse[]>(
		[]
	);
	useEffect(() => {
		if (data) {
			(function batch() {
				setWorldBoss(data.filter((n) => n.CategoryName == '필드보스'));
				setChaosGate(data.filter((n) => n.CategoryName == '카오스게이트'));
				setAdventureIsland(data.filter((n) => n.CategoryName.includes('모험')));
			})();
		}
	}, [data]);
	return (
		<Wrapper>
			<Title>모험 섬</Title>
			{adventureIsland && adventureIsland.length > 0 && (
				<AdventureIsland contents={adventureIsland} />
			)}
			{/* <Title>필드 보스</Title>
			{worldBoss.map((n) => (
				<div>{n.ContentsName}</div>
			))}
			<Title>카오스 게이트</Title>
			{chaosGate.map((n) => (
				<div>{n.ContentsName}</div>
			))} */}
		</Wrapper>
	);
};

export default Calendar;
