import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div``;
const LocationContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`;
const Location = styled.div`
	font-size: ${({ theme }) => theme.fontSize.md};
`;

type Props = {
	locationInfo: [string, string][];
};

const EventLocation = ({ locationInfo }: Props) => {
	return (
		<Wrapper>
			<div>
				<p>게이트 장소</p>
			</div>
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
