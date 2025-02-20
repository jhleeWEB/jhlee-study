import { CalendarResponse, Item } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import useTimer from '@/hooks/useTimer';
import React, { useEffect, useReducer, useState } from 'react';
import { styled } from 'styled-components';
import Island from './Island';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
`;

const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 1rem;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.fontSize.lg};
	background-color: ${({ theme }) => theme.bgColor.primary};
`;

const Title = styled.p``;
const Icon = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
`;

const Rewards = styled.div`
	position: relative;
	display: flex;
	cursor: pointer;
	border-radius: 5%;
	padding: 0.5rem;
	align-items: center;
	background-color: gray;
`;

const AllRewards = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: grey;
	border-radius: 1rem;
	padding: 1rem;
	left: -100%;
	bottom: 100%;
	& > text {
		font-size: ${({ theme }) => theme.fontSize.sm};
	}
`;

type Props = {
	contents: CalendarResponse[];
};

const AdventureIsland = ({ contents }: Props) => {
	const limitedIslands = useGameContents(contents);
	const [showRewards, setShowRewards] = useState(
		// Array(limitedIslands.length).fill(true)
		[true, false, false]
	);

	function onHover(index: number) {
		setTimeout(() => {
			const temp = [...showRewards];
			temp[index] = !showRewards[index];
			setShowRewards(temp);
		}, 600);
	}
	return (
		<Wrapper>
			{limitedIslands.map(
				({ limitedRewards, icon, islandName, rewards }, i) => (
					<Island
						icon={icon}
						name={islandName}
						rewards={rewards}
						limitedRewards={limitedRewards}
					/>
				)
			)}
		</Wrapper>
	);
};

export default AdventureIsland;
