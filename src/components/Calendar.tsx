import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import apis, { CalendarResponse } from '@/apis/api';
import { styled } from 'styled-components';
import AdventureIsland from './AdventureIsland/AdventureIsland';
import FieldBoss from './FieldBoss/FieldBoss';

const Wrapper = styled.div``;

const Calendar = () => {
	const { data } = useQuery<any, any, CalendarResponse[]>({
		queryKey: ['gamecontent', 'calendar'],
		queryFn: () => apis.contents.getCalender(),
	});
	const [fieldBoss, setFieldBoss] = useState<CalendarResponse[]>([]);
	const [chaosGate, setChaosGate] = useState<CalendarResponse[]>([]);
	const [adventureIsland, setAdventureIsland] = useState<CalendarResponse[]>(
		[]
	);
	useEffect(() => {
		if (data) {
			(function batch() {
				setFieldBoss(data.filter((n) => n.CategoryName == '필드보스'));
				setChaosGate(data.filter((n) => n.CategoryName == '카오스게이트'));
				setAdventureIsland(
					data.filter((n) => n.CategoryName.includes('모험 섬'))
				);
			})();
		}
	}, [data]);
	return (
		<Wrapper>
			{adventureIsland && adventureIsland.length > 0 && (
				<AdventureIsland contents={adventureIsland} />
			)}
			{fieldBoss && fieldBoss.length > 0 && <FieldBoss contents={fieldBoss} />}
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
