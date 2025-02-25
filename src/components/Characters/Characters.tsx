import React from 'react';
import { styled } from 'styled-components';
import CharacterProfiles from './CharacterProfiles';

const Wrapper = styled.section(({ theme }) => ({}));

const Characters = () => {
	return (
		<div>
			<CharacterProfiles />
		</div>
	);
};

export default Characters;
