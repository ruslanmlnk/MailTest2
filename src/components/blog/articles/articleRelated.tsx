import clsx from "clsx";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { FC } from "react";
import { useState } from "react";
import slugify from "slugify";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

import Arrow from "@/../public/images/mainPage/arrow.svg";
import { parseNotionDate } from "@/lib/notion";
import { IArticle } from "@/store/blogStore";
import style from "@/styles/css/blog/articles/articleRelated.module.css";

import img from "../../../../public/images/404.webp";

interface IArticleRelated {
	articles: IArticle[];
}

const ArticleRelated: FC<IArticleRelated> = ({ articles }) => {
	const [swiper, setSwiper] = useState<any>();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 1,
			spacing: 20,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
	});

	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.header}>
					<div className={style.title}>
						<h2>Related articles</h2>
					</div>
					<div className={style.buttons}>
						<div onClick={() => swiper.slidePrev()}>
							<Image src={Arrow} alt="prev" />
						</div>
						<div onClick={() => swiper.slideNext()}>
							<Image src={Arrow} alt="next" />
						</div>
					</div>
				</div>
				<div className={style.content}>
					<div className={style.swiper_wrapper}>
						<Swiper
							slidesPerView={3}
							spaceBetween={35}
							initialSlide={2}
							className={style.swiper}
							onSwiper={(swiper) => setSwiper(swiper)}
							modules={[Autoplay]}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
							}}
						>
							{articles.map((item, index) => (
								<SwiperSlide key={index}>
									<a
										href={
											item.needSlugify
												? `/locations/${item.slug}`
												: `/blog/${slugify(item.slug)}`
										}
									>
										<div className={style.slide}>
											<div className={style.image}>
												<Image
													fill
													sizes="33vw"
													src={
														item.coverImage.data
															? item.coverImage.data.attributes.url
															: img
													}
													alt="article image SVL"
												/>
											</div>
											<div className={style.topBar}>
												<div className={style.tag}>
													<p>{item.tag}</p>
												</div>
												<p>{parseNotionDate(item.date)}</p>
											</div>
											<p className={style.title}>{item.title}</p>
										</div>
									</a>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className={style.mobile}>
						<div
							className={clsx(style.relatedMobile, "keen-slider")}
							ref={sliderRef}
							style={{ position: "relative", overflow: "visible" }}
						>
							{articles.slice(1).map((item, i) => (
								// <div className={clsx("keen-slider__slide", style.card)} key={i}>
								<a
									key={i}
									href={
										item.needSlugify
											? `/locations/${item.slug}`
											: `/blog/${slugify(item.slug)}`
									}
								>
									<div className={clsx("keen-slider__slide", style.slide)}>
										<div className={style.image}>
											<Image
												fill
												sizes="33vw"
												src={
													item.coverImage.data
														? item.coverImage.data.attributes.url
														: img
												}
												alt="article image SVL"
											/>
										</div>
										<div className={style.topBar}>
											<div className={style.tag}>
												<p>{item.tag}</p>
											</div>
											<p>{parseNotionDate(item.date)}</p>
										</div>
										<p className={style.title}>{item.title}</p>
									</div>
								</a>
							))}
						</div>
						<div className={`${style.nextSwiper}`}>
							<div className={style.buttons}>
								<div
									style={{ cursor: "pointer" }}
									onClick={(e) => {
										e.stopPropagation();
										if (instanceRef.current) {
											instanceRef.current.prev();
										}
									}}
								>
									<Image src={Arrow} alt="prev" className={style.prev} />
								</div>
								<div
									style={{ cursor: "pointer" }}
									onClick={(e) => {
										e.stopPropagation();
										if (instanceRef.current) {
											instanceRef.current.next();
										}
									}}
								>
									<Image src={Arrow} alt="next" className={style.next} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ArticleRelated;
