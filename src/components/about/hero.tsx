import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";

import Arrow from "@/../public/images/mainPage/button-arrow.svg";
import style from "@/styles/css/about/hero.module.css";

import Home from "../../../public/images/about/home-icon.svg";
import TitleBg from "../../../public/images/about/team-title-bg.svg";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import GetAQuotePopup from "../getAQuotePopup";

export interface IHero {
	background: [
		({ className }: { className?: string }) => JSX.Element,
		({ className }: { className?: string }) => JSX.Element,
	];
	title: string;
	navTag: string;
	description: JSX.Element | string;
	url?: string;
	pageTitle?: string;
}

const Hero: FC<{ store: IHero; isMobile: boolean }> = ({ store, isMobile }) => {
	const [isPopupOpened, setIsPopupOpened] = useState(false);

	const breadcrumbsArr = [
		{
			name: "Main page",
			url: "/",
		},
		{
			name: store.pageTitle || "",
			url: store.url || "",
		},
	];

	const Comp = isMobile ? store.background[1] : store.background[0];

	return (
		<>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<section
				className={`${style.section} ${
					store.description == "" ? style.noDescription : ""
				}`}
				// style={{
				// 	backgroundImage: `url(${
				// 		isMobile ? store.background[1].src : store.background[0].src
				// 	})`,
				// }}
			>
				<Comp className={style.background} />
				<div className={style.breadcrumbsWrap}>
					<Breadcrumbs breadcrumbsArr={breadcrumbsArr} />
				</div>
				<div className={clsx("block-container", style.container)}>
					{/* <div className={style.navigation}>
						<Image src={Home} alt="home-icon" />
						<div className={style.dash} />
						<p>{store.navTag}</p>
					</div> */}
					<div className={style.info}>
						<span className={style.preTitle}>{store.navTag}</span>
						<div className={style.titleWrapper}>
							<h1>{store.title}</h1>
							<Image src={TitleBg} alt="title-sub-icon" />
						</div>
						{store.description != "getaquote" ? (
							store.description
						) : (
							<button className="main" onClick={() => setIsPopupOpened(true)}>
								Get a quote <Image src={Arrow} alt="arrow-icon" />
							</button>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
