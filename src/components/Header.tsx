import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.default}
  background-color:  ${({ theme }) => theme.bgColor.primary}
	width: 100%;
`;

const HomeButton = styled.button`
	border: 0;
	background-color: transparent;
	cursor: pointer;
	font-size: 3rem;
	padding: 2rem;
	color: white;
`;

const Header = () => {
	return (
		<Wrapper>
			<HomeButton>hello</HomeButton>
		</Wrapper>
	);
};

export default Header;
