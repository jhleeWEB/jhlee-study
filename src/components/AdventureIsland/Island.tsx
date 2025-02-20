import { Item } from '@/apis/api';
import { IslandContent } from '@/hooks/useGameContents';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import Icon from '../Icon';

const Wrapper = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	padding: 1rem;
	align-items: center;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.fontSize.lg};
	background-color: ${({ theme }) => theme.bgColor.primary};
`;

const IslandContainer = styled.div`
	display: flex;
	align-items: center;
	& > img {
		margin-right: 1rem;
	}
	font-weight: bold;
`;

const RewardContainer = styled.div`
	cursor: pointer;
`;

const MainLimitedReward = styled.div`
	display: flex;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: bold;
	border-radius: 0.5rem;
	background-color: grey;
	padding: 0.5rem;
	& > img {
		margin-right: 0.5rem;
	}
`;

const PopupWrapper = styled.div`
	position: absolute;
	display: flex;
	background-color: grey;
	padding: 0 1rem 1rem 1rem;
	border-radius: 1rem;
	bottom: 5rem;
	right: 1rem;
	& > div:nth-child(1) {
		margin-right: 2rem;
	}
`;
const PopupContainer = styled.div``;

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
	icon: string;
	name: string;
	rewards: Item[];
	limitedRewards: Item[];
};

const Island = ({ icon, name, rewards, limitedRewards }: Props) => {
	const [showRewards, setShowRewards] = useState(false);
	function toggleShowRewards() {
		setTimeout(() => {
			setShowRewards(!showRewards);
		}, 500);
	}
	return (
		<Wrapper>
			<IslandContainer>
				<Icon src={icon} />
				{name}
			</IslandContainer>
			<RewardContainer
				onMouseEnter={toggleShowRewards}
				onMouseLeave={toggleShowRewards}
			>
				<MainLimitedReward>
					<Icon src={limitedRewards[0].Icon} size={2} />
					{limitedRewards[0].Name}
					{showRewards && (
						<PopupWrapper>
							<PopupContainer>
								<p>상시 보상</p>
								{rewards.map((reward) => (
									<Reward $grade={reward.Grade}>
										<Icon src={reward.Icon} size={2} />
										{reward.Name}
									</Reward>
								))}
							</PopupContainer>
							<PopupContainer>
								<p>한정 보상</p>
								{limitedRewards.map((reward) => (
									<Reward $grade={reward.Grade}>
										<Icon src={reward.Icon} size={2} />
										{reward.Name}
									</Reward>
								))}
							</PopupContainer>
						</PopupWrapper>
					)}
				</MainLimitedReward>
			</RewardContainer>
		</Wrapper>
	);
};

export default Island;
