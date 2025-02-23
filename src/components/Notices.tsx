import React, { useCallback, useDebugValue, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import apis, { NewsType, NoticeResponse } from '@/apis/api';
import { styled } from 'styled-components';
import { NavLink } from 'react-router';
import cluster from '@/utils/cluster';

const Wrapper = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	maxHeight: '366.5px',
	minHeight: '366.5px',
	overflow: 'auto',
	borderBottomRightRadius: theme.sizes.gap.s,
	borderBottomLeftRadius: theme.sizes.gap.s,
}));

const Item = styled(NavLink)(({ theme }) => ({
	cursor: 'pointer',
	textDecoration: 'none',
	color: theme.colors.font.default,
	backgroundColor: theme.colors.background.default,
	marginTop: theme.sizes.gap.xs,
	paddingLeft: theme.sizes.gap.s,
	'&:hover': {
		backgroundColor: theme.colors.background.dark,
	},
	'&>p:nth-child(1)': {
		fontWeight: theme.sizes.font.weight.l,
		fontSize: theme.sizes.font.m,
		marginBottom: 0,
	},
	'&>p:nth-child(2)': {
		fontSize: theme.sizes.font.s,
		color: theme.colors.font.dark,
		marginTop: theme.sizes.gap.xs,
	},
}));

const ShowMoreButton = styled.button(({ theme }) => ({
	fontSize: theme.sizes.font.m,
	color: theme.colors.font.default,
	backgroundColor: theme.colors.background.light,
	border: 'none',
	padding: theme.sizes.gap.s,
	fontWeight: theme.sizes.font.weight.l,
	'&:hover': {
		backgroundColor: theme.colors.background.dark,
	},
}));

const Notices = () => {
	const { data } = useQuery<any, any, NoticeResponse[]>({
		queryKey: ['news', 'notices'],
		queryFn: ({ queryKey }) => apis.news.getNews(queryKey[1]),
	});
	const [currentPage, setCurrentPage] = useState(0);
	const [notices, setNotices] = useState<NoticeResponse[]>([]);

	useEffect(() => {
		if (data) {
			const groupedData = cluster<NoticeResponse>(data, 5);
			setNotices((prevState) => [...prevState, ...groupedData[currentPage]]);
		}
	}, [data, currentPage]);

	useDebugValue(currentPage, (currentPage) => currentPage);

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setCurrentPage(currentPage + 1);
	};

	return (
		<Wrapper>
			{notices &&
				notices.map((d: NoticeResponse, i: number) => {
					return (
						<Item to={d?.Link} key={d?.Link}>
							<p>{d?.Title}</p>
							<p>{`${d?.Type}|${d?.Date}`}</p>
						</Item>
					);
				})}
			<ShowMoreButton onClick={handleOnClick}>더보기</ShowMoreButton>
		</Wrapper>
	);
};

export default Notices;
