import React, { useCallback, useDebugValue, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import apis, { NewsType, NoticeResponse } from '@/apis/api';
import { styled } from 'styled-components';
import { NavLink } from 'react-router';
import cluster from '@/utils/cluster';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 322.5px;
	min-height: 322.5px;
	overflow: auto;
`;

const Item = styled(NavLink)`
	color: white;
	cursor: pointer;
	text-decoration: none;
	background-color: ${({ theme }) => theme.bgColor.primary};
	margin-top: 0.1rem;
	&:hover {
		background-color: gray;
	}
`;

const Title = styled.p`
	font-size: ${({ theme }) => theme.fontSize.lg};
`;
const SubTitle = styled.p`
	font-size: ${({ theme }) => theme.fontSize.sm};
`;

type Props = {
	type: NewsType;
};

const News = ({ type }: Props) => {
	const { data } = useQuery({
		queryKey: ['news', type],
		queryFn: ({ queryKey }) => apis.news.getNews(queryKey[1]),
	});
	const [currentPage, setCurrentPage] = useState(0);
	const [notices, setNotices] = useState<NoticeResponse[]>([]);

	useEffect(() => {
		if (data?.data) {
			const groupedData = cluster<NoticeResponse>(data.data, 5);
			console.log(groupedData[currentPage]);
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
							<Title>{d?.Title}</Title>
							<SubTitle>{`${d?.Type}|${d?.Date}`}</SubTitle>
						</Item>
					);
				})}
			<button onClick={handleOnClick}>더보기</button>
		</Wrapper>
	);
};

export default News;
