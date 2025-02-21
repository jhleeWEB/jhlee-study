import { Item } from '@/apis/api';
import React from 'react';
import { styled } from 'styled-components';
import Icon from '../Icon';

const Wrapper = styled.div``;

const RewardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	font-size: ${({ theme }) => theme.sizes.font.m};
`;

type RewardProps = {
	$grade: string;
};
const Reward = styled.div<RewardProps>`
	display: flex;
	align-items: center;
	color: ${(props) => {
		switch (props.$grade) {
			case '유물':
				return 'orange';
			case '전설':
				return 'yellow';
			case '영웅':
				return 'purple';
			case '희귀':
				return 'blue';
			case '고급':
				return 'green';
			default:
				return 'white';
		}
	}};
	& > img {
		margin-right: 0.5rem;
	}
`;

type Props = {
	rewards: Item[];
};

const Rewards = ({ rewards }: Props) => {
	return (
		<Wrapper>
			<div>
				<p>보상</p>
			</div>
			<RewardsContainer>
				{rewards.map((n, i) => (
					<Reward key={n.Name + i} $grade={n.Grade}>
						<Icon src={n.Icon} size={2} />
						{n.Name}
					</Reward>
				))}
			</RewardsContainer>
		</Wrapper>
	);
};

export default Rewards;
