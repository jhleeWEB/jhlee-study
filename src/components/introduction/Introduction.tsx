import React, { useState } from 'react';
import ScrollSnap from '@components/ScrollSnap';
import { styled } from 'styled-components';

const TextContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	flex-direction: column;
	right: 0;
	bottom: 0;
`;

const Nickname = styled.text`
	animation: showup 7s infinite;
	@keyframes showup {
		0% {
			opacity: 0;
		}
		20% {
			opacity: 1;
		}
		80% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	text-align: right;
	font-size: 56px;
`;

const Position = styled.text`
	animation: showup 10s infinite;
	@keyframes showup {
		0% {
			opacity: 0;
		}
		20% {
			opacity: 1;
		}
		80% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	font-size: 80px;
`;

const Introduction = () => {
	return (
		<ScrollSnap>
			<TextContainer>
				<Nickname>JHLee</Nickname>
				<Position>Frontend Engineer</Position>
			</TextContainer>
		</ScrollSnap>
	);
};

export default Introduction;
