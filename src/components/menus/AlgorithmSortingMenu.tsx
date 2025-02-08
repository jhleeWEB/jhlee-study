import React from 'react';
import Button from '@components/buttons/Button';
import { SUBNAME } from '@/global/constants';
import { useNavigate } from 'react-router';

const AlgorithmSortingMenu = () => {
	const navigate = useNavigate();

	return (
		<>
			<Button onClick={() => navigate(SUBNAME.SELECTION)}>Selection</Button>
			<Button onClick={() => navigate(SUBNAME.HEAP)}>Heap</Button>
			<Button onClick={() => navigate(SUBNAME.BUBBLE)}>Bubble</Button>
			<Button onClick={() => navigate(SUBNAME.INSERTION)}>Insertion</Button>
			<Button onClick={() => navigate(SUBNAME.QUICK)}>Quick</Button>
		</>
	);
};

export default AlgorithmSortingMenu;
