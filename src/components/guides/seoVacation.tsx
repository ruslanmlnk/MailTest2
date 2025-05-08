import Image from "next/image";
import React, { FC, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { IStrapiImage } from "@/lib/notion";

import Arrow from "../../../public/images/mainPage/arrow.svg";
import style from "../../styles/css/guides/seoVacation.module.css";

export interface ISEOVacaiton {
	title: string;
	description: string;
	vacationItem: {
		image: IStrapiImage;
		title: string;
		description: string;
	}[];
}

const SeoVacation: FC<{
	store: ISEOVacaiton;
	placeName?: string;
	isFirst?: boolean;
}> = ({ store, placeName, isFirst }) => {
	const [currentPlace, setCurrentPlace] = useState<number>(0);

	const handlePreviousClick = () => {
		setCurrentPlace((prev) =>
			prev === 0 ? store.vacationItem.length - 1 : prev - 1,
		);
	};

	const handleNextClick = () => {
		setCurrentPlace((prev) =>
			prev === store.vacationItem.length - 1 ? 0 : prev + 1,
		);
	};
	return (
		<section>
			<div
				style={isFirst ? { marginTop: "0px" } : {}}
				className={`block-container ${style.container}`}
			>
				<div className={style.slider}>
					{store.vacationItem.map((item, index) => (
						<div
							key={index}
							className={`${style.specialist} ${
								currentPlace === index ? style.active : style.hidden
							}`}
						>
							<div className={style.image}>
								<Image
									src={item.image.data.attributes.url}
									width={500}
									height={330}
									alt={
										item.image.data.attributes.alternativeText ||
										`${item.title} SVL`
									}
								/>
							</div>
							<div className={style.text}>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
				<div className={style.title}>
					<div className={style.innerTitle}>
						<h4 className="pretitle">Where to go on vacation</h4>
						<h2>
							{placeName
								? `The best attractions in the ${placeName}`
								: "The best attractions in the city"}
						</h2>
						<p>{store.description}</p>
					</div>
					<div className={style.slider_controller}>
						<div onClick={handlePreviousClick}>
							<Image src={Arrow} alt="arrow left icon" />
						</div>
						<div onClick={handleNextClick}>
							<Image src={Arrow} alt="arrow right icon" />
						</div>
					</div>
				</div>
				<div style={{ overflow: "visible" }}>
					<Swiper
						spaceBetween={10}
						slidesPerView={1.04}
						className={style.sliderMobile}
					>
						{store.vacationItem.map((item, index) => (
							<SwiperSlide
								key={index}
								className={`${style.specialist} ${style.active}`}
							>
								<div className={style.image}>
									<Image
										src={item.image.data.attributes.url}
										width={500}
										height={500}
										alt={
											item.image.data.attributes.alternativeText ||
											`${item.title} SVL`
										}
									/>
								</div>
								<div className={style.text}>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default SeoVacation;
