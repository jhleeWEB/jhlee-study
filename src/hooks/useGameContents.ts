import { CalendarResponse, CategoryName, Item } from '@/apis/api';
import { useState } from 'react';

export type Content = {
	name: string;
	icon: string;
	limitedRewards: Item[] | [];
	rewards: Item[];
	nextTime: Date;
	minLevel: number;
};

const useGameContents = (
	contents: CalendarResponse[],
	category: CategoryName
) => {
	const [content] = useState<Content[]>(() => {
		const today = new Date();
		const events = contents.filter(
			(n) => today.getDay() == new Date(n.StartTimes[0]).getDay()
		);

		switch (category) {
			case '모험 섬':
				const result = events.map((event) => {
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
					};
				});
				return result;
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
					},
				];
			default:
				return [];
		}
	});

	return content;
};

export default useGameContents;
