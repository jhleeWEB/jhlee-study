import Icon from '@/components/Icon';
import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div(({ theme }) => ({
	padding: theme.sizes.gap.s,
	'&>p:nth-child(1)': {
		fontSize: theme.sizes.font.m,
		fontWeight: theme.sizes.font.weight.l,
	},
}));

type Props = {
	name: string;
	icon: string;
};
const ContentInfo = ({ name, icon }: Props) => {
	return (
		<Wrapper>
			<p>{name.split('(')[0]}</p>
			<Icon src={icon} size={20} />
		</Wrapper>
	);
};

export default ContentInfo;
