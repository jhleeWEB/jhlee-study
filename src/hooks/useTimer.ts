import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
dayjs.extend(utc);
dayjs.extend(duration);

const useTimer = (targetDate: Date) => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [remainingTime, setRemainingTime] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			const currentTime = new Date().getTime();
			const nextTime = targetDate.getTime();
			const diff = dayjs
				.duration(dayjs(nextTime).diff(currentTime))
				.format('HH:mm:ss');
			setRemainingTime(diff);
		}, 1000);

		return () => clearInterval(interval);
	}, [seconds]);

	return remainingTime;
};

export default useTimer;
