import { AccssoryType, CharacterEquipment, EquipmentType } from '@/apis/api';
import useCharacterEquipments from '@/hooks/useCharacterEquipments';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { styled } from 'styled-components';
import Equipment from './Equipment';

const Wrapper = styled.div(({}) => ({}));

const Header = styled.div(({ theme }) => ({
	fontSize: theme.sizes.font.m,
	fontWeight: theme.sizes.font.weight.l,
	padding: theme.sizes.gap.s,
	backgroundColor: theme.colors.background.default,
}));

const EquipmentContainer = styled.div(({ theme }) => ({
	backgroundColor: theme.colors.background.dark,
}));

const MainEquipments = styled.span(({ theme }) => ({}));

const Accssories = styled.span(({ theme }) => ({}));

const Equipments = () => {
	const { playerId } = useParams();
	const { data, isLoading } = useCharacterEquipments(playerId);
	const [equipments, setEquipments] = useState<CharacterEquipment[]>([]);
	const [accssories, setAccssories] = useState<CharacterEquipment[]>([]);

	useEffect(() => {
		if (data) {
			const e: CharacterEquipment[] = [],
				a: CharacterEquipment[] = [];
			data.forEach((n) => {
				if (EquipmentType.includes(n.type)) {
					e.push(n);
				}
				if (AccssoryType.includes(n.type)) {
					a.push(n);
				}
			});

			setAccssories(a);
			setEquipments(e);
		}
	}, [data]);

	return (
		<Wrapper>
			{isLoading && <div>loading...</div>}
			{data && (
				<>
					<Header>장비</Header>
					<EquipmentContainer>
						<MainEquipments>
							{equipments.map((equipment) => (
								<Equipment equipment={equipment} />
							))}
						</MainEquipments>
						<Accssories>
							{accssories.map((accssory) => (
								<Equipment equipment={accssory} />
							))}
						</Accssories>
					</EquipmentContainer>
				</>
			)}
		</Wrapper>
	);
};

export default Equipments;
