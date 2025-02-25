import apis from '@/apis/api';
import { useQuery } from '@tanstack/react-query';

const useCharacterProfiles = (characterName?: string) => {
	const query = useQuery({
		queryKey: ['character', 'profiles', characterName],
		queryFn: ({ queryKey }) =>
			apis.armories.characters.getProfiles(queryKey[2]),
	});
	return query;
};

export default useCharacterProfiles;
