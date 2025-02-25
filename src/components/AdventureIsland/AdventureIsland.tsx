import { CalendarResponse, Item } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import React from 'react';
import { styled } from 'styled-components';
import Island from './Island';
import EventTimer from '../EventTimer';

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
}));

const Container = styled.div`
	display: flex;
`;

type Props = {
	contents: CalendarResponse[];
};

const AdventureIsland = ({ contents }: Props) => {
	const islandContents = useGameContents(contents, '모험 섬');
	return (
		<Wrapper>
			<Title>
				<span>모험 섬</span>
				<EventTimer eventTime={islandContents.upComingEventInfo.eventTime} />
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
