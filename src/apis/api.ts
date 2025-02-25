import axios from '@apis/axios';

async function getSiblings(characterName: string) {
	const res = await axios.get(`/characters/${characterName}/siblings`);
	return res.data;
}

export type CharacterDetails = {
	characterImage: string;
	expeditionLevel: number;
	pvpGradeName: string;
	townLevel: number;
	townName: string;
	title: string;
	buildMemberGrade: string | null;
};
async function getDetails(characterName?: string) {
	const res = await axios.get(`/armories/characters/${characterName}`);
	return res;
}

export type CharacterProfile = {
	characterImage: string;
	expeditionLevel: number;
	pvpGradeName: string;
	townLevel: number;
	townName: string;
	title: string;
	guildMemberGrade: string | null;
	guildName: string | null;
	usingSkillPount: number;
	totalSkillPoint: number;
	serverName: string;
	characterName: string;
	characterClassName: string;
	characterLevel: number;
	itemAvgLevel: string;
	itemMaxLevel: string;
	stats: CharacterStat[];
	tendencies: CharacterTendency[];
};
export type CharacterTendency = {
	type: string;
	point: number;
	maxPoint: number;
};
export type CharacterStat = {
	type: string;
	value: string;
	tooltips: string[];
};

type CharacterProfilesResponse = {
	CharacterImage: string;
	ExpeditionLevel: number;
	PvpGradeName: string;
	TownLevel: number;
	TownName: string;
	Title: string;
	GuildMemberGrade: string | null;
	GuildName: string | null;
	UsingSkillPoint: number;
	TotalSkillPoint: number;
	Stats: {
		Type: string;
		Value: number;
		Tooltip: string[];
	}[];
	Tendencies: { Type: string; Point: number; MaxPoint: number }[];
	ServerName: string;
	CharacterName: string;
	CharacterLevel: number;
	CharacterClassName: string;
	ItemAvgLevel: string;
	ItemMaxLevel: string;
};
async function getProfiles(characterName?: string): Promise<CharacterProfile> {
	const res = await axios.get<CharacterProfilesResponse>(
		`armories/characters/${characterName}/profiles`
	);

	return {
		characterImage: res.data.CharacterImage,
		expeditionLevel: res.data.ExpeditionLevel,
		pvpGradeName: res.data.PvpGradeName,
		townLevel: res.data.TownLevel,
		townName: res.data.TownName,
		title: res.data.Title,
		guildMemberGrade: res.data.GuildMemberGrade,
		guildName: res.data.GuildName,
		usingSkillPount: res.data.UsingSkillPoint,
		totalSkillPoint: res.data.TotalSkillPoint,
		serverName: res.data.ServerName,
		characterName: res.data.CharacterName,
		characterClassName: res.data.CharacterClassName,
		characterLevel: res.data.CharacterLevel,
		itemAvgLevel: res.data.ItemAvgLevel,
		itemMaxLevel: res.data.ItemMaxLevel,
		stats: res.data.Stats as any,
		tendencies: res.data.Tendencies as any,
	};
}

type CharacterEquipmentResponse = {
	Type: string;
	Name: string;
	Icon: string;
	Grade: string;
	Tooltip: string;
}[];
export type CharacterEquipment = {
	type: string;
	name: string;
	icon: string;
	grade: string;
	tooltip: string;
};

export const EquipmentType = ['투구', '상의', '무기', '하의', '장갑', '어깨'];

export const AccssoryType = ['귀걸이', '반지', '어빌리티 스톤', '팔찌'];

async function getEquipment(
	characterName?: string
): Promise<CharacterEquipment[]> {
	const res = await axios.get<CharacterEquipmentResponse>(
		`armories/characters/${characterName}/equipment`
	);
	return res.data.map((n) => ({
		type: n.Type,
		name: n.Name,
		icon: n.Icon,
		grade: n.Grade,
		tooltip: n.Tooltip,
	}));
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
			getDetails,
			getProfiles,
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
