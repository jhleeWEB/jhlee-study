import { CalendarResponse } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import useTimer from '@/hooks/useTimer';
import React, { useDebugValue } from 'react';
import { styled } from 'styled-components';
import dayjs from 'dayjs';
import Icon from '../Icon';
import { IItem } from '@/theme';

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

const FieldBossInfo = styled.div(({ theme }) => ({
	padding: theme.sizes.gap.s,
	'&>p:nth-child(1)': {
		fontSize: theme.sizes.font.m,
		fontWeight: theme.sizes.font.weight.l,
	},
	'&>p:nth-child(2)': {
		fontSize: theme.sizes.font.s,
		fontWeight: theme.sizes.font.weight.l,
		color: theme.colors.font.dark,
	},
}));

const Container = styled.div`
	display: flex;
	font-size: ${({ theme }) => theme.sizes.font.l};
	background-color: ${({ theme }) => theme.colors.background.dark};
`;

const Rewards = styled.div(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	fontSize: theme.sizes.font.s,
	fontWeight: theme.sizes.font.weight.l,
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

const NoEvent = styled.div``;

type Props = {
	contents: CalendarResponse[];
};

const FieldBoss = (props: Props) => {
	const fieldBoss = useGameContents(props.contents, '필드보스');
	// const { name, icon, minLevel, rewards, location, upComingEvent } =
	// 	fieldBoss[0];
	// const eventDate = dayjs(upComingEvent?.eventTime);
	// const remainingTime = useTimer(upComingEvent?.eventTime);

	return (
		<Wrapper>
			{/* <Title>
				<span>필드 보스</span>
				<div>
					<span>{eventDate.format('HH:mm:ss')}</span>
					<span>{remainingTime || '00:00:00'}</span>
				</div>
			</Title>
			{fieldBoss.length == 0 ? (
				<NoEvent>현재 진행중인 필드보스 이벤트가 없습니다.</NoEvent>
			) : (
				<Container>
					<FieldBossInfo>
						<p>{name + ':' + location}</p>
						<p>{minLevel}</p>
						<Icon src={icon} size={20} />
					</FieldBossInfo>
					<Rewards>
						{rewards.map((n, i) => (
							<Reward key={n.Name + i} $grade={n.Grade}>
								<Icon src={n.Icon} size={2} />
								<span>{n.Name}</span>
							</Reward>
						))}
					</Rewards>
				</Container>
			)} */}
		</Wrapper>
	);
};

export default FieldBoss;
