import { url } from "inspector";
import Image, { StaticImageData } from "next/image";

import GoogleIcon from "@/../public/images/mainPage/reviews/google-icon.svg";
import OpenReviewIcon from "@/../public/images/mainPage/reviews/openReview-icon.svg";
import StarIcon from "@/../public/images/mainPage/reviews/star-icon.svg";
import style from "@/styles/css/reviewCard.module.css";

import { splitTitleBySpan } from "./services/serviceHero";

export interface ReviewCardProps {
	img:
		| {
				width: number;
				height: number;
				src: string;
		  }
		| StaticImageData;
	name: string;
	text: string;
	stars: number;
	date: string;
	isActive?: boolean;
	className?: string;
	onClick?: () => void;
}

export const ReviewCard = (props: ReviewCardProps) => {
	const { img, name, text, stars, date, isActive, className, onClick } = props;

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

	return (
		<div
			className={`${style.review} ${isActive && style.opened} ${
				className || ""
			}`}
			onClick={onClick}
		>
			<div className={style.topbar}>
				<div className={style.user}>
					<div className={style.avatar}>
						<Image
							src={img.src}
							alt="google-icon"
							width={img.width}
							height={img.height}
						/>
					</div>

					<div className={style.name}>
						<p>{name}</p>
						<div className={style.stars}>{showScore(stars)}</div>
					</div>
				</div>
				<Image src={GoogleIcon} alt="google icon" />
			</div>
			<p>{trimString(text, 100)}</p>
			<div className={style.bottom}>
				<p className={style.date}>{splitTitleBySpan(date)}</p>
				<div className={style.openBlock}>
					{isActive && <p className={style.opened}>Opened</p>}
					<Image src={OpenReviewIcon} alt="open review icon" />
				</div>
			</div>
		</div>
	);
};
