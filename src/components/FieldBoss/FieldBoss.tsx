import { CalendarResponse } from '@/apis/api';
import useGameContents from '@/hooks/useGameContents';
import useTimer from '@/hooks/useTimer';
import React, { useDebugValue } from 'react';
import { styled } from 'styled-components';
import dayjs from 'dayjs';
import Icon from '../Icon';

const Wrapper = styled.div`
	width: 100%;
	padding: 1rem;
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	font-size: ${({ theme }) => theme.fontSize.lg};
	font-weight: bold;
	background-color: ${({ theme }) => theme.bgColor.primary};
	& > div > span:nth-child(1) {
		color: grey;
		margin-right: 1rem;
	}
`;

const Container = styled.div`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.lg};
	background-color: ${({ theme }) => theme.bgColor.primary};
`;

const Rewards = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	font-size: ${({ theme }) => theme.fontSize.md};
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

const NoEvent = styled.div``;

type Props = {
	contents: CalendarResponse[];
};

const FieldBoss = (props: Props) => {
	const fieldBoss = useGameContents(props.contents, '필드보스');
	const { name, icon, minLevel, rewards, nextTime } = fieldBoss[0];
	const eventDate = dayjs(nextTime);

	const remainingTime = useTimer(nextTime);

	return (
		<Wrapper>
			<Title>
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
					<div>
						<p>{name}</p>
						<p>{minLevel}</p>
						<img src={icon} />
					</div>
					<Rewards>
						{rewards.map((n, i) => (
							<Reward key={n.Name + i} $grade={n.Grade}>
								<Icon src={n.Icon} />
								<text>{n.Name}</text>
							</Reward>
						))}
					</Rewards>
				</Container>
			)}
		</Wrapper>
	);
};

export default FieldBoss;
