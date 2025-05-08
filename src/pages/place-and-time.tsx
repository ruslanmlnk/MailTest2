import Head from "next/head";
import React from "react";

import AddressSelection from "@/components/calculator/addressSelection";

import styles from "../styles/css/calculator/main.module.css";

const PlaceAndTime = () => {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<main className={styles.main}>
				<AddressSelection />
			</main>
		</>
	);
};

export default PlaceAndTime;
