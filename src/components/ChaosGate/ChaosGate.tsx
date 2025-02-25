import { CalendarResponse } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import useTimer from '@/hooks/useTimer';
import React from 'react';
import { styled } from 'styled-components';
import dayjs from 'dayjs';

import ContentInfo from './ContentInfo';
import EventLocation from './EventLocation';
import Rewards from './Rewards';
import EventTimer from '../EventTimer';

const Wrapper = styled.div(({ theme }) => ({
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

const Container = styled.div(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	fontSize: theme.sizes.font.l,
	backgroundColor: theme.colors.background.dark,
}));

type Props = {
	contents: CalendarResponse[];
};

const ChaosGate = ({ contents }: Props) => {
	const content = useGameContents(contents, '카오스게이트');
	return (
		<Wrapper>
			<Title>
				<span>카오스 게이트</span>
				<EventTimer eventTime={content.upComingEventInfo.eventTime} />
			</Title>
			<Container>
				{content.events.map((event) => (
					<>
						<ContentInfo
							startTimes={event.StartTimes}
							level={event.MinItemLevel}
							name={event.ContentsName}
							icon={event.ContentsIcon}
						/>
						{/* <EventLocation location={event.Location} />
						<Rewards rewards={event.RewardItems} /> */}
					</>
				))}
			</Container>
		</Wrapper>
	);
};

export default ChaosGate;
