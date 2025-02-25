import React from 'react';
import dayjs from 'dayjs';
import useTimer from '@/hooks/useTimer';
import { styled } from 'styled-components';

const Wrapper = styled.div(({ theme }) => ({
	fontSize: theme.sizes.font.m,
	fontWeight: theme.sizes.font.weight.l,
	'&>span:nth-child(1)': {
		color: theme.colors.font.dark,
		marginRight: theme.sizes.gap.s,
	},
}));
type Props = {
	eventTime?: Date;
};
const EventTimer = ({ eventTime }: Props) => {
	const remainingTime = useTimer(eventTime);
	return (
		<Wrapper>
			<span>{`${dayjs(eventTime).format('HH:mm:ss') || '00:00:00'}`}</span>
			<span>{`${remainingTime || '00:00:00'}`}</span>
		</Wrapper>
	);
};

export default EventTimer;
