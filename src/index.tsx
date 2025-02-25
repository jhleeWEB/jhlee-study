import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(<App />);
