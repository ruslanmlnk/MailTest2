import Image, { StaticImageData } from "next/image";

import ProfessionalMoversIcon from "@/../public/images/mainPage/first/professionalMovers.svg";
import QualityAssistanceIcon from "@/../public/images/mainPage/first/qualityAssurance.svg";
import ReliabilityIcon from "@/../public/images/mainPage/first/time.svg";
import styles from "@/styles/css/mainPage/new/cards.module.css";

interface ICard {
	title: string;
	decription: string;
	icon: StaticImageData;
}

const cards: ICard[] = [
	{
		title: "Reliability and punctuality",
		decription: "Reliable tracks will arrive at the strictly appointed time",
		icon: ReliabilityIcon,
	},
	{
		title: "Professional movers",
		decription:
			"Professional movers with experience from 3 to 15 years will move your items",
		icon: ProfessionalMoversIcon,
	},
	{
		title: "Quality assurance",
		decription: "Full insurance for your belongings with 100% payout",
		icon: QualityAssistanceIcon,
	},
];

const Cards = () => {
	return (
		<>
			<div className={`block-container ${styles.cards}`}>
				{cards.map((card, i) => (
					<div key={i} className={styles.card}>
						<Image src={card.icon} alt={card.title} />
						<div className={styles.content}>
							<span className={styles.cardTitle}>{card.title}</span>
							<p>{card.decription}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default Cards;
