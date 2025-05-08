import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Value1 from "@/../public/images/about/ourValues/value1.webp";
import Value2 from "@/../public/images/about/ourValues/value2.webp";
import Value3 from "@/../public/images/about/ourValues/value3.webp";
import Value4 from "@/../public/images/about/ourValues/value4.webp";
import Value5 from "@/../public/images/about/ourValues/value5.webp";
import Value6 from "@/../public/images/about/ourValues/value6.webp";
import Arrow from "@/../public/images/mainPage/arrow.svg";
import style from "@/styles/css/ourValues.module.css";

import { splitTitleBySpan } from "./services/serviceHero";

export interface IValues {
	icon: StaticImageData;
	title: string;
	description: string;
}

export interface IOurValues {
	title: string;
	values: IValues[];
}

export const valuesArray: IOurValues = {
	title: "The values that <span> drive\n <span> everything we do",
	values: [
		{
			icon: Value1,
			title: "Quality control",
			description:
				"Personally manage all the processes of transportation and storage of goods. We write guarantees and terms of implementation in the contract service provision",
		},
		{
			icon: Value2,
			title: "Professional team",
			description:
				"All our specialists have been specially trained and have certificates confirming their qualifications to provide high-quality moving services",
		},
		{
			icon: Value3,
			title: "Transparent terms",
			description:
				"We document the entire list of works with a detailed description of all stages of implementation and availability of cargo",
		},
		{
			icon: Value4,
			title: "Attention to details",
			description:
				"Take into account your individual requirements for transportation services, so that the goods were transported without a single defect",
		},
		{
			icon: Value5,
			title: "Safe warehouses",
			description:
				"Ensure full warehouse security and quality standards of space to ensure that your shipments are not damaged during storage",
		},
		{
			icon: Value6,
			title: "Punctuality",
			description:
				"Flawless transportation, tailored to your punctuality needs. Your goods delivered on time, without a single defect.",
		},
	],
};

const OurValues: FC<{ store: IOurValues }> = ({ store }) => {
	const [swiper, setSwiper] = useState<any>();
	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.header}>
					<div className={style.title}>
						<span className={style.preTitle}>benefits</span>
						<h2>{splitTitleBySpan(store.title)}</h2>
					</div>
				</div>
				<div className={style.content}>
					{store.values.map((item) => (
						<div className={style.slide}>
							<div className={style.image}>
								<Image src={item.icon} alt="About our company SVL" />
							</div>
							<div className={style.text}>
								<span className={style.cardTitle}>{item.title}</span>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
				<div className={style.contentMobile}>
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						className={style.swiper}
						onSwiper={(swiper) => setSwiper(swiper)}
					>
						{store.values.map((item, index) => (
							<SwiperSlide key={index}>
								<div className={style.slide}>
									<div className={style.image}>
										<Image
											placeholder="blur"
											src={item.icon}
											alt="About our company SVL"
										/>
									</div>
									<div className={style.text}>
										<span className={style.cardTitle}>{item.title}</span>
										<p>{item.description}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className={style.buttons}>
						<div onClick={() => swiper.slidePrev()}>
							<Image src={Arrow} alt="prev" />
						</div>
						<div onClick={() => swiper.slideNext()}>
							<Image src={Arrow} alt="next" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurValues;
