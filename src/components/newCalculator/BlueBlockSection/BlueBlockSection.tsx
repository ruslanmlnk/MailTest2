import clsx from "clsx";

import styles from "./BlueBlockSection.module.scss";

export const BlueBlockSection = () => {
	return (
		<div className={clsx("block-container", styles.blueBlock)}>
			<span className={styles.h3}>Comprehensive Resources for a Successful Relocation</span>
			<p>
				Our website has a Moving Cost Calculator and lots of helpful resources
				for moving. We understand that relocating can be a stressful process
				filled with many variables. Our experts have made guides, checklists,
				and packing tips to help your move go smoothly. The resources cover
				everything from start to finish. Designers created them to help you
				simplify the moving process.
			</p>
		</div>
	);
};
