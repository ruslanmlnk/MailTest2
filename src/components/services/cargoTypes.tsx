import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import BlueArrow from "../../../public/images/mainPage/button-arrow-blue.svg";
import style from "../../styles/css/services/cargoTypes.module.css";

export interface ICargoTypes {
	title: string;
	types: {
		icon: StaticImageData;
		title: string;
		description: string;
	}[];
}
export interface ICargoType {
	typelink: {
		icon: StaticImageData | string;
		title: string;
		description: string;
	}[];
}

const CargoTypes: FC<{ store: ICargoTypes; item: ICargoType }> = ({
	store,
	item,
}) => {
	return (
		<section>
			<div className={`block-container ${style.container}`}>
				<div className={style.title}>
					<span className={style.preTitle}>Types of cargo</span>
					<h2>{store.title}</h2>
				</div>
				<div className={style.grid}>
					{store.types.map((item, index) => (
						<div key={index}>
							<Image placeholder="blur" src={item.icon} alt="" />
							<span className={style.goodTitle}>{item.title}</span>
							<p>{item.description}</p>
						</div>
					))}
					{item.typelink.map((item, index) => (
						<div key={index}>
							<Image src={item.icon} alt="" width={187.5} height={135} />
							<span className={style.goodTitle}>{item.title}</span>
							<Link href={item.description}>
								Read more{" "}
								<Image src={BlueArrow} alt="" className={style.bluearrow} />
							</Link>
						</div>
					))}
				</div>
				<div className={style.mobile}>
					<Swiper
						spaceBetween={35}
						slidesPerView={1}
						pagination={true}
						modules={[Pagination]}
					>
						{store.types.map((item, index) => (
							<SwiperSlide key={index}>
								<Image src={item.icon} alt="" />
								<span className={style.goodTitle}>{item.title}</span>
								<p>{item.description}</p>
							</SwiperSlide>
						))}
						{item.typelink.map((item, index) => (
							<SwiperSlide key={index}>
								<Image src={item.icon} alt="" width={150} height={108} />
								<span className={style.goodTitle}>{item.title}</span>
								<Link href={item.description}>
									Read more{" "}
									<Image src={BlueArrow} alt="" className={style.bluearrow} />
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default CargoTypes;
