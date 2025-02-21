import Icon from '@/components/Icon';
import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div``;

type Props = {
	name: string;
	icon: string;
};
const ContentInfo = ({ name, icon }: Props) => {
	return (
		<Wrapper>
			<div>{name.split('(')[0]}</div>
			<Icon src={icon} size={12} />
		</Wrapper>
	);
};

export default ContentInfo;
