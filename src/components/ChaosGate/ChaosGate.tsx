import { CalendarResponse } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import useTimer from '@/hooks/useTimer';
import React from 'react';
import { styled } from 'styled-components';
import dayjs from 'dayjs';

import ContentInfo from './ContentInfo';
import EventLocation from './EventLocation';
import Rewards from './Rewards';

const Wrapper = styled.div(({ theme }) => ({
	width: '100%',
	padding: theme.sizes.gap.s,
	fontSize: theme.sizes.font.m,
	background: theme.colors.background.dark,
}));

const Title = styled.div(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	padding: theme.sizes.gap.s,
	fontSize: theme.sizes.font.l,
	fontWeight: theme.sizes.font.weight.l,
	backgroundColor: theme.colors.background.default,
	'&>div>span:nth-child(1)': {
		color: theme.colors.background.light,
		marginRight: theme.sizes.gap.s,
	},
}));

const Container = styled.div`
	display: flex;
	font-size: ${({ theme }) => theme.sizes.font.l};
	background-color: ${({ theme }) => theme.colors.background.dark};
`;

type Props = {
	contents: CalendarResponse[];
};

const ChaosGate = ({ contents }: Props) => {
	const content = useGameContents(contents, '카오스게이트');
	const timer = useTimer();
	return (
		<Wrapper>
			{/* <Title>
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
			</Container> */}
		</Wrapper>
	);
};

export default ChaosGate;
