import clsx from "clsx";

import styles from "./GridTable.module.scss";
import { IGridTableProps } from "./types";
import calculateAverage from "./utils/calculateAverage";

export const GridTable = ({
	column,
	table_title,
	subtitle,
	calcAverage,
	isSmall,
	altVersion,
	isArticleTab,
	cityName,
}: IGridTableProps) => {
	if (!column) {
		return null;
	}
	const renderCols = calcAverage
		? [...column, calculateAverage(column)]
		: column;

	return (
		<section
			className={clsx(
				styles.tableSection,
				isSmall ? styles.sectionSmall : "",
				altVersion ? styles.sectionAlt : "",
			)}
		>
			{isSmall ? (
				<h2 className={styles.smallTitle}>{table_title}</h2>
			) : (
				<>
					{subtitle ? <span>{subtitle.toUpperCase()}</span> : null}
					{table_title ? (
						<h2>
							{table_title}
							{cityName
								? " in " + cityName?.replace("movers", "").replace("Movers", "")
								: ""}
						</h2>
					) : null}
				</>
			)}
			<div className={styles.tableWrapper}>
				{renderCols.map(({ columnCells }, i) => {
					return (
						<div key={i} className={styles.col}>
							{columnCells.map(
								({ content }: { content: string }, j: number) => {
									return (
										<div
											key={j}
											className={clsx(
												styles.ceil,
												altVersion ? styles.altCeil : "",
											)}
										>
											<p className={styles.mobile}>
												{renderCols[0].columnCells[j].content}
											</p>
											{content}
										</div>
									);
								},
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
};
