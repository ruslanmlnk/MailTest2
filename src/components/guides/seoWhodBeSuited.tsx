import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon1 from "@/../public/images/guides/montana/Adventurous-icon.png";
import Icon2 from "@/../public/images/guides/montana/Ambitious-icon.png";
import Icon3 from "@/../public/images/guides/montana/Diverse-icon.png";
import Icon4 from "@/../public/images/guides/montana/Friendly-icon.png";
import Icon6 from "@/../public/images/guides/montana/Independent-icon.png";
import Icon5 from "@/../public/images/guides/montana/Resilent-icon.png";
import Arrow from "@/../public/images/mainPage/arrow.svg";
import { IStrapiImage } from "@/lib/notion";

import style from "../../styles/css/guides/seoWhodBeSuited.module.css";

export interface ISEOWhodBeSuited {
	title: string;
	contentCard: {
		id: number;
		title: string;
		link: string | null;
		description: string | null;
		icon: IStrapiImage;
	}[];
	isDynamic?: boolean;
}

const Icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];

const SeoWhodBeSuited: FC<{
	store: ISEOWhodBeSuited;
	placeName?: string;
	isFirst?: boolean;
}> = ({ store, placeName, isFirst }) => {
	const [swiper, setSwiper] = React.useState<any>();

	return (
		<section>
			<div
				style={isFirst ? { marginTop: "0px" } : {}}
				className={`block-container ${style.container} ${store.isDynamic ? style.defaultMargin : ""} ${
					store.title.includes("packaging") && style.packaging
				}`}
			>
				<p className={style.title}>TOP SPOTS IN THE STATE</p>
				<h2>
					{placeName
						? `Who would be suited to move to ${placeName}?`
						: "Who would be suited to move to the city?"}
				</h2>

				<div className={style.grid}>
					{store.contentCard.map((item, index) => (
						<div className={style.card} key={index}>
							<Image
								src={item.icon.data?.attributes?.url || Icons[index]}
								width={100}
								height={100}
								alt={
									item.icon.data?.attributes?.alternativeText ||
									`${item.title} icon SVL`
								}
							/>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					))}
				</div>

				<div className={style.mobileGrid}>
					<Swiper
						spaceBetween={10}
						slidesPerView={1.04}
						onSwiper={(swiper) => setSwiper(swiper)}
						className={style.swiper}
					>
						{store.contentCard.map((item, index) => (
							<SwiperSlide key={index} className={style.slide}>
								<div className={style.card} key={index}>
									<Image
										src={item.icon.data?.attributes?.url || Icons[index]}
										width={200}
										height={200}
										alt={
											item.icon.data?.attributes?.alternativeText ||
											`${item.title} icon SVL`
										}
									/>
									<div>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default SeoWhodBeSuited;
