import { CalendarResponse, CategoryName, Item } from '@/apis/api';
import { useState } from 'react';

export type Content = {
	name: string;
	icon: string;
	limitedRewards: Item[] | [];
	rewards: Item[];
	nextTime: Date;
	minLevel: number;
	location: string;
};

const useGameContents = (
	contents: CalendarResponse[],
	category: CategoryName
) => {
	const [content] = useState<Content[]>(() => {
		const today = new Date();

		switch (category) {
			case '모험 섬':
				const events = contents.filter(
					(n) => today.getDay() == new Date(n.StartTimes[0]).getDay()
				);
				const islandContent = events.map((event) => {
					const normalRewards = event.RewardItems[0].Items.filter(
						(n) => !n.StartTimes
					);
					const limitedRewards = event.RewardItems[0].Items.filter(
						(n) => n.StartTimes
					);

					const currentTime = today.getTime();
					let remain = Infinity;
					let upComingTime = '';
					for (let time of event.StartTimes) {
						const nextTime = new Date(time).getTime();
						if (currentTime < nextTime && nextTime - currentTime < remain) {
							remain = nextTime - currentTime;
							upComingTime = time;
						}
					}
					return {
						name: event.ContentsName,
						limitedRewards: limitedRewards,
						rewards: normalRewards,
						icon: event.ContentsIcon,
						nextTime: new Date(upComingTime),
						minLevel: event.MinItemLevel,
						location: event.Location,
					};
				});
				return islandContent;
			case '필드보스':
				const currentTime = today.getTime();
				let remain = Infinity;
				let upComingTime = '';
				for (let time of contents[0].StartTimes) {
					const nextTime = new Date(time).getTime();
					if (currentTime < nextTime && nextTime - currentTime < remain) {
						remain = nextTime - currentTime;
						upComingTime = time;
					}
				}
				return [
					{
						name: contents[0].ContentsName,
						limitedRewards: [],
						rewards: contents[0].RewardItems[0].Items,
						icon: contents[0].ContentsIcon,
						nextTime: new Date(upComingTime),
						minLevel: contents[0].MinItemLevel,
						location: contents[0].Location,
					},
				];

			case '카오스게이트':
				const chaosContent = contents.map((event) => {
					const currentTime = today.getTime();
					let remain = Infinity;
					let upComingTime = '';
					for (let time of event.StartTimes) {
						const nextTime = new Date(time).getTime();
						if (currentTime < nextTime && nextTime - currentTime < remain) {
							remain = nextTime - currentTime;
							upComingTime = time;
						}
					}
					return {
						name: event.ContentsName,
						limitedRewards: [],
						rewards: event.RewardItems[0].Items,
						icon: event.ContentsIcon,
						nextTime: new Date(upComingTime),
						minLevel: event.MinItemLevel,
						location: event.Location,
					};
				});
				return chaosContent;
			default:
				return [];
		}
	});

	return content;
};

export default useGameContents;
