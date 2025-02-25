import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import apis, { CalendarResponse } from '@/apis/api';
import AdventureIsland from './AdventureIsland/AdventureIsland';
import FieldBoss from './FieldBoss/FieldBoss';
import ChaosGate from './ChaosGate/ChaosGate';

const Calendar = () => {
	const { data } = useQuery<any, any, CalendarResponse[]>({
		queryKey: ['gamecontent', 'calendar'],
		queryFn: () => apis.contents.getCalender(),
	});
	const [fieldBoss, setFieldBoss] = useState<CalendarResponse[]>([]);
	const [chaosGate, setChaosGate] = useState<CalendarResponse[]>([]);
	const [adventureIsland, setAdventureIsland] = useState<CalendarResponse[]>(
		[]
	);
	useEffect(() => {
		if (data) {
			(function batch() {
				setFieldBoss(data.filter((n) => n.CategoryName == '필드보스'));
				setChaosGate(data.filter((n) => n.CategoryName == '카오스게이트'));
				setAdventureIsland(
					data.filter((n) => n.CategoryName.includes('모험 섬'))
				);
			})();
		}
	}, [data]);

	return (
		<>
			{adventureIsland && adventureIsland.length > 0 && (
				<AdventureIsland contents={adventureIsland} />
			)}
			{/* {fieldBoss && fieldBoss.length > 0 && <FieldBoss contents={fieldBoss} />}
			{chaosGate && chaosGate.length > 0 && <ChaosGate contents={chaosGate} />} */}
		</>
	);
};

export default Calendar;
