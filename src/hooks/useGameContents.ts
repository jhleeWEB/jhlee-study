import { CalendarResponse, CategoryName, Item } from '@/apis/api';
import { useState } from 'react';
import dayjs from 'dayjs';

export type ReturnType = {
	upComingEventInfo: {
		eventTime: Date | undefined;
	};
	events: CalendarResponse[] | [];
};

const useGameContents = (
	contents: CalendarResponse[],
	category: CategoryName
) => {
	function findActiveEvents(): CalendarResponse[] {
		let events = [];
		for (let content of contents) {
			const { StartTimes } = content;
			let isUpComing = false;
			for (let time of StartTimes) {
				let eventTime = dayjs(time);
				if (dayjs().isSame(eventTime, 'days')) {
					isUpComing = true;
					break;
				}
			}
			if (isUpComing) {
				events.push(content);
			}
		}
		return events;
	}

	function findNextEvent(events: CalendarResponse[]) {
		let nextEventTime = '';
		for (let event of events) {
			const { StartTimes } = event;
			let temp = Infinity;
			for (let time of StartTimes) {
				let eventTime = dayjs(time);
				if (dayjs().diff(eventTime, 'hours') < temp) {
					temp = dayjs().diff(eventTime, 'hours');
					nextEventTime = time;
				}
			}
		}
		return new Date(nextEventTime);
	}

	const [content] = useState<ReturnType>(() => {
		const today = new Date();

		switch (category) {
			case '모험 섬':
				const islandEvents = findActiveEvents();

				if (islandEvents.length > 0) {
					const nextEventTime = findNextEvent(islandEvents);
					return {
						upComingEventInfo: {
							eventTime: nextEventTime,
						},
						events: islandEvents,
					};
				} else {
					return {
						upComingEventInfo: {
							eventTime: undefined,
						},
						events: [],
					};
				}
			case '필드보스':
				const fieldBossEvents = findActiveEvents();

				if (fieldBossEvents.length > 0) {
					const nextEventTime = findNextEvent(fieldBossEvents);
					return {
						upComingEventInfo: {
							eventTime: nextEventTime,
						},
						events: fieldBossEvents,
					};
				} else {
					return {
						upComingEventInfo: {
							eventTime: undefined,
						},
						events: [],
					};
				}
			case '카오스게이트':
				const chaosEvents = findActiveEvents();

				if (chaosEvents.length > 0) {
					const nextEventTime = findNextEvent(chaosEvents);
					return {
						upComingEventInfo: {
							eventTime: nextEventTime,
						},
						events: chaosEvents,
					};
				} else {
					return {
						upComingEventInfo: {
							eventTime: undefined,
						},
						events: [],
					};
				}
			default:
				return {
					upComingEventInfo: {
						eventTime: undefined,
					},
					events: [],
				};
		}
	});

	return content;
};

export default useGameContents;
