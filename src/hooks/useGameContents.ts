import { CalendarResponse, CategoryName, Item } from '@/apis/api';
import { useState } from 'react';

export type IslandContent = {
	islandName: string;
	icon: string;
	limitedRewards: Item[];
	rewards: Item[];
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

			return {
				islandName: island.ContentsName,
				limitedRewards: limitedRewards,
				rewards: normalRewards,
				icon: island.ContentsIcon,
			};
		});
		return result;
	});

	return limitedIslands;
};

export default useGameContents;
