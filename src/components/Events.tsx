import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import apis, { EventResponse, NewsType } from '@/apis/api';
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
	'&:hover': {
		backgroundColor: theme.colors.background.dark,
	},
}));

const Title = styled.p(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	padding: `0rem ${theme.sizes.gap.s}`,
	'&>span:nth-child(1)': {
		fontWeight: theme.sizes.font.weight.l,
		fontSize: theme.sizes.font.m,
	},
	'&>span:nth-child(2)': {
		fontSize: theme.sizes.font.s,
		color: theme.colors.font.dark,
	},
}));

const Events = () => {
	const { data } = useQuery<any, any, EventResponse[]>({
		queryKey: ['news', 'events'],
		queryFn: ({ queryKey }) => apis.news.getNews(queryKey[1]),
	});

	const [currentPage, setCurrentPage] = useState(0);
	const [events, setEvents] = useState<EventResponse[]>([]);

	useEffect(() => {
		if (data) {
			const groupedData = cluster<EventResponse>(data, 3);
			setEvents((prevState) => [...prevState, ...groupedData[currentPage]]);
		}
	}, [data, currentPage]);

	return (
		<Wrapper>
			{events &&
				events.map((d) => {
					return (
						<Item to={d.Link} key={d.Link}>
							<Title>
								<span>{d.Title}</span>
								<span>
									{d.StartDate.split('T')[0]} ~ {d.EndDate.split('T')[0]}
								</span>
							</Title>
							<img src={d.Thumbnail} width='100%' />
						</Item>
					);
				})}
		</Wrapper>
	);
};

export default Events;
