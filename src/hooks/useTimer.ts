import { useDebugValue, useEffect, useState } from 'react';

const useTimer = (targetDate: Date) => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const currentTime = new Date().getTime();
			const nextTime = targetDate.getTime();
			const diff = new Date(nextTime - currentTime);

			setHours(diff.getUTCHours());
			setMinutes(diff.getUTCMinutes());
			setSeconds(diff.getUTCSeconds());
		}, 1000);

		return () => clearInterval(interval);
	}, [seconds]);

	return [hours, minutes, seconds];
};

export default useTimer;
