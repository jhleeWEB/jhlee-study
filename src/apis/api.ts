import axios from '@apis/axios';

export async function getCharacterData(characterName: string) {
	const res = await axios.get(`/characters/${characterName}/siblings`);
	return res;
}
