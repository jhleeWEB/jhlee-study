import Icon from '@/components/Icon';
import dayjs from 'dayjs';
import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div(({ theme }) => ({
	display: 'flex',
	padding: theme.sizes.gap.s,
	fontSize: theme.sizes.font.s,
	'&>img': {
		marginRight: theme.sizes.gap.s,
	},
}));

type Props = {
	startTimes: string[];
	level: number;
	name: string;
	icon: string;
};
const ContentInfo = ({ startTimes, level, name, icon }: Props) => {
	function getStartTime() {
		let next = undefined;
		for (let time of startTimes) {
			if (dayjs(time).isAfter(dayjs())) {
				next = dayjs(time).format('M월 DD일 HH:mm 시작');
			}
		}
		return next;
	}
	return (
		<Wrapper>
			<Icon src={icon} size={3} />
			<span>
				<div>{`[${level}] ${name}`}</div>
				<div>{getStartTime() || '--:--:--'}</div>
			</span>
		</Wrapper>
	);
};

export default ContentInfo;
