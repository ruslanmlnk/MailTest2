import Head from "next/head";
import React from "react";

import Invetory from "@/components/UpdatedCalculator/CalculateCostsSection/Inventory/Invetory";

import styles from "../styles/css/calculator/main.module.css";

const InventoryPage = () => {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<main className={styles.main}>
				<Invetory />
			</main>
		</>
	);
};

export default InventoryPage;
