import useCharacterDetail from '@/hooks/useCharacterDetail';
import React from 'react';
import { useLocation, useParams } from 'react-router';
import { styled } from 'styled-components';

const Wrapper = styled.section(({ theme }) => ({
	display: 'grid',
}));

const CharacterDetail = () => {
	const { playerId } = useParams();
	const { data, isLoading } = useCharacterDetail(playerId);
	console.log(data);
	return <Wrapper>{playerId}</Wrapper>;
};

export default CharacterDetail;
