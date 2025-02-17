import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`
	position: absolute;
	bottom: 0;
	width: 100vw;
	display: flex;
	bottom: 0;
	background-color: lightyellow;
`;

const Footer = () => {
	return (
		<Wrapper>
			<h1>footer</h1>
		</Wrapper>
	);
};

export default Footer;
