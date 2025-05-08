import clsx from "clsx";
import React from "react";

import styles from "./GenericSection.module.scss";

export interface GenericSectionProps {
	preTitle: string;
	title: string;
	body: string;
}

export const GenericSection = ({
	preTitle,
	title,
	body,
}: GenericSectionProps) => {
	return (
		<section className={clsx(styles.secondSection, "block-container")}>
			<div className={styles.secondSectioninfo}>
				<span className={styles.preTitle}>{preTitle}</span>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
		</section>
	);
};
