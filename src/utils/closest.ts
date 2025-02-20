function closest(arr: number[], target: number) {
	const result = arr.reduce(
		(prev, curr) => (curr - target < prev - target ? curr : prev),
		0
	);
	return result;
}

export default closest;
