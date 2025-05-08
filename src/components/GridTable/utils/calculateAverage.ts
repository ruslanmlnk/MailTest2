import { IColumnCell, ITableColumn } from "../types";

const MIN = 297;

const calculateAverage = (column: ITableColumn[]): ITableColumn => {
	const hours: any[] = [];
	const aveCost: any[] = [];

	column[2].columnCells.map((cell, i) => {
		if (i !== 0) {
			hours.push(
				cell.content
					.split(" ")
					.map((el) => parseFloat(el))
					.filter((el) => !isNaN(el)),
			);
		}
	});

	column[3].columnCells.map((cell, i) => {
		if (i !== 0) {
			aveCost.push(
				cell.content
					.slice(1)
					.split(" ")
					.map((el) => parseFloat(el))
					.filter((el) => !isNaN(el)),
			);
		}
	});

	const calculated: IColumnCell[] = [];

	for (let i = 0; i < aveCost.length; ++i) {
		let first = aveCost[i][0] * hours[i][0];
		let last = aveCost[i][0] * hours[i][1];

		let cell: IColumnCell = {
			content: first < MIN ? `$${MIN} - $${last}` : `$${first} - $${last}`,
		};

		calculated.push(cell);
	}

	calculated.unshift({ content: "Average price" });

	return { columnCells: calculated };
};

export default calculateAverage;
