import Image, { StaticImageData } from "next/image";
import React, { FC, useState } from "react";

import style from "@/styles/css/services/ourProcess.module.css";

import Arrow from "../../../public/images/mainPage/button-arrow.svg";
import GetAQuotePopup from "../getAQuotePopup";
import { splitTitleBySpan } from "./serviceHero";

export interface ICard {
	icon: StaticImageData;
	title: string;
	description: string;
}
export interface IOurProcess {
	title: string;
	description: string;
	cards: ICard[];
}

const Card: FC<ICard> = ({ icon, title, description }) => {
	return (
		<div>
			<Image src={icon} alt="" />
			<span className={style.cardSpan}>{title}</span>
			<p>{description}</p>
		</div>
	);
};

const OurProcess: FC<{ store: IOurProcess }> = ({ store }) => {
	const [isPopupOpened, setIsPopupOpened] = useState(false);
	return (
		<section>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<div className={`block-container ${style.container}`}>
				<div className={style.header}>
					<div className={style.title}>
						<span className={style.preTitle}>Our process</span>
						<h2>{splitTitleBySpan(store.title)}</h2>
						<p>{store.description}</p>
					</div>
					<div>
						<button className="main" onClick={() => setIsPopupOpened(true)}>
							Get a quote <Image src={Arrow} alt="" />
						</button>
					</div>
				</div>
				<div className={style.cards}>
					{store.cards.map((item, index) => (
						<Card
							key={index}
							icon={item.icon}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurProcess;
