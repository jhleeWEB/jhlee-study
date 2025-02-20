import { CalendarResponse, CategoryName, Item } from '@/apis/api';
import { useState } from 'react';

export type IslandContent = {
	islandName: string;
	icon: string;
	limitedRewards: Item[];
	rewards: Item[];
	nextTime: Date;
};

const useGameContents = (contents: CalendarResponse[]) => {
	const [limitedIslands] = useState<IslandContent[]>(() => {
		const today = new Date();
		const islands = contents.filter(
			(n) => today.getDay() == new Date(n.StartTimes[0]).getDay()
		);
		const result = islands.map((island) => {
			const normalRewards = island.RewardItems[0].Items.filter(
				(n) => !n.StartTimes
			);
			const limitedRewards = island.RewardItems[0].Items.filter(
				(n) => n.StartTimes
			);

			const currentTime = today.getTime();
			let remain = Infinity;
			let upComingTime = '';
			for (let time of island.StartTimes) {
				const nextTime = new Date(time).getTime();
				if (currentTime < nextTime && nextTime - currentTime < remain) {
					remain = nextTime - currentTime;
					upComingTime = time;
				}
			}

			return {
				islandName: island.ContentsName,
				limitedRewards: limitedRewards,
				rewards: normalRewards,
				icon: island.ContentsIcon,
				nextTime: new Date(upComingTime),
			};
		});
		return result;
	});

	return limitedIslands;
};

export default useGameContents;
