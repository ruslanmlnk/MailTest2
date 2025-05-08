import Head from "next/head";
import React from "react";

import ClientData from "@/components/calculator/clientData";

import styles from "../styles/css/calculator/main.module.css";

const contactInformation = () => {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<main className={styles.main}>
				<ClientData />
			</main>
		</>
	);
};

export default contactInformation;
