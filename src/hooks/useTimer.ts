import { useEffect, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
dayjs.extend(utc);
dayjs.extend(duration);

const useTimer = (targetDate?: Dayjs) => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const interval = useRef<NodeJS.Timeout | null>(null);
	const [remainingTime, setRemainingTime] = useState('');

	useEffect(() => {
		if (targetDate) {
			interval.current = setInterval(() => {
				const currentTime = new Date().getTime();
				const diff = dayjs
					.duration(dayjs(targetDate).diff(currentTime))
					.format('HH:mm:ss');
				setRemainingTime(diff);
			}, 1000);
		}

		return () => {
			if (interval.current) {
				clearInterval(interval.current);
				interval.current = null;
			}
		};
	}, [seconds]);

	return remainingTime;
};

export default useTimer;
