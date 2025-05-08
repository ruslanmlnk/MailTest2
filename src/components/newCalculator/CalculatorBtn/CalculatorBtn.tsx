import Link from "next/link";
import React from "react";

import styles from "./CalculatorBtn.module.scss";

export const CalculatorBtn = () => {
	return (
		<Link className={styles.linkBtn} href={"/calculator"}>
			<span>Calculate cost</span>
			<svg
				width="11"
				height="18"
				viewBox="0 0 11 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="2.41885"
					height="12.9005"
					rx="1.20943"
					transform="matrix(-0.718039 -0.696003 0.718039 -0.696003 1.73828 18)"
					fill="white"
				/>
				<rect
					width="2.41885"
					height="12.9005"
					rx="1.20943"
					transform="matrix(0.718039 -0.696003 -0.718039 -0.696003 9.26172 10.6621)"
					fill="white"
				/>
			</svg>
		</Link>
	);
};
