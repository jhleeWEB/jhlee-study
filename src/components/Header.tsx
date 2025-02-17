import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	width: 100vw;
	max-height: 64px;
	background-color: lightblue;
`;

type Props = {
	children: ReactNode;
};

const Header = ({ children }: Props) => {
	return <Wrapper>{children}</Wrapper>;
};

export default Header;
