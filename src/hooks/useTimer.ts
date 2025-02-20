import { useEffect, useState } from 'react';

const useTimer = (targetDate: string) => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const currentTime = new Date().getTime();
			const targetTime = new Date(targetDate).getTime();
			let rt = targetTime - currentTime;
			if (rt <= 0) {
				rt = 0;
				clearInterval(interval);
			}
			const remainingTime = new Date(rt);
			setHours(remainingTime.getHours());
			setMinutes(remainingTime.getMinutes());
			setSeconds(remainingTime.getSeconds());
			return () => clearInterval(interval);
		}, 1000);
	}, [targetDate]);

	return [hours, minutes, seconds];
};

export default useTimer;
