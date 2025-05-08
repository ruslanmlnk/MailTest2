import Head from "next/head";
import Script from "next/script";
import React from "react";

import PreCalculatorSection from "@/components/UpdatedCalculator/PreCalculatorSection/PreCalculatorSection";

import styles from "../styles/css/calculator/main.module.css";
import { addJsonLd_2 } from "./_document";

const newCalculator = () => {
	return (
		<>
			<Head>
				<title>Get an Accurate Moving Quote with Our Cost Calculator</title>
				<meta
					name="description"
					content="Get accurate moving costs upfront with our free, easy-to-use calculator. Simply enter move details to receive a precise, bindable price estimate for truck rentals, labor, packing supplies, and more - no hidden fees"
				/>
				<Script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2({
						description:
							"Get accurate moving costs upfront with our free, easy-to-use calculator. Simply enter move details to receive a precise, bindable price estimate for truck rentals, labor, packing supplies, and more - no hidden fees",
						title: "Get an Accurate Moving Quote with Our Cost Calculator",
						url: `https://starvanlinesmovers.com/calculator`,
					})}
				></Script>
			</Head>

			<main className={styles.main}>
				<PreCalculatorSection />
			</main>
		</>
	);
};

export default newCalculator;
