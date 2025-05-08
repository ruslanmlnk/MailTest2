import Head from "next/head";
import React from "react";

import Total from "@/components/calculator/total";

import styles from "../styles/css/calculator/main.module.css";

const check = () => {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<main className={styles.main}>
				<Total />
			</main>
		</>
	);
};

export default check;
