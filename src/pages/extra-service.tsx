import Head from "next/head";
import React from "react";

import ExtraServices from "@/components/calculator/extraServices";

import styles from "../styles/css/calculator/main.module.css";

const ExtraServicePage = () => {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<main className={styles.main}>
				<ExtraServices />
			</main>
		</>
	);
};

export default ExtraServicePage;
