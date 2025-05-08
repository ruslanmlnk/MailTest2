export interface IColumnCell {
	content: string;
}
export interface ITableColumn {
	columnCells: IColumnCell[];
}

export interface IGridTableProps {
	column?: ITableColumn[] | null;
	table_title?: string;
	subtitle?: string;
	calcAverage?: boolean;
	isSmall?: boolean;
	altVersion?: boolean;
	isArticleTab?: boolean;
	cityName?: string;
}

const cols: ITableColumn[] = [
	{
		columnCells: [
			{ content: "Move size" },
			{ content: "Studio / 1 Bedroom" },
			{ content: "2-3 Bedrooms" },
			{ content: "4+ Bedrooms" },
		],
	},
	{
		columnCells: [
			{ content: "Moving company" },
			{ content: "$1,464 - $6,108" },
			{ content: "$4,363 - $9,088" },
			{ content: "$8,107 - 13,578" },
		],
	},
];
