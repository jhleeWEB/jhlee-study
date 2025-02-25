import apis from '@/apis/api';
import { useQuery } from '@tanstack/react-query';

const useCharacterEquipments = (characterName?: string) => {
	const data = useQuery({
		queryKey: ['characters', 'equipments', characterName],
		queryFn: ({ queryKey }) =>
			apis.armories.characters.getEquipment(queryKey[2]),
	});

	return data;
};
export default useCharacterEquipments;
