import Image from "next/image";
import React, { FC, useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "@/../public/images/guides/montana/education-icon.webp";
import { IStrapiImage } from "@/lib/notion";

import Arrow from "../../../public/images/mainPage/arrow.svg";
import style from "../../styles/css/guides/seoEducation.module.css";

export interface ISEOEducation {
	store: {
		id: number;
		subTitle: string;
		title: string;
		educationalInstitution: {
			id: number;
			title: string;
			link: string | null;
			description: string | null;
			icon: IStrapiImage;
		}[];
	};
	placeName?: string;
	isUni?: boolean;
	isFirst?: boolean;
}

const SeoEducation = ({ store, placeName, isUni, isFirst }: ISEOEducation) => {
	const [swiper, setSwiper] = useState<any>();

	const [mobileAmount, setMobileAmount] = useState(3);

	const handleSeeAllClick = () => {
		if (mobileAmount === 3) {
			setMobileAmount(store.educationalInstitution.length);
		} else {
			setMobileAmount(3);
		}
	};

	return (
		<section>
			<div
				style={isFirst ? { marginTop: "0px" } : {}}
				className={`block-container ${style.container}`}
			>
				<div className={style.header}>
					<div className={style.title}>
						<p className={style.title}>{store.subTitle}</p>
						<h2>
							{/* {store.title.toLocaleLowerCase().includes("schools")
								? store.title
								: store.title} */}
							{placeName
								? isUni
									? `Top ${placeName} universities`
									: `Top ${placeName} schools`
								: isUni
									? "Top city universities"
									: "Top city schools"}
						</h2>
					</div>
					<div className={style.arrows}>
						<div onClick={() => swiper.slidePrev()}>
							<Image src={Arrow} alt="arrow-icon" />
						</div>
						<div onClick={() => swiper.slideNext()}>
							<Image src={Arrow} alt="arrow-icon" />
						</div>
					</div>
				</div>

				<Swiper
					slidesPerView={2.15}
					spaceBetween={35}
					className={style.swiper}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					onSwiper={(swiper) => setSwiper(swiper)}
				>
					{store.educationalInstitution.map((item, index) => (
						<SwiperSlide key={index}>
							<a
								href={item.link ? item.link : ""}
								target="_blank"
								onClick={(e) => !item.link && e.preventDefault()}
							>
								<div className={style.slide}>
									<Image
										src={item.icon.data?.attributes?.url || Icon}
										width={100}
										height={100}
										alt="Nationwide Moving Guides For Anywhere in America SVL"
									/>
									<h3>{item.title}</h3>
								</div>
							</a>
						</SwiperSlide>
					))}
				</Swiper>

				<div className={style.mobileGrid}>
					{store.educationalInstitution
						.slice(0, mobileAmount)
						.map((item, index) => (
							<div key={index} className={style.card}>
								<a
									href={item.link ? item.link : ""}
									onClick={(e) => !item.link && e.preventDefault()}
								>
									<div className={style.slide}>
										<Image
											src={item.icon.data?.attributes?.url || Icon}
											width={100}
											height={100}
											alt="Nationwide Moving Guides For Anywhere in America SVL"
										/>
										<h3>{item.title}</h3>
									</div>
								</a>
							</div>
						))}
					<button className="add blue" onClick={handleSeeAllClick}>
						{mobileAmount === 3 ? "See all" : "See less"}
					</button>
				</div>
			</div>
		</section>
	);
};

export default SeoEducation;
