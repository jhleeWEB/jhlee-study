import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section``;

type Props = {
	children: ReactNode;
};

const SubMenu = ({ children }: Props) => {
	return <Wrapper>{children}</Wrapper>;
};

export default SubMenu;
