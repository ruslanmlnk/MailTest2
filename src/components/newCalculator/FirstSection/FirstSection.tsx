import clsx from "clsx";
import Image from "next/image";

import calcImg from "../../../../public/images/Calculator-img.jpg";
import styles from "./FirstSection.module.scss";

export const FirstSection = () => {
	return (
		<section className={clsx(styles.section, "block-container")}>
			<div className={styles.info}>
				<div className={styles.infoHeader}>
					<span className={styles.preTitle}>Moving estimate</span>
					<h2>
						{
							"Moving Cost Calculator: Accurately \nEstimate Your Relocation Expenses"
						}
					</h2>
				</div>
				<div className={styles.infoBody}>
					<p className={styles.firstTextBlock}>
						Moving to a new home is an exciting milestone, but it also comes
						with considerable expenses. From hiring professional movers to
						renting a truck, purchasing packing supplies, and more, costs can
						quickly add. That's why having an accurate moving cost estimate from
						the start is crucial for budgeting and planning appropriately. Our
						Moving Cost Calculator is simple to use. It provides an estimate of
						your moving expenses. The estimate relies on your specific needs.
					</p>
				</div>
			</div>
			<div className={styles.imgBlock}>
				<div className={styles.text}>
					<p className={styles.secondBlockText}>
						Calculate Your True Moving Expenses in Minutes Our Moving Cost
						Calculator uses your information to give you an estimate for your
						move. The calculator is advanced and personalized. It makes the
						process quick and easy. You will receive a detailed breakdown of
						costs. The breakdown will rely on industry data, your home size,
						distance, move date, date flexibility, and any additional services
						needed. From there, you can adjust variables to compare costs and
						determine the most budget-friendly approach.
					</p>
				</div>

				<Image
					className={styles.secondBlockImg}
					src={calcImg}
					alt="calculator"
				/>
			</div>
		</section>
	);
};
