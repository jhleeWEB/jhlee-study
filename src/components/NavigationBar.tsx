import React from 'react';
import { styled } from 'styled-components';
import { useLocation, NavLink } from 'react-router';
import { PATHNAME } from '@/global/constants';

const Wrapper = styled.section`
	display: flex;
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.background.default};
	justify-content: space-between;
`;

const Container = styled.div``;

type NavLinkProps = {
	$isSelected?: boolean;
};

const NavButton = styled(NavLink)<NavLinkProps>`
	text-decoration: none;
	border: 0;
	background: transparent;
	color: white;
	font-size: ${(props) => props.theme.sizes.font.l};
	font-weight: bold;
	padding: 1rem;
	border-bottom: ${(props: NavLinkProps) =>
		props.$isSelected ? 'thick solid white' : 'thick solid transparent'};

	&:hover {
		background-color: gray;
		color: white;
	}
`;

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
