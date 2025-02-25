import { CalendarResponse, CategoryName, Item } from '@/apis/api';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export type ReturnType = {
	upComingEventInfo: {
		eventTime: Dayjs | undefined;
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
			const startTimes = StartTimes.filter((time) => {
				if (dayjs(time).isAfter(dayjs())) {
					return time;
				}
			});

			if (startTimes.length > 0) {
				content.StartTimes = startTimes;
				events.push(content);
			}
		}
		return events;
	}

	function findNextEvent(events: CalendarResponse[]) {
		let nextEventTime = '';
		for (let event of events) {
			const { StartTimes } = event;
			const startTimes = StartTimes.filter((time) => {
				if (dayjs(time).isAfter(dayjs())) {
					return time;
				}
			});
			event.StartTimes = startTimes;
		}
		return dayjs(nextEventTime);
	}

	const [content] = useState<ReturnType>(() => {
		const today = new Date();

		switch (category) {
			case '모험 섬':
				const islandEvents = findActiveEvents();

				if (islandEvents.length > 0) {
					return {
						upComingEventInfo: {
							eventTime: dayjs(islandEvents[0].StartTimes[0]),
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
					return {
						upComingEventInfo: {
							eventTime: dayjs(fieldBossEvents[0].StartTimes[0]),
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
					return {
						upComingEventInfo: {
							eventTime: dayjs(chaosEvents[0].StartTimes[0]),
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
