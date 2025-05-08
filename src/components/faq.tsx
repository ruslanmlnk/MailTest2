import parse from "html-react-parser";
import React from "react";

import { parseMarkdown } from "@/components/guides/seoCost";
import styles from "@/styles/css/faq.module.css";

export interface FAQCardProps {
	title: string;
	content: string | JSX.Element | JSX.Element[];
	isParsed?: boolean;
}

export const FAQCard = ({ title, content, isParsed }: FAQCardProps) => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<div>
			<div
				className={`${styles.card} ${isOpen ? styles.open : ""}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className={styles.cross}>
					<div className={styles.line1}></div>
					<div className={styles.line2}></div>
				</div>
				<div>
					<span className={styles.question}>{title}</span>
					{
						<div className={styles.content}>
							{isParsed ? content : <p>{content}</p>}
						</div>
					}
				</div>
			</div>
		</div>
	);
};

const FAQList: FAQCardProps[] = [
	{
		title: "Are you able to handle sizable objects?",
		content:
			"Yes, we can handle large items during our moving services. Whether it's furniture, appliances, or other sizable belongings, our team is equipped to manage the transportation and relocation of large items with care and efficiency. Feel free to discuss the specifics of your large items with our moving specialists to ensure a  tailored moving experience.",
	},
	{
		title: "Do you have all required moving licenses?",
		content:
			"Yes, we do.  We have these licenses needed for business:USDOT number, as required by the United States Department of Transportation. Motor Carrier (MC) Number. This number monitors the company's operating authority and ensures they meet the necessary insurance requirements.All States Business Licenses, Local Permits, Liability insurance, cargo insurance, and workers' compensation insurance.",
	},
	{
		title: "Which items are not permissible for transport?",
		content:
			"Items we cannot take include asbestos, medical waste, household trash, liquid-based or hazardous materials, wet paint, chemicals, household cleaners, HAZMAT items, propane, flammable items, oil filters, batteries, and mercury-based items. Certain items may be restricted; please check with your local office for government/state regulations. These include appliances with liquids, non-emptied appliances, heavy materials like concrete and asphalt, yard waste (check recycling guidelines), tires (contact a local tire recycling center), and electronics, including CRT televisions.",
	},
	{
		title: "Where can I obtain boxes for the relocation?",
		content:
			"You can get moving boxes from local moving companies, stores, online retailers , as well as from friends, family, or local community forums. Ensure boxes are in good condition and come in various sizes for different items.",
	},
];

export interface FAQProps {
	cards?: FAQCardProps[];
	isNeedParse?: boolean;
}

const FAQ = ({ cards = FAQList, isNeedParse }: FAQProps) => {
	return (
		<section>
			<div className={`block-container ${styles.container}`}>
				<div className={styles.title}>
					<div>
						<p className={styles.title_text}>FAQ</p>
						<h2>Questions? Look here</h2>
					</div>
					<p>
						Can’t find an answer? Call us <br />
						<a href="tel:8558222722" suppressHydrationWarning>
							<b>(855) 822-2722</b>
						</a>{" "}
						or email{" "}
						<a href="mailto:info@starvanlinesmovers.com">
							<b>info@starvanlinesmovers.com</b>
						</a>
					</p>
				</div>
				<div className={styles.grid}>
					{cards.map((card, i) => {
						return (
							<FAQCard
								isParsed={isNeedParse}
								title={card.title}
								content={
									isNeedParse && typeof card.content === "string"
										? parse(parseMarkdown(card.content) || "")
										: card.content
								}
								key={i}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
