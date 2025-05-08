import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Arrow from "@/../public/images/mainPage/arrow.svg";
import { IMaterials } from "@/store/services/packagingStore";

import style from "../../styles/css/guides/seoWhodBeSuited.module.css";

const PackagingMaterials: FC<{
	store: IMaterials;
	isServicePage?: boolean;
}> = ({ store, isServicePage }) => {
	const [swiper, setSwiper] = React.useState<any>();

	return (
		<section>
			<div
				className={`block-container ${style.container} ${
					store.title.includes("packaging") && style.packaging
				} ${isServicePage ? style.service : ""}`}
			>
				<span className="preTitle">{store.label}</span>
				<h2>{store.title}</h2>

				<div className={style.grid}>
					{store.points.map((item, index) => (
						<div className={style.card} key={index}>
							<Image src={item.icon} alt="" />
							<span className={style.itemTitle}>{item.title}</span>
							<p>{item.description}</p>
						</div>
					))}
				</div>

				<div className={style.mobileGrid}>
					<Swiper
						spaceBetween={35}
						slidesPerView={1}
						onSwiper={(swiper) => setSwiper(swiper)}
						className={style.swiper}
					>
						{store.points.map((item, index) => (
							<SwiperSlide key={index} className={style.slide}>
								<div className={style.card} key={index}>
									<Image src={item.icon} alt="" />
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</SwiperSlide>
						))}

						<div className={style.buttons}>
							<div onClick={() => swiper.slidePrev()}>
								<Image src={Arrow} alt="prev" />
							</div>
							<div onClick={() => swiper.slideNext()}>
								<Image src={Arrow} alt="next" />
							</div>
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default PackagingMaterials;
