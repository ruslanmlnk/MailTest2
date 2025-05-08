import React from "react";

import styles from "./BenigitsTable.module.scss";

interface StatCard {
	description: string;
	stat: string;
}

interface BenefitsTableProps {
	statsFirst: StatCard[];
	statsSecond: StatCard[];
	firstTItle: String;
	secondTitle: String;
}

const capitalizeFirstLetter = (str: String) => {
	const firstLetter = str.charAt(0);

	const firstLetterCap = firstLetter.toUpperCase();

	const remainingLetters = str.slice(1);

	return firstLetterCap + remainingLetters;
};

const parseData = (str: String) => {
	if (str.charAt(0) === "$" || str.charAt(0) === "+") {
		const firstLetter = str.charAt(0);

		const firstLetterCap = <span className={styles.orange}>{firstLetter}</span>;

		const remainingLetters = str.slice(1);

		return (
			<span>
				{firstLetterCap}
				{remainingLetters}
			</span>
		);
	}
	return str;
};

export const BenefitsTable = ({
	statsFirst,
	statsSecond,
	firstTItle,
	secondTitle,
}: BenefitsTableProps) => {
	const titles = statsFirst.map((el) => el.description);

	return (
		<section className="block-container">
			<span className={styles.preTitle}>{"useful statistics".toUpperCase()}</span>
			<h2
				className={styles.sectionTitle}
			>{`Comparison between \n ${capitalizeFirstLetter(
				firstTItle,
			)} and ${capitalizeFirstLetter(secondTitle)}`}</h2>
			<div className={styles.table}>
				<ul className={styles.titleColumn}>
					<li className={styles.title}>{"Benefits"}</li>
					{titles.map((el, i) => (
						<li key={i}>{el}</li>
					))}
				</ul>
				<ul className={styles.firstStatColumn}>
					<li className={styles.title}>
						<span>{capitalizeFirstLetter(firstTItle)}</span>
					</li>
					{statsFirst.map((el, i) => (
						<li key={i}>
							<span className={styles.mobile}>{titles.at(i)}</span>
							{parseData(el.stat)}
						</li>
					))}
				</ul>
				<ul className={styles.secondStatColumn}>
					<li className={styles.title}>
						<span>{capitalizeFirstLetter(secondTitle)}</span>
					</li>
					{statsSecond.map((el, i) => (
						<li key={i}>
							<span className={styles.mobile}>{titles.at(i)}</span>
							{parseData(el.stat)}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
