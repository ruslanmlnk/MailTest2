import Image from "next/image";
import { useState } from "react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import GoogleIcon from "@/../public/images/mainPage/reviews/google-icon.svg";
// assets
import OpenReviewIcon from "@/../public/images/mainPage/reviews/openReview-icon.svg";
import StarIcon from "@/../public/images/mainPage/reviews/star-icon.svg";
import { reviewsStore as Reviews } from "@/store/reviewsStore";
import style from "@/styles/css/allReviews.module.css";

import { Modal } from "./Modal/Modal";
import { ReviewCard } from "./rewiewCard";
import { splitTitleBySpan } from "./services/serviceHero";

interface iReview {
	img: {
		src: string;
		width: number;
		height: number;
	};
	name: string;
	text: string;
	date: string;
	route: string;
	stars: number;
	video: {
		url: string;
		isVertical: boolean;
	} | null;
	id: number;
}

export interface IAllReviewsProps {
	reviews: iReview[];
}

const splitRoute = (str: string) => {
	const splitTitle = str.split("\n");
	return (
		<>
			<span>{splitTitle[0]}</span>
			<br />
			{splitTitle[1]}
		</>
	);
};
const splitDate = (str: string) => {
	const splitTitle = str.split(",");
	return (
		<>
			<span>{splitTitle[0] + ","}</span>
			<br />
			{splitTitle[1]}
		</>
	);
};

const AllReviews = ({ reviews }: IAllReviewsProps) => {
	const [openedReview, setOpenedReview] = useState<number>(1);

	const showScore = (score: number) => {
		let stars: JSX.Element[] = [];

		for (let i = 0; i < score; i++) {
			stars.push(<Image src={StarIcon} alt={score.toString()} key={i + 1} />);
		}

		return stars;
	};

	let trimString = function (string: string, length: number) {
		return string.length > length
			? string.substring(0, length) + "..."
			: string;
	};

	function isVideoAvailable(videoUrl: any) {
		return videoUrl && typeof videoUrl === "string";
	}

	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.header}>
					<h1>Star Van Lines Movers reviews</h1>
					<div>
						<div className={style.stats}>
							<div className={style.subStats}>
								<div>
									<span>240+</span>
									<p>Reviews on major platforms</p>
								</div>
								<div>
									<span>4,9/5</span>
									<p>NPS rating of our clients</p>
								</div>
							</div>

							<Modal />
						</div>
					</div>
				</div>
				<div className={style.reviews}>
					<div>
						<div className={style.grid}>
							{reviews
								? reviews.map((r, i) => (
										<ReviewCard
											key={i}
											{...r}
											img={r.img ?? ""}
											onClick={() => setOpenedReview(r.id)}
											isActive={r.id === openedReview}
										/>
								  ))
								: null}
						</div>
					</div>

					<div className={style.preview}>
						<div>
							<div className={style.avatar}>
								{reviews[openedReview - 1].video ? (
									<video
										preload="metadata"
										src={reviews[openedReview - 1].video?.url + "#t=0.01"}
										controls
										playsInline
										width={
											reviews[openedReview - 1].video?.isVertical
												? "40%"
												: "100%"
										}
									/>
								) : (
									<Image
										src={reviews[openedReview - 1].img?.src ?? ""}
										alt="google-icon"
										height={reviews[openedReview - 1].img.height}
										width={reviews[openedReview - 1].img.width}
									/>
								)}
							</div>
							<div className={style.header}>
								<p className={style.name}>{reviews[openedReview - 1].name}</p>
								<Image src={GoogleIcon} alt="google-icon" />
							</div>
							<div className={style.stars}>
								{showScore(reviews[openedReview - 1].stars)}
							</div>
							<p className={style.text}>{reviews[openedReview - 1].text}</p>
						</div>
						<div className={style.bottom}>
							<p className={style.date}>
								{/* {splitTitleBySpan(Reviews[openedReview - 1].date)} */}
								{splitDate(reviews[openedReview - 1].date)}
							</p>
							<p className={style.route}>
								{/* {splitTitleBySpan(Reviews[openedReview - 1].route)} */}
								{splitRoute(reviews[openedReview - 1].route)}
							</p>
						</div>
					</div>
				</div>
				<div className={style.reviewsMobile}>
					<div className={style.review}>
						<div>
							<div className={style.avatar}>
								{reviews[openedReview - 1].video?.url ? (
									<video
										preload="metadata"
										src={reviews[openedReview - 1].video?.url + "#t=0.01"}
										controls
										playsInline
										width={
											reviews[openedReview - 1].video?.isVertical
												? "40%"
												: "100%"
										}
										// height={Reviews[openedReview - 1].height}
									/>
								) : (
									<Image
										src={reviews[openedReview - 1].img.src}
										height={reviews[openedReview - 1].img.height}
										width={reviews[openedReview - 1].img.width}
										alt="google-icon"
									/>
								)}
							</div>
							<div className={style.header}>
								<p className={style.name}>{reviews[openedReview - 1].name}</p>
								<Image src={GoogleIcon} alt="google-icon" />
							</div>
							<div className={style.stars}>
								{showScore(reviews[openedReview - 1].stars)}
							</div>
							<p className={style.text}>{reviews[openedReview - 1].text}</p>
						</div>
						<div className={style.bottom}>
							<p className={style.date}>
								{splitTitleBySpan(reviews[openedReview - 1].date)}
							</p>
							<p className={style.route}>
								{splitTitleBySpan(reviews[openedReview - 1].route)}
							</p>
						</div>
					</div>
					<Swiper
						slidesPerView={1.3}
						spaceBetween={20}
						pagination={{
							bulletClass: `swiper-pagination-bullet ${style.paginationBullet}`,
						}}
						modules={[Pagination]}
						className={style.swiper}
					>
						{reviews.map((review, index) => (
							<SwiperSlide key={index}>
								<div
									className={`${style.review} ${
										openedReview == review.id && style.opened
									}`}
									onClick={() => setOpenedReview(review.id)}
								>
									<div className={style.topbar}>
										<div className={style.user}>
											<div className={style.avatar}>
												<Image
													src={review.img.src}
													alt="google-icon"
													width={review.img.width}
													height={review.img.height}
												/>
											</div>

											<div className={style.name}>
												<p>{review.name}</p>
												<div className={style.stars}>
													{showScore(review.stars)}
												</div>
											</div>
										</div>
										<Image src={GoogleIcon} alt="google-icon" />
									</div>
									<p>{trimString(review.text, 100)}</p>
									<div className={style.bottom}>
										<p className={style.date}>
											{splitTitleBySpan(review.date)}
										</p>
										<div className={style.openBlock}>
											{openedReview == review.id && (
												<p className={style.opened}>Open</p>
											)}
											<Image src={OpenReviewIcon} alt="open-icon" />
										</div>
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

export default AllReviews;
