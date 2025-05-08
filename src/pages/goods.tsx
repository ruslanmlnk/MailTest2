import Head from "next/head";
import React from "react";

import GoodsAmout from "@/components/UpdatedCalculator/CalculateCostsSection/GoodsAmount/GoodsAmout";

import styles from "../styles/css/calculator/main.module.css";

const GoodsAmountPage = () => {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<main className={styles.main}>
				<GoodsAmout />
			</main>
		</>
	);
};

export default GoodsAmountPage;
