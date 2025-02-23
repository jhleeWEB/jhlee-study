export interface IItem {
	[key: string]: string;
}
const colors = {
	item: {
		고대: '#bca37d',
		유물: '#e25041',
		전설: '#fba026',
		영웅: '#7504fb',
		희귀: '#2d82c9',
		고급: '#61bd6d',
		일반: '#f7f7f7',
	},
	highLight: {
		default: '#50ce97',
	},
	font: {
		default: '#f7f7f7',
		dark: '#b4b5bc',
		darken: '#4a505a',
		darker: '#a5a6ae',
	},
	background: {
		light: '#31363f',
		default: '#1c1d22',
		dark: '#17181c',
		darken: '#101114',
		darker: '#000000',
	},
};

const sizes = {
	gap: {
		xs: '0.25rem',
		s: '1rem',
		m: '2rem',
		l: '3rem',
	},
	window: {
		s: 'screen and (max-width: 600px)',
		m: 'screen and (max-width: 760px)',
		l: 'screen and (max-width: 1024px)',
	},
	font: {
		s: '1.25rem',
		m: '1.5rem',
		l: '2rem',
		weight: {
			s: 'thin',
			m: 'regular',
			l: 'bold',
		},
	},

	border: {
		radius: {
			s: '0.5rem',
			m: '1rem',
			l: '1.5rem',
		},
	},
};

const theme = {
	sizes,
	colors,
};

export type Theme = typeof theme;

export default theme;
