import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.button`
	font: 1.2rem bold black;
	&:hover {
		cursor: pointer;
	}
`;

type Props = {
	onClick: React.MouseEventHandler;
	children: ReactNode;
};

const Button = ({ onClick, children }: Props) => {
	return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default Button;
