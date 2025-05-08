export function replaceNthOccurrence(
	inputString: string,
	search: string,
	replacement: string,
	n: number,
): string {
	let count = 0;
	const replacedString = inputString.replace(
		new RegExp(search, "g"),
		(match) => {
			count++;
			return count === n ? replacement : match;
		},
	);

	return replacedString;
}
