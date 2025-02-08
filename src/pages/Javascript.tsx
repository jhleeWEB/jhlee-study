import React from 'react';

import { styled } from 'styled-components';

const Wrapper = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: coral;
`;

const Javascript = () => {
	return (
		<Wrapper>
			<h1>Javascript</h1>
		</Wrapper>
	);
};

export default Javascript;
