import clsx from "clsx";
import Image from "next/image";

import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { IBreadCrumb } from "@/components/breadcrumbs/types";

import calcHero from "../../../../public/images/calcHero.jpg";
import { CalculatorBtn } from "../CalculatorBtn/CalculatorBtn";
import styles from "./Hero.module.scss";

const BREADCRUMBS: IBreadCrumb[] = [
	{ name: "Main page", url: "/" },
	{ name: "Calculator", url: "/calculator-page" },
];

export const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<Breadcrumbs
				className={styles.breadcrumbs}
				breadcrumbsArr={BREADCRUMBS}
			/>
			<div className={clsx("block-container", styles.info)}>
				<span className={styles.preTitle}>calculator</span>
				<h1>{"Get an Accurate Moving Quote \nwith Our Cost Calculator"}</h1>
				<p className={styles.text}>
					Get accurate moving costs upfront with our free, easy-to-use
					calculator. Simply enter move details to receive a precise, bindable
					price estimate for truck rentals, labor, packing supplies, and more -
					no hidden fees
				</p>
				<CalculatorBtn />
			</div>
			<Image src={calcHero} loading="eager" fill alt="background" priority />
		</section>
	);
};
