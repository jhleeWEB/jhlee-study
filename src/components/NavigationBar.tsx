import React from 'react';
import { styled } from 'styled-components';
import { useLocation, NavLink } from 'react-router';
import { PATHNAME } from '@/global/constants';

const Wrapper = styled.section(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	padding: theme.sizes.gap.s,
	backgroundColor: theme.colors.background.default,
}));
const Container = styled.div``;

type NavLinkProps = {
	$isSelected?: boolean;
};

const NavButton = styled(NavLink)<NavLinkProps>(({ theme, $isSelected }) => {
	const { sizes, colors } = theme;
	return {
		textDecoration: 'none',
		border: 'none',
		background: 'transparent',
		color: colors.font.default,
		fontSize: sizes.font.m,
		fontWeight: sizes.font.weight.l,
		padding: sizes.gap.s,
		borderBottom: $isSelected
			? `thick solid ${colors.highLight.default}`
			: 'thick solid transparent',
		'&:hover': {
			backgroundColor: colors.background.light,
			color: colors.font.default,
		},
	};
});

const NavigationBar = () => {
	const location = useLocation();
	const pathname = location.pathname;
	return (
		<Wrapper>
			<Container>
				<NavButton to={PATHNAME.HOME} $isSelected={pathname == PATHNAME.HOME}>
					홈
				</NavButton>
				<NavButton
					to={PATHNAME.RANKINGS}
					$isSelected={pathname == PATHNAME.RANKINGS}
				>
					랭킹
				</NavButton>
				<NavButton
					to={PATHNAME.GUILDS}
					$isSelected={pathname == PATHNAME.GUILDS}
				>
					길드
				</NavButton>
				<NavButton
					to={PATHNAME.STATISTICS}
					$isSelected={pathname == PATHNAME.STATISTICS}
				>
					통계
				</NavButton>
				<NavButton
					to={PATHNAME.COLLECTIBLES}
					$isSelected={pathname == PATHNAME.COLLECTIBLES}
				>
					수집품
				</NavButton>
			</Container>
			<Container>
				<button>문의하기</button>
			</Container>
		</Wrapper>
	);
};

export default NavigationBar;
