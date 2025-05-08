import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { title } from "process";
import React, { FC, useEffect, useState } from "react";

import { ReadMore } from "@/lib/ReadMore";
import { useMobile } from "@/lib/useMobile";

import Arrow from "../../../public/images/mainPage/button-arrow.svg";
import style from "../../styles/css/services/serviceHero.module.css";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import GetAQuotePopup from "../getAQuotePopup";
import { MainPageForm } from "../mainPageForm/MainPageForm";

export interface IServiceHero {
	image: StaticImageData;
	responsiveImage: StaticImageData;
	title: string;
	description: string;
	points: {
		icon: StaticImageData;
		title: string;
		description?: string;
	}[];
}

export interface IServiceHeroProps {
	store: IServiceHero;
	bName?: string;
	slug?: string;
}

export const splitTitleBySpan = (title: string) => {
	const splitTitle = title.split("<span>");

	return (
		<>
			{splitTitle[0]} <span>{splitTitle[1]}</span> {splitTitle[2]}
		</>
	);
};

const ServiceHero = ({ store, bName, slug }: IServiceHeroProps) => {
	const [isPopupOpened, setIsPopupOpened] = useState(false);
	const isMobile = useMobile();

	const router = useRouter();

	const breadcrumbsArr = [
		{
			name: "Main page",
			url: "/",
		},
		{
			name: bName || "",
			url: `/${slug}`,
		},
	];

	return (
		<>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<section className={style.section}>
				<div className={style.breadcrumbs}>
					<Breadcrumbs isServicePage breadcrumbsArr={breadcrumbsArr} />
				</div>

				<div className={`block-container ${style.container}`}>
					<Image
						className={style.image}
						src={isMobile ? store.responsiveImage : store.image}
						alt={store.title}
						priority={true}
					/>
					<div className={style.content}>
						<div>
							<h1>{splitTitleBySpan(store.title)}</h1>
							<p className={style.description}>{store.description}</p>
							<ReadMore
								className={style.readMore}
								children={store.description}
								limit={100}
							/>
						</div>
						<div className={style.points}>
							{store.points.map((item, index) => (
								<div key={index}>
									<Image src={item.icon} alt={store.title} />
									<div>
										<p
											className={style.pointTitle}
											style={
												!item.description
													? { fontSize: "20px", fontWeight: 500 }
													: {}
											}
										>
											{item.title}
										</p>
										<p>{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<MainPageForm className={style.form} />
			</section>
		</>
	);
};

export default ServiceHero;
