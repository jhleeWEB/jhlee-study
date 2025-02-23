import { CalendarResponse, Item } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import useTimer from '@/hooks/useTimer';
import React from 'react';
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
	const limitedIslands = useGameContents(contents, '모험 섬');
	const remainingTime = useTimer(limitedIslands[0].nextTime);
	const { nextTime } = limitedIslands[0];

	return (
		<Wrapper>
			<Title>
				<span>모험 섬</span>
				<div>
					<span>{`${dayjs(nextTime).format('HH:mm:ss') || '00:00:00'}`}</span>
					<span>{`${remainingTime || '00:00:00'}`}</span>
				</div>
			</Title>
			<Container>
				{limitedIslands.map(({ limitedRewards, icon, name, rewards }, i) => (
					<Island
						key={name}
						icon={icon}
						name={name}
						rewards={rewards}
						limitedRewards={limitedRewards}
					/>
				))}
			</Container>
		</Wrapper>
	);
};

export default AdventureIsland;
