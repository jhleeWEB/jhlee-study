import { Item } from '@/apis/api';
import { IItem } from '@/theme';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import Icon from '../Icon';

const Wrapper = styled.div(({ theme }) => ({
	position: 'relative',
	width: '100%',
	padding: theme.sizes.gap.s,
	fontSize: theme.sizes.font.m,
	background: theme.colors.background.dark,
}));

const IslandContainer = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: theme.sizes.gap.s,
	background: theme.colors.background.default,
	borderRadius: theme.sizes.border.radius.s,
}));

const IslandName = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	'&>img': {
		marginRight: theme.sizes.gap.s,
	},
	fontWeight: theme.sizes.font.weight.l,
}));

const RewardContainer = styled.div`
	cursor: pointer;
`;

const MainLimitedReward = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	fontSize: theme.sizes.font.s,
	fontWeight: theme.sizes.font.weight.l,
	borderRadius: theme.sizes.gap.xs,
	backgroundColor: theme.colors.background.light,
	padding: theme.sizes.gap.xs,
	'&>img': {
		marginRight: theme.sizes.gap.xs,
	},
}));

const PopupWrapper = styled.div(({ theme }) => ({
	position: 'absolute',
	display: 'flex',
	bottom: '6rem',
	right: '1rem',
	minWidth: '24rem',
	padding: theme.sizes.gap.s,
	background: theme.colors.background.darken,
	borderRadius: theme.sizes.border.radius.s,
	'&>div:nth-child(1)': {
		marginRight: theme.sizes.gap.l,
	},
}));

type RewardProps = {
	$grade: string;
};
const Reward = styled.div<RewardProps>(({ theme, $grade }) => {
	const itemColor: IItem = theme.colors.item;
	return {
		display: 'flex',
		alignItems: 'center',
		color: itemColor[$grade],
		'&>img': {
			marginRight: theme.sizes.gap.xs,
		},
	};
});

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
				<IslandName>
					<Icon src={icon} />
					{name}
				</IslandName>
				<RewardContainer
					onMouseEnter={toggleShowRewards}
					onMouseLeave={toggleShowRewards}
				>
					<MainLimitedReward>
						<Icon src={limitedRewards[0].Icon} size={2} />
						{limitedRewards[0].Name}
						{showRewards && (
							<PopupWrapper>
								<div>
									<p>상시 보상</p>
									{rewards.map((reward) => (
										<Reward key={reward.Name} $grade={reward.Grade}>
											<Icon src={reward.Icon} size={2} />
											{reward.Name}
										</Reward>
									))}
								</div>
								<div>
									<p>한정 보상</p>
									{limitedRewards.map((reward) => (
										<Reward key={reward.Name} $grade={reward.Grade}>
											<Icon src={reward.Icon} size={2} />
											{reward.Name}
										</Reward>
									))}
								</div>
							</PopupWrapper>
						)}
					</MainLimitedReward>
				</RewardContainer>
			</IslandContainer>
		</Wrapper>
	);
};

export default Island;
