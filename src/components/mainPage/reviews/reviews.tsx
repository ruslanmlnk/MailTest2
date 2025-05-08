import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import GoogleIcon from "@/../public/images/mainPage/reviews/google-icon.svg";
import { splitTitleBySpan } from "@/components/services/serviceHero";
import { reviewsStore } from "@/store/reviewsStore";
import style from "@/styles/css/mainPage/reviews.module.css";

// assets
import OpenReviewIcon from "../../../../public/images/mainPage/reviews/openReview-icon.svg";
import StarIcon from "../../../../public/images/mainPage/reviews/star-icon.svg";

interface IReviews {
	id: number;
	img: StaticImageData;
	name: string;
	stars: 1 | 2 | 3 | 4 | 5;
	text: string;
	date: Date;
	route: string;
	video: string;
	width: string;
	height: string;
}

export const showScore = (score: number) => {
	let stars: JSX.Element[] = [];

	for (let i = 0; i < score; i++) {
		stars.push(<Image src={StarIcon} alt={score.toString()} key={i + 1} />);
	}

	return stars;
};

const Reviews = () => {
	const Reviews = reviewsStore.slice(0, 6);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [videoLoaded, setVideoLoaded] = useState(false);
	const videoBlockRef = useRef<HTMLDivElement>(null);

	const [openedReview, setOpenedReview] = useState<number>(1);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "400px",
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				setVideoLoaded(true);
			}
		}, options);

		if (videoBlockRef.current) {
			observer.observe(videoBlockRef.current);
		}

		return () => {
			if (videoBlockRef.current) {
				observer.unobserve(videoBlockRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.currentTime = 0.01;
			videoRef.current.muted = true;
			videoRef.current.onplay = () => {
				if (videoRef.current?.currentTime.toFixed(2) == "0.01") {
					videoRef.current.pause();
					setTimeout(() => {
						videoRef.current!.currentTime = 0;
						videoRef.current?.play();
					}, 10);
				}
			};
		}
	}, [openedReview]);

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
					<span className={style.title}>Star Van Lines Movers reviews</span>
					<h2 className={style.subTitle}>
						<span>We value</span> our reputation
					</h2>
					<div>
						<div className={style.stats}>
							<div>
								<span>240+</span>
								<p>Reviews on major platforms</p>
							</div>
							<div>
								<span>4,9/5</span>
								<p>NPS rating of our clients</p>
							</div>
						</div>

						<button
							onClick={() => (window.location.href = "/reviews")}
							className="add blue"
						>
							See all reviews
						</button>
					</div>
				</div>
				<div className={style.reviews}>
					{Reviews.map((review, index) => (
						<div
							key={index}
							className={`${style.review} ${
								openedReview == review.id && style.opened
							}`}
							onClick={() => setOpenedReview(review.id)}
						>
							<div className={style.topbar}>
								<div className={style.user}>
									<div className={style.avatar}>
										<Image src={review.img} alt="review avatar image" />
									</div>

									<div className={style.name}>
										<p>{review.name}</p>
										<div className={style.stars}>{showScore(review.stars)}</div>
									</div>
								</div>
								<Image src={GoogleIcon} alt="google icon" />
							</div>
							<p>{trimString(review.text, 100)}</p>
							<div className={style.bottom}>
								<p className={style.date}>{splitTitleBySpan(review.date)}</p>
								<div className={style.openBlock}>
									{openedReview == review.id && (
										<p className={style.opened}>Opened</p>
									)}
									<Image src={OpenReviewIcon} alt="open review icon" />
								</div>
							</div>
						</div>
					))}

					<div ref={videoBlockRef} className={style.review}>
						<div>
							{videoLoaded ? (
								<div className={style.avatar}>
									{isVideoAvailable(Reviews[openedReview - 1].video) ? (
										<video
											preload="metadata"
											src={Reviews[openedReview - 1].video + "#t=0.01"}
											controls
											playsInline
											width={Reviews[openedReview - 1].width}
											height={Reviews[openedReview - 1].height}
											ref={videoRef}
										/>
									) : (
										<Image src={Reviews[openedReview - 1].img} alt="#" />
									)}
								</div>
							) : null}
							<div className={style.header}>
								<p className={style.name}>{Reviews[openedReview - 1].name}</p>
								<Image src={GoogleIcon} alt="google icon" />
							</div>
							<div className={style.stars}>
								{showScore(Reviews[openedReview - 1].stars)}
							</div>
							<p className={style.text}>{Reviews[openedReview - 1].text}</p>
							<div className={style.bottom}>
								<p className={style.date}>
									{splitTitleBySpan(Reviews[openedReview - 1].date)}
								</p>
								<p className={style.route}>
									{splitTitleBySpan(Reviews[openedReview - 1].route)}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={style.reviewsMobile}>
					<Swiper slidesPerView={1} spaceBetween={20} className={style.swiper}>
						{Reviews.map((review, index) => (
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
												<Image src={review.img} alt="review image" />
											</div>

											<div className={style.name}>
												<p>{review.name}</p>
												<div className={style.stars}>
													{showScore(review.stars)}
												</div>
											</div>
										</div>
										<Image src={GoogleIcon} alt="google icon" />
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
											<Image src={OpenReviewIcon} alt="open review icon" />
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<button
						onClick={() => (window.location.href = "/reviews")}
						className="add blue"
					>
						See all reviews
					</button>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
