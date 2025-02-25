import { CharacterEquipment } from '@/apis/api';
import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div(({}) => ({}));

const EquipmentIcon = styled.div(({ theme }) => ({}));
const EquipmentStats = styled.div(({ theme }) => ({}));

type Props = {
	equipment: CharacterEquipment;
};
const Equipment = ({ equipment }: Props) => {
	console.log(JSON.parse(equipment.tooltip).value);
	return (
		<Wrapper>
			<script>{equipment.tooltip}</script>
		</Wrapper>
	);
};

export default Equipment;
