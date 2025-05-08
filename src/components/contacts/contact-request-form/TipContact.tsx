import Image, { StaticImageData } from "next/image";
import React from "react";

import ButtonArrow from "@/../public/images/mainPage/button-arrow.svg";
import style from "@/styles/scss/contacts/tipContact.module.scss";

export type TipContactProps = {
	title: string;
	description: string;
	contact: string;
	image: { src: StaticImageData; alt: string };
	href: string;
};

const TipContact = ({
	title,
	description,
	contact,
	image,
	href,
}: TipContactProps) => {
	return (
		<div className={style.tip}>
			<Image src={image.src} alt={image.alt} />
			<div className={style.info}>
				<span className={style.title}>{title}</span>
				<p>{description}</p>
				<a href={href}>
					{contact} <Image src={ButtonArrow} alt="arrow-icon" />
				</a>
			</div>
		</div>
	);
};

export default TipContact;
