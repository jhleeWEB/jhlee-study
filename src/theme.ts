const colors = {
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
	window: {
		s: 'screen and (max-width: 600px)',
		m: 'screen and (max-width: 760px)',
		l: 'screen and (max-width: 1024px)',
	},
	font: {
		s: '1rem',
		m: '2rem',
		l: '3rem',
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
			l: '1,5rem',
		},
	},
};

const theme = {
	sizes,
	colors,
};

export type Theme = typeof theme;

export default theme;
