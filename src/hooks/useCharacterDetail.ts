import apis from '@/apis/api';
import { useQuery } from '@tanstack/react-query';

const useCharacterDetail = (characterName?: string) => {
	const query = useQuery({
		queryKey: ['character', characterName],
		queryFn: ({ queryKey }) => apis.armories.characters.getDetails(queryKey[1]),
	});
	return query;
};

export default useCharacterDetail;
