import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`
	scroll-snap-type: y mandatory;
	height: 100vh;
	overflow-y: scroll;
`;

const Home = () => {
	return (
		<Wrapper>
			<h1>HOME</h1>
		</Wrapper>
	);
};

export default Home;
