import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import apis, { EventResponse, NewsType } from '@/apis/api';
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
	display: flex;
	justify-content: space-between;
	padding: 0rem 1rem;
	font-size: ${({ theme }) => theme.fontSize.lg};
	& > text:nth-child(2) {
		font-size: ${({ theme }) => theme.fontSize.md};
	}
`;

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
			console.log(groupedData[currentPage]);
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
								<text>{d.Title}</text>
								<text>
									{d.StartDate.split('T')[0]} ~ {d.EndDate.split('T')[0]}
								</text>
							</Title>
							<img src={d.Thumbnail} width='100%' />
						</Item>
					);
				})}
		</Wrapper>
	);
};

export default Events;
