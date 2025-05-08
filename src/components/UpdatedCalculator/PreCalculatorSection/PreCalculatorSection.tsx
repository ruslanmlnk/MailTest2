import clsx from "clsx";
import Image from "next/image";

import giftImg from "../../../../public/images/calculator/calculator-section-gift.png";
import preArrow from "../../../../public/images/calculator/pre-arrow.svg";
import { NavigationButton } from "../Navigation/Navigation";
import styles from "./PreCalculatorSection.module.scss";
import RoundNumber from "./RoundNumber/RoundNumber";

const steps: React.ReactNode[] = [
	<p>Enter your contact information</p>,
	<p>Choose a place and time for the move</p>,
	<p>Calculate moving costs</p>,
	<p className={styles.extra_p}>If you wish, select an additional service</p>,
	<Image src={giftImg} alt="gift-image" width={120} height={138} />,
];

const PreCalculatorSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.section_header}>
				<div className={styles.section_header_desktop}>
					<h1 className={styles.pageTitle}>
						{"Calculate the cost of your \n move in 1 minute!"}
					</h1>
					<p className={styles.pageDescr}>
						{
							"Enter info about your items and get an itemised \n estimate with a cost that won't change"
						}
					</p>
				</div>
			</div>
			<div className={styles.steps}>
				<ul className={styles.steps_list}>
					{steps.length &&
						steps.map((step, i) => (
							<li className={styles.steps_wrapper}>
								<div
									className={clsx(
										i !== steps.length - 1
											? styles.steps_item
											: styles.steps_gift,
										i === 3 ? styles.extra_text : "",
									)}
								>
									{i !== steps.length - 1 ? (
										<RoundNumber value={i + 1} />
									) : null}
									{step}
								</div>
								{/* <div
									className={
										i <= steps.length - 3
											? styles.separator
											: styles.separator_transparent
									}
								></div> */}
							</li>
						))}
				</ul>
			</div>
			<div className={styles.navigation}>
				<NavigationButton text="Start" next link="/contact-information" />
			</div>
		</section>
	);
};

export default PreCalculatorSection;
