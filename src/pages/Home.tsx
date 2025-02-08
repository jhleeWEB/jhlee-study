import Introduction from '@/components/introduction/Introduction';
import WhoAmI from '@/components/introduction/WhoAmI';
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
			<Introduction />
			<WhoAmI />
		</Wrapper>
	);
};

export default Home;
