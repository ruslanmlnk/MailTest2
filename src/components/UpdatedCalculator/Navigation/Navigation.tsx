import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import prevIcon from "../../../../public/images/calculator/bnt-prev-arr.svg";
import nextIcon from "../../../../public/images/calculator/btn-next-arr.svg";
import styles from "./Navigation.module.scss";

export interface ILinkBtnProps {
	text: string;
	link: string;
	isDisabled?: boolean;
	next?: boolean;
	shrinckOnMobile?: boolean;
	onClick?: Function;
}

export interface INavigationProps {
	nextBtn: ILinkBtnProps;
	prevBtn: ILinkBtnProps;
	isHovertinContent?: boolean;
	isSpaceBetween?: boolean;
	onClick?: Function;
}

export const NavigationButton = ({
	text,
	link,
	next = false,
	isDisabled = false,
	shrinckOnMobile = false,
	onClick = () => {},
}: ILinkBtnProps) => {
	return (
		<Link
			onClick={() => onClick()}
			style={{ flexFlow: next ? "row-reverse" : "row" }}
			className={clsx(
				styles.link_btn,
				next ? styles.next : "",
				isDisabled ? styles.disabled : "",
				shrinckOnMobile ? styles.shrink : "",
			)}
			href={link}
		>
			<Image
				className={styles.link_icons}
				src={next ? nextIcon : prevIcon}
				alt="icon"
				width={11}
				height={18}
			/>
			<span>{text}</span>
		</Link>
	);
};

export const Navigation = ({
	nextBtn,
	prevBtn,
	isHovertinContent = false,
	isSpaceBetween = false,
	onClick = () => {},
}: INavigationProps) => {
	return (
		<div
			className={clsx(
				styles.nav_wrapper,
				isHovertinContent ? styles.hovering : "",
				isSpaceBetween ? styles.space : "",
			)}
		>
			<NavigationButton {...prevBtn} onClick={onClick} />
			<NavigationButton {...nextBtn} next onClick={onClick} />
		</div>
	);
};
