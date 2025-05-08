import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import okIcon from "../../../../public/okIcon.svg";
import { CalculatorBtn } from "../CalculatorBtn/CalculatorBtn";
import styles from "./CalculatorBenefitsSection.module.scss";

export interface CalcBenefitsProps {
	reversed?: boolean;
	elements: string[];
	img: any;
	isLast?: boolean;
}

const ListElem = ({ title }: { title: string }) => {
	return (
		<li className={styles.benefitsItem}>
			<Image width={35} height={35} src={okIcon} alt="ok-icon" />
			{title}
		</li>
	);
};

export const CalculatorBenefitsSection = ({
	reversed = false,
	elements,
	img,
	isLast,
}: CalcBenefitsProps) => {
	return (
		<section className={clsx(styles.benefitSection, isLast ? styles.last : "")}>
			<div
				className={clsx(styles.background, reversed ? styles.bgReversed : "")}
			/>
			<div
				className={clsx(
					"block-container",
					styles.bnfContent,
					reversed ? styles.contentReversed : "",
				)}
			>
				<div className={styles.leftSide}>
					<ul className={styles.list}>
						{elements.map((el, i) => (
							<ListElem title={el} key={i} />
						))}
					</ul>
					<CalculatorBtn />
				</div>
				<div
					className={clsx(
						styles.imgWrapper,
						reversed ? styles.reversedImg : "",
					)}
				>
					<Image fill src={img} alt="benfits-img" />
				</div>
			</div>
		</section>
	);
};
