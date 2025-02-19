export default function cluster<T>(arr: T[], splitBy = 10) {
	let count = 0;
	let temp: T[] = [];
	return arr.reduce((acc, c, i) => {
		if (count == splitBy || i == arr.length - 1) {
			acc.push(temp);
			temp = [];
			count = 0;
		} else {
			count += 1;
			temp.push(c);
		}

		return acc;
	}, [] as T[][]);
}
