import Head from "next/head";
import React from "react";

import Categories from "@/components/UpdatedCalculator/CalculateCostsSection/Categories/Categories";

import styles from "../styles/css/calculator/main.module.css";

const CategoriesPage = () => {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<main className={styles.main}>
				<Categories />
			</main>
		</>
	);
};

export default CategoriesPage;
