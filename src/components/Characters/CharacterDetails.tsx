import React from 'react';
import { styled } from 'styled-components';
import Equipments from './Equipments';

const Wrapper = styled.div(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gap: theme.sizes.gap.m,
}));

const Sample = styled.div(() => ({
	backgroundColor: 'coral',
}));

const EquipmentPanel = styled.div(({ theme }) => ({
	gridColumnStart: 1,
	gridColumnEnd: 3,
	backgroundColor: 'lightblue',
}));

const CharacterDetails = () => {
	return (
		<Wrapper>
			<EquipmentPanel>
				<Equipments />
			</EquipmentPanel>
			<Sample>d</Sample>
			<Sample>d</Sample>
			<Sample>d</Sample>
			<Sample>d</Sample>
			<Sample>d</Sample>
		</Wrapper>
	);
};

export default CharacterDetails;
