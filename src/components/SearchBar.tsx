import React, {
	ReactEventHandler,
	useDebugValue,
	useRef,
	useState,
} from 'react';
import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getCharacterData } from '@/apis/api';
import useDebounce from '@/hooks/useDebounce';
import CharacterList from './CharacterList/CharacterList';
import { CharacterInfo } from '@/@types/global/type';

const Wrapper = styled.div``;

const ResultContainer = styled.div``;

const SearchInput = styled.input`
	padding: 0.6rem 1.2rem 0.6rem 1.2rem;
	font-size: 2rem;
	border-radius: 1rem;
`;

type Props = {
	placeholder?: string;
	width?: number;
};

const SearchBar = ({ placeholder, width }: Props) => {
	const [searchQuery, setSearchQuery] = useState('');
	const debounceQuery = useDebounce(searchQuery);
	const { data, isLoading, isError } = useQuery({
		queryKey: ['characters', debounceQuery],
		queryFn: ({ queryKey }) => getCharacterData(queryKey[1]),
		enabled: debounceQuery != '' && !!debounceQuery,
	});

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchQuery(e.currentTarget.value);
	}

	function handleOnBlur() {
		setSearchQuery('');
	}

	return (
		<Wrapper>
			<SearchInput
				value={searchQuery}
				name='searchbar'
				placeholder={placeholder ?? '캐릭터 검색'}
				width={width ?? '100%'}
				onChange={handleOnChange}
				onBlur={handleOnBlur}
			/>
			<ResultContainer>
				<CharacterList characters={data?.data} />
			</ResultContainer>
		</Wrapper>
	);
};

export default SearchBar;
