import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
	position: absolute;
	font-size: 24px;
`;

const Menu = () => {
	return (
		<Wrapper>
			<div>Introduction</div>
			<div>React</div>
			<div>Javascript</div>
			<div>Algorithm</div>
			<div>ThreeJS</div>
		</Wrapper>
	);
};

export default Menu;
