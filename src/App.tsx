import React from 'react';
import Menu from '@components/Menu';
import Layout from './pages/Layout';

function App() {
	return (
		<React.StrictMode>
			<Layout leftMenu={<Menu />} />
		</React.StrictMode>
	);
}

export default App;
