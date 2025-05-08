import { ITableColumn } from "../types";

interface IRow {
	col_1: string;
	col_2: string;
	col_3: string;
	col_4: string;
}
export const makeColumnsFromRows = (table: any) => {
	const columns: ITableColumn[] = [
		{ columnCells: [] },
		{ columnCells: [] },

		{ columnCells: [] },

		{ columnCells: [] },
	];
	for (let key in table) {
		let col = 0;
		if (table.hasOwnProperty(key) && key !== "id") {
			for (let key_ in table[key]) {
				if (table[key].hasOwnProperty(key_) && key_ !== "id") {
					columns[col].columnCells.push({ content: table[key][key_] });
					++col;
				}
			}
		}
	}

	return columns;
};

export const makeColumnsFromShort = (table: any) => {
	const columns: ITableColumn[] = [{ columnCells: [] }, { columnCells: [] }];
	for (let key in table) {
		let col = 0;
		if (table.hasOwnProperty(key) && key !== "id") {
			for (let key_ in table[key]) {
				if (table[key].hasOwnProperty(key_) && key_ !== "id") {
					columns[col].columnCells.push({ content: table[key][key_] });
					++col;
				}
			}
		}
	}


	return columns;
};
