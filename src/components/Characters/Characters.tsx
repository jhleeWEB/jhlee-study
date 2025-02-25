import React from 'react';
import { styled } from 'styled-components';
import CharacterDetails from './CharacterDetails';
import CharacterProfiles from './CharacterProfiles';

const Wrapper = styled.section(({ theme }) => ({}));

const Characters = () => {
	return (
		<Wrapper>
			<CharacterProfiles />
			<CharacterDetails />
		</Wrapper>
	);
};

export default Characters;
