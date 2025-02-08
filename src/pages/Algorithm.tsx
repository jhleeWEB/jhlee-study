import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightblue;
`;

const Algorithm = () => {
	return (
		<Wrapper>
			<h1>Algorithm</h1>
		</Wrapper>
	);
};

export default Algorithm;
