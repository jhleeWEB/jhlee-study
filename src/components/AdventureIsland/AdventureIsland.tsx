import { CalendarResponse, Item } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import useTimer from '@/hooks/useTimer';
import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Island from './Island';
import dayjs from 'dayjs';

const Wrapper = styled.div`
	padding: 1rem;
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	font-size: ${({ theme }) => theme.fontSize.lg};
	font-weight: bold;

	& > div > span:nth-child(1) {
		color: grey;
		margin-right: 1rem;
	}
`;

const Container = styled.div`
	display: flex;
`;

type Props = {
	contents: CalendarResponse[];
};

const AdventureIsland = ({ contents }: Props) => {
	const limitedIslands = useGameContents(contents);
	const remainingTime = useTimer(limitedIslands[0].nextTime);
	const { nextTime } = limitedIslands[0];

	return (
		<Wrapper>
			<Title>
				<span>모험 섬</span>
				<div>
					<span>{`${dayjs(nextTime).format('HH:mm:ss')}`}</span>
					<span>{`${remainingTime}`}</span>
				</div>
			</Title>
			<Container>
				{limitedIslands.map(
					({ limitedRewards, icon, islandName, rewards }, i) => (
						<Island
							key={islandName}
							icon={icon}
							name={islandName}
							rewards={rewards}
							limitedRewards={limitedRewards}
						/>
					)
				)}
			</Container>
		</Wrapper>
	);
};

export default AdventureIsland;
