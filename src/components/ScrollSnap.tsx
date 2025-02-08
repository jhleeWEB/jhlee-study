import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`
	position: relative;
	scroll-snap-align: start;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #e0e0e0;
	color: #ffffff;
	text-shadow: -4px 4px 10px #c3c3c3, 4px -4px 10px #fdfdfd;
`;

type Props = {
	children?: ReactNode;
};

const SnapDiv = ({ children }: Props) => {
	return <Wrapper>{children}</Wrapper>;
};

export default SnapDiv;
