import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Standart1 from "@/../public/images/about/ourStandarts/Standart1.webp";
import Standart2 from "@/../public/images/about/ourStandarts/Standart2.webp";
import Standart3 from "@/../public/images/about/ourStandarts/Standart3.webp";
import Standart4 from "@/../public/images/about/ourStandarts/Standart4.webp";
import Standart5 from "@/../public/images/about/ourStandarts/Standart5.webp";
import Arrow from "@/../public/images/mainPage/arrow.svg";
import style from "@/styles/css/about/ourStandarts.module.css";

interface IStandart {
	icon: StaticImageData;
	title: string;
	description: string;
}

const ourStandartsArray: IStandart[] = [
	{
		icon: Standart1,
		title: "Trucks",
		description:
			"We use only technically serviceable vehicles with all-metal vans, equipped inside with mechanisms for securing property. Each vehicle arrives at the customer clean.",
	},
	{
		icon: Standart2,
		title: "Specialists",
		description:
			"Disciplined, punctual movers are trained in the standards of handling all types of items transported. Each mover is medically cleared for health reasons. Coordinators closely monitor such qualities of movers as: desire to do their job well, attention to detail, careful attitude to any property. Our movers are trained to handle any type of cargo. And help with everything you need.",
	},
	{
		icon: Standart3,
		title: "Drivers",
		description:
			"Each driver of the car must perfectly navigate the maps and be able to choose the best route. In transportation, the mandatory standard is driving safety.",
	},
	{
		icon: Standart4,
		title: "Packaging materials",
		description:
			"We use only durable and proven packaging materials. In packaging, we use special fields for marking and areas for application of adhesive tape. When packing.",
	},
	{
		icon: Standart5,
		title: "Safe warehouses",
		description:
			"Each of our warehouses is completely safe - 24/7 guarded, with connected video cameras. All warehouses maintain a comfortable temperature and humidity level   .",
	},
];

const OurStandarts = () => {
	const [swiper, setSwiper] = useState<any>();

	return (
		<section>
			<div className={`block-container ${style.container}`}>
				<span className={style.preTitle}>Our Standarts</span>
				<h2>
					High requirements <br />
					for the <span>best shipments</span>
				</h2>
				<div className={style.grid}>
					{ourStandartsArray.map((item, index) => (
						<div key={index}>
							<Image src={item.icon} alt="About our company SVL" />
							<span className={style.h3}>{item.title}</span>
							<p>{item.description}</p>
						</div>
					))}
				</div>

				<div className={style.gridMobile}>
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						onSwiper={(swiper) => setSwiper(swiper)}
					>
						{ourStandartsArray.map((item, index) => (
							<SwiperSlide className={style.slide} key={index}>
								<Image src={item.icon} alt="About our company SVL" />
								<span className={style.h3}>{item.title}</span>
								<p>{item.description}</p>
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

export default OurStandarts;
