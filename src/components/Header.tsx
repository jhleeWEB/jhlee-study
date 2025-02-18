import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.default}
	width: 100vw;
`;

const HomeButton = styled.button`
	border: 0;
	background-color: transparent;
	cursor: pointer;
	font-size: 3rem;
	padding: 2rem;
`;

const Header = () => {
	return (
		<Wrapper>
			<HomeButton>hello</HomeButton>
		</Wrapper>
	);
};

export default Header;
