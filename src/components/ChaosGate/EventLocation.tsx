import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div(({ theme }) => ({
	padding: theme.sizes.gap.s,
	'&>p:nth-child(1)': {
		fontSize: theme.sizes.font.m,
		fontWeight: theme.sizes.font.weight.l,
	},
}));
const LocationContainer = styled.div(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	fontSize: theme.sizes.font.s,
}));

const Location = styled.div(({ theme }) => ({
	fontSize: theme.sizes.font.m,
	'&>span:nth-child(2)': {
		fontWeight: theme.sizes.font.weight.l,
	},
}));

type Props = {
	locationInfo: [string, string][];
};

const EventLocation = ({ locationInfo }: Props) => {
	return (
		<Wrapper>
			<p>게이트 장소</p>

			<LocationContainer>
				{locationInfo.map((n) => (
					<Location key={n[0] + n[1]}>
						<span>{n[0]}</span>
						<span>{n[1]}</span>
					</Location>
				))}
			</LocationContainer>
		</Wrapper>
	);
};

export default EventLocation;
