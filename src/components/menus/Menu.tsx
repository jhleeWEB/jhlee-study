import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { PATHNAME } from '@/global/constants';
import Button from '../buttons/Button';

const Wrapper = styled.section`
	width: 20rem;
	left: 5rem;
	top: 5rem;
	position: absolute;
	display: flex;
	flex-direction: column;
`;

const Menu = () => {
	const navigate = useNavigate();

	return (
		<Wrapper>
			<Button onClick={() => navigate(PATHNAME.HOME)}>Introduction</Button>
			<Button onClick={() => navigate(PATHNAME.REACTJS)}>React</Button>
			<Button onClick={() => navigate(PATHNAME.JAVASCRIPT)}>Javascript</Button>
			<Button onClick={() => navigate(PATHNAME.ALGORITHM)}>Algorithm</Button>
			<Button onClick={() => navigate(PATHNAME.THREEJS)}>ThreeJS</Button>
		</Wrapper>
	);
};

export default Menu;
