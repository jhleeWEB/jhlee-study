const windowSize = {
	sm: 'screen and (max-width: 600px)',
	md: 'screen and (max-width: 760px)',
	lg: 'screen and (max-width: 1024px)',
};

const bgColor = {
	primary: 'hsl(229deg 11% 12%)',
	secondary: 'hsl(223deg 13% 7%)',
};

const fontSize = {
	xs: '0.5rem',
	sm: '0.75rem',
	default: '1rem',
	md: '1.25rem',
	lg: '1.5rem',
};

const fontWeight = {
	thin: '',
	light: '',
	medium: '',
	bold: '',
	black: '',
};

const lightMode = {
	background: '#fff',
	fontPrimary: 'black',
	fontSecondary: 'gray',
	primary: '#00a0ff',
	secondary: '#ddd',
	hover: '#00a0ff50',
};
const darkMode = {
	background: '#fff',
	fontPrimary: 'black',
	fontSecondary: 'gray',
	primary: '#00a0ff',
	secondary: '#ddd',
	hover: '#00a0ff50',
};

const theme = {
	windowSize,
	fontSize,
	lightMode,
	darkMode,
	bgColor,
};

export type Theme = keyof typeof theme;

export default theme;
