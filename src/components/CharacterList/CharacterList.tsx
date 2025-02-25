import { CharacterInfo } from '@/types/type';
import React from 'react';
import { Link } from 'react-router';
import { styled } from 'styled-components';

const Wrapper = styled.div`
	background-color: grey;
	position: absolute;
`;

const Item = styled(Link)`
	display: flex;
	width: 100%;
	justify-content: space-between;
	cursor: pointer;
	&:hover {
		background-color: lightblue;
	}
`;

type Props = {
	characters: Array<CharacterInfo> | undefined;
};
const CharacterList = ({ characters }: Props) => {
	return (
		<Wrapper>
			{characters &&
				characters.map((character) => {
					return (
						<Item
							key={`${character.CharacterName}`}
							to={`/character/${character.CharacterName}`}
						>
							<div>{character.CharacterName}</div>
							<div>{character.ServerName}</div>
							<div>{character.CharacterClassName}</div>
							<div>{character.CharacterLevel}</div>
							<div>{character.ItemAvgLevel}</div>
						</Item>
					);
				})}
		</Wrapper>
	);
};

export default CharacterList;
