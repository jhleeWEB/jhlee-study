import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.input`
	padding: 0.6rem 1.2rem 0.6rem 1.2rem;
	font-size: 2rem;
	border-radius: 1rem;
`;

type Props = {
	placeholder?: string;
	width?: number;
};

const SearchBar = ({ placeholder, width }: Props) => {
	return <Wrapper placeholder={placeholder ?? '캐릭터 검색'} width={width ?? '100%'} />;
};

export default SearchBar;
