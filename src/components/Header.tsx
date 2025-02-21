import React, { ReactNode } from 'react';
import { styled, css } from 'styled-components';

const Wrapper = styled.section(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	fontSize: theme.sizes.font.m,
	backgroundColor: theme.colors.background.default,
	marginBottom: theme.sizes.gap.s,
}));

const HomeButton = styled.button(({ theme }) => ({
	border: 'none',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	fontSize: theme.sizes.font.l,
	fontWeight: theme.sizes.font.weight.l,
	padding: theme.sizes.gap.m,
	color: theme.colors.font.default,
}));

const Header = () => {
	return (
		<Wrapper>
			<HomeButton>LOA.IO</HomeButton>
		</Wrapper>
	);
};

export default Header;
