import axios from '@apis/axios';

async function getSiblings(characterName: string) {
	const res = await axios.get(`/characters/${characterName}/siblings`);
	return res;
}

async function getProfileInfo(characterName: string) {
	const res = await axios.get(`/armories/characters/${characterName}`);
	return res;
}
async function getStats(characterName: string) {
	const res = await axios.get(`armories/characters/${characterName}/profiles`);
	return res;
}
async function getEquipment(characterName: string) {
	const res = await axios.get(`armories/characters/${characterName}/equipment`);
	return res;
}
async function getAvatars(characterName: string) {
	const res = await axios.get(`armories/characters/${characterName}/avatars`);
	return res;
}
async function getCombatSkills(characterName: string) {
	const res = await axios.get(
		`armories/characters/${characterName}/combat-skills`
	);
	return res;
}
async function getEngravings(characterName: string) {
	const res = await axios.get(
		`armories/characters/${characterName}/engravings`
	);
	return res;
}
async function getCards(characterName: string) {
	const res = await axios.get(`armories/characters/${characterName}/cards`);
	return res;
}
async function getGems(characterName: string) {
	const res = await axios.get(`armories/characters/${characterName}/gems`);
	return res;
}
async function getColosseums(characterName: string) {
	const res = await axios.get(
		`armories/characters/${characterName}/colosseums`
	);
	return res;
}
async function getCollectibles(characterName: string) {
	const res = await axios.get(
		`armories/characters/${characterName}/collectibles`
	);
	return res;
}
async function getArkPassives(characterName: string) {
	const res = await axios.get(
		`armories/characters/${characterName}/arckpassive`
	);
	return res;
}

export type NewsType = 'notices' | 'events' | 'alarms' | string;
export type NoticeResponse = {
	Title: string;
	Date: Date;
	Link: string;
	Type: string;
};
export type EventResponse = {
	Title: string;
	Thumbnail: string;
	Link: string;
	StartDate: string;
	EndDate: string;
	RewardDate: string | null;
};
async function getNews(type: NewsType | unknown) {
	const res = await axios.get(`/news/${type}`);
	return res.data;
}

export type Item = {
	Name: string;
	Icon: string;
	Grade: string;
	StartTimes: [string | null];
};

export type RewardItems = {
	ItemLevel: number;
	Items: Item[];
};

export type CalendarResponse = {
	CategoryName: string;
	ContentsName: string;
	ContentsIcon: string;
	MinItemLevel: number;
	StartTimes: string[];
	Location: string;
	RewardItems: RewardItems[];
};

export type CategoryName =
	| '카오스게이트'
	| '모험 섬'
	| '섬'
	| '항해'
	| '필드보스';

async function getCalender() {
	const res = await axios.get(`/gamecontents/calendar`);
	return res.data;
}

const apis = {
	armories: {
		characters: {
			getSiblings,
			getArkPassives,
			getAvatars,
			getCards,
			getCollectibles,
			getColosseums,
			getCombatSkills,
			getEngravings,
			getEquipment,
			getGems,
			getProfileInfo,
			getStats,
		},
	},
	news: {
		getNews,
	},
	contents: {
		getCalender,
	},
};

export default apis;
