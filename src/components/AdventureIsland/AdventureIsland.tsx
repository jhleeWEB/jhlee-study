import { CalendarResponse, Item } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import useTimer from '@/hooks/useTimer';
import React, { useDebugValue } from 'react';
import { styled } from 'styled-components';
import Island from './Island';
import dayjs from 'dayjs';

const Wrapper = styled.div(({ theme }) => ({
	padding: theme.sizes.gap.s,
	backgroundColor: theme.colors.background.dark,
}));

const Title = styled.div(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	padding: theme.sizes.gap.s,
	fontSize: theme.sizes.font.m,
	fontWeight: theme.sizes.font.weight.l,
	'&>div>span:nth-child(1)': {
		color: theme.colors.font.dark,
		marginRight: theme.sizes.gap.s,
	},
}));

const Container = styled.div`
	display: flex;
`;

type Props = {
	contents: CalendarResponse[];
};

const AdventureIsland = ({ contents }: Props) => {
	const islandContents = useGameContents(contents, '모험 섬');
	const remainingTime = useTimer(islandContents.upComingEventInfo?.eventTime);

	return (
		<Wrapper>
			<Title>
				<span>모험 섬</span>
				<div>
					<span>{`${
						dayjs(islandContents.upComingEventInfo.eventTime).format(
							'HH:mm:ss'
						) || '00:00:00'
					}`}</span>
					<span>{`${remainingTime || '00:00:00'}`}</span>
				</div>
			</Title>

			<Container>
				{islandContents.events.length == 0 && <div>일정이 없습니다.</div>}
				{islandContents.events.map(
					({ ContentsIcon, ContentsName, RewardItems }, i) => (
						<Island
							key={ContentsName + i}
							icon={ContentsIcon}
							name={ContentsName}
							rewards={RewardItems}
						/>
					)
				)}
			</Container>
		</Wrapper>
	);
};

export default AdventureIsland;
