import { CalendarResponse } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import useTimer from '@/hooks/useTimer';
import React from 'react';
import { styled } from 'styled-components';
import dayjs from 'dayjs';

import ContentInfo from './ContentInfo';
import EventLocation from './EventLocation';
import Rewards from './Rewards';

const Wrapper = styled.div`
	width: 100%;
	padding: 1rem;
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	font-size: ${({ theme }) => theme.fontSize.lg};
	font-weight: bold;
	background-color: ${({ theme }) => theme.bgColor.primary};
	& > div > span:nth-child(1) {
		color: grey;
		margin-right: 1rem;
	}
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

type Props = {
	contents: CalendarResponse[];
};

const ChaosGate = ({ contents }: Props) => {
	const content = useGameContents(contents, '카오스게이트');
	const timer = useTimer(content[0].nextTime);
	return (
		<Wrapper>
			<Title>
				<span>카오스 게이트</span>
				<div>
					<span>{`${
						dayjs(content[0].nextTime).format('HH:mm:ss') || '00:00:00'
					}`}</span>
					<span>{timer || '00:00:00'}</span>
				</div>
			</Title>
			<Container>
				<ContentInfo name={content[0].name} icon={content[0].icon} />
				<EventLocation
					locationInfo={content.map((n) => [
						n.name.split('(')[1].replace(')', ''),
						n.location,
					])}
				/>
				<Rewards rewards={content[0].rewards} />
			</Container>
		</Wrapper>
	);
};

export default ChaosGate;
