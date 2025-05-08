import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import Arrow from "@/../public/images/mainPage/arrow.svg";
import PersonIcon from "@/../public/images/mainPage/first/PersonIcon_1.webp";
import PersonIcon2 from "@/../public/images/mainPage/reviews/Aavatar1.png";
import PersonIcon5 from "@/../public/images/mainPage/reviews/Avata4.png";
import PersonIcon4 from "@/../public/images/mainPage/reviews/Avatar3.png";
import PersonIcon1 from "@/../public/images/mainPage/reviews/Avatar5.png";
import PersonIcon3 from "@/../public/images/mainPage/reviews/avatar-2.webp";
import { ReviewCard } from "@/components/rewiewCard";
import styles from "@/styles/css/mainPage/new/cases.old.module.css";

import { showScore } from "../reviews/reviews";

interface ICase {
	title: string;
	content: string;
	stars: 1 | 2 | 3 | 4 | 5;
	img: StaticImageData;
	name: string;
	date: string;
}

const cases: ICase[] = [
	{
		stars: 5,
		img: PersonIcon1,
		name: "Liza Brown",
		title: "Long-distance move New York — Boston",
		content:
			"Transplanting a 2-bedroom setup from a 5th floor with no elevator accessibility is no simple feat, yet the team from Star Van Lines exhibited exceptional prowess throughout the process. Alex was particularly proficient in maintaining clear and professional communication from start to finish. Meanwhile, the hard-working crew, including Artem and Denis, executed a move without a single item sustaining damage, justifying every penny of the investment. Their exemplary service certainly earns my future recommendations.",
		date: "<span> May 24, <span>\n2023",
	},
	{
		title: "Long-distance move Colorado — California",
		content:
			"Had an good experience relocating with them. We transitioned from a 2-bedroom apartment to a 2-story house with a basement. Though moving is usually stressful, the crew was both efficient and cautious. They commenced at 8:00 and by 2:00, they had wrapped things up - this includes an hour-long drive between our old place and the new residence, despite the pouring rain! Everything arrived in pristine condition, with no damage to items or the home.  Impressed with their service and would vouch for them to everyone.",
		date: "<span> December 26, <span>\n2022",
		stars: 5,
		img: PersonIcon,
		name: "Gilan Mortey",
	},
	{
		stars: 5,
		img: PersonIcon2,
		name: "Bill Jenkins",
		title: "Long-distance move Texas — North Carolina",
		content:
			"Exceptional Service, Unbeatable Value! Don't bother searching any further - Star Van Lines is the top-notch moving service you need. Their team not only met but went above and beyond my demanding expectations. My move from Texas to North Carolina was seamless and stress-free, all thanks to their attentive and accommodating crew. They offered the most affordable pricing compared to other quotes I received. A heartfelt thanks to everyone involved! Highly appreciated and strongly recommended",
		date: "<span> December 4, <span>\n2022",
	},
	{
		stars: 5,
		img: PersonIcon3,
		name: "Anna Kearney",
		title: "Long-distance move Miami — Atlanta",
		content:
			"My experience with Star Van Lines was simply unparalleled. When tasked with a cross-country move, the team, led by Akmal and Roman, showed up promptly and demonstrated an astonishing level of efficiency. Not only were they swift, but also notably meticulous in handling our belongings, ensuring a truck pack that was nothing short of precise. The unloading process was just as smooth, with the crew patiently accommodating our requests on item placement without a hitch. Not a single obstacle arose throughout the entire transition",
		date: "<span> December 11, <span>\n2022",
	},
	{
		stars: 5,
		img: PersonIcon5,
		name: "Halley Burn",
		title: "Long-distance move L.A. — Brooklyn",
		content:
			"The team from Star Van Lines is simply unstoppable! They managed our move to Brooklyn, navigating through three different stops without pausing for a break. Every team member demonstrated exceptional diligence, ensuring our belongings were handled with utmost care and professionalism. Their accommodating nature and consistently cheerful demeanors made the entire moving experience so much more pleasant! This wasn't my first time utilizing their services, and I'm thrilled I chose them once again. Pricing is reasonable too",
		date: "<span> December 20, <span>\n2022",
	},
	{
		stars: 5,
		img: PersonIcon4,
		name: "Smith Family",
		title: "Long-distance move Kirkland — Denver",
		content:
			"Not an easy move, but everything went without a hitch. Confronted with a scorching day, a tricky 2-flight walk-up followed by an elevator ride to the 3th floor, and pre-war buildings with scarce parking – the moving experience was seamless. The team was punctual, efficient, and demonstrated utmost professionalism. The billing process was transparent and, when considering their rate card, it was exactly within my expectations and significantly less than what competitors were quoting for the same day (tip included).",
		date: "<span> November 18, <span>\n2022",
	},
];

const Cases = () => {
	const [isTextExpanded, setIsTextExpanded] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);
	const animation = { duration: 65000, easing: (t: any) => t };
	const [sliderRef] = useKeenSlider({
		loop: true,
		mode: "free",
		initial: 0,
		slides: {
			perView: "auto",
			spacing: 30,
		},
		drag: true,
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
	});

	return (
		<section>
			<div className={styles.block}>
				<div className={styles.header}>
					<div>
						<span className={styles.preTitle}>
							Star Van Lines Movers reviews
						</span>
						<h2>
							What our <span>customers</span> are saying
						</h2>
					</div>
					<div className={styles.dnonemobile}>
						<button
							onClick={() => (window.location.href = "/reviews")}
							className="add blue"
						>
							See all reviews
						</button>
					</div>
				</div>

				<div className={styles.info}>
					<div className={styles.infoBlock}>
						<div className={styles.infoBlockTitle}>240</div>

						<div className={styles.infoBlockText}>
							Reviews on <br className="dnonedesktop" /> different platforms
						</div>
					</div>

					<div className={styles.infoBlock}>
						<div className={styles.infoBlockTitle}>4,9/5</div>

						<div className={styles.infoBlockText}>
							NPS rating of our <br className="dnonedesktop" /> clients
						</div>
					</div>
				</div>

				<div className={styles.content}>
					<div
						className={`${styles.cases} ${styles.dnonemobile} keen-slider`}
						ref={sliderRef}
					>
						{cases.map((item, i) => (
							<ReviewCard
								className={`keen-slider__slide ${styles.case}`}
								date={item.date}
								name={item.name}
								text={item.content}
								img={item.img}
								stars={item.stars}
								onClick={() => (window.location.href = "/reviews")}
								key={i}
							/>
						))}
					</div>

					<div className={`${styles.cases} ${styles.textMobile}`}>
						{cases.slice(0, 1).map((item, i) => (
							<ReviewCard
								className={`keen-slider__slide ${styles.case}`}
								date={item.date}
								name={item.name}
								text={item.content}
								img={item.img}
								stars={item.stars}
								onClick={() => (window.location.href = "/reviews")}
								key={i}
							/>
						))}
					</div>
					<div className={`${styles.nextSwiper} ${styles.textMobile}`}>
						<div className={styles.textMobile}>
							<button
								onClick={() => (window.location.href = "/reviews")}
								className="add blue"
							>
								See all reviews
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cases;
