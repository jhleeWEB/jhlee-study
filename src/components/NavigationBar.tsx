import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	width: 100vw;
	max-height: 40px;
	background-color: lightgreen;
	justify-content: space-between;
`;

const Container = styled.div``;

const NavigationBar = () => {
	return (
		<Wrapper>
			<Container>
				<button>홈</button>
				<button>랭킹</button>
				<button>길드</button>
				<button>통계</button>
				<button>수집품</button>
			</Container>
			<Container>
				<button>문의하기</button>
			</Container>
		</Wrapper>
	);
};

export default NavigationBar;
