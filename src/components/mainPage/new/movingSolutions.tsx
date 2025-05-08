import parse from "html-react-parser";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

import Arrow from "@/../public/images/mainPage/arrow.svg";
import Decor from "@/../public/images/mainPage/careful/Decor.svg";
import { parseMarkdown } from "@/components/guides/seoCost";
import styles from "@/styles/css/mainPage/new/movingSolutions.module.css";

const MovingSolutions = () => {
	interface ICase {
		title: string;
		content: string;
	}

	const [isTextExpanded, setIsTextExpanded] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);
	const animation = { duration: 65000, easing: (t: any) => t };
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 1.8,
			spacing: 20,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
	});

	const [sliderRefMobile, instanceRefMobile] = useKeenSlider({
		slides: {
			perView: 1,
			spacing: 20,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
	});

	const cases: ICase[] = [
		{
			title: "Car Shipping",
			content:
				"Do you need to ship your car across a country? We provide best car shipping services. Also shipping boats, electric vehicles, motorcycles. Car transportation service is easy and affordable with Star Van Lines.",
		},
		{
			title: "Moving Labor",
			content:
				"Need muscle, not a moving truck? We load/unload your PODS or U-Haul! Packing supplies available to keep your belongings safe. Save money without sacrificing service. Strong backs, guaranteed service.",
		},
		{
			title: "Declutter your home",
			content:
				"Donate gently used items, recycle what you can't reuse, and toss expired or broken belongings. Utilize storage bins for seasonal items and create designated drop zones to prevent clutter creep. Declutter by category (clothes, books, electronics) for a more manageable process. Sell unwanted items online and breathe easy in an organized home. Decluttering services available! It's time to transform your space!",
		},
	];

	return (
		<section>
			<div className={`block-container ${styles.block}`}>
				<div className={styles.header}>
					<div>
						<p className={styles.title}>Additional moving solutions</p>
						<h2 className={styles.dnonemobile}>
							Seamless Relocations <Image src={Decor} alt="prev" />
							<br />
							with Trusted Movers
						</h2>
						<h2 className={styles.textMobile}>
							Seamless <br />
							Relocations with{" "}
							<Image className={styles.DekorMobile} src={Decor} alt="prev" />
							<br />
							Trusted Movers
						</h2>
					</div>
					<div className={`${styles.buttons} ${styles.dnonemobile}`}>
						<div
							onClick={(e) => {
								e.stopPropagation();
								if (instanceRef.current) {
									instanceRef.current.prev();
								}
							}}
						>
							<Image src={Arrow} alt="prev" />
						</div>
						<div
							onClick={(e) => {
								e.stopPropagation();
								if (instanceRef.current) {
									instanceRef.current.next();
								}
							}}
						>
							<Image src={Arrow} alt="next" />
						</div>
					</div>
				</div>
				<div className={styles.content}>
					<div
						className={`${styles.cases} ${styles.dnonemobile} keen-slider`}
						ref={sliderRef}
					>
						{cases.map((item, i) => (
							<div className={`keen-slider__slide ${styles.case}`} key={i}>
								<div className={styles.caseTitle}>
									<div className={styles.casesTitle}>
										<span className={styles.itemTitle}>{item.title}</span>
									</div>
									{/* <p>{item.content}</p> */}
									{parse(parseMarkdown(item.content) || "")}
								</div>
							</div>
						))}
					</div>
					<div
						className={`${styles.cases} ${styles.textMobile} keen-slider`}
						ref={sliderRefMobile}
						style={{ position: "relative", overflow: "visible" }}
					>
						{cases.map((item, i) => (
							<div
								className={`keen-slider__slide ${styles.case} ${
									isTextExpanded ? styles.expanded : ""
								}`}
								key={i}
							>
								<div className={styles.caseContent}>
									<div>
										<span className={styles.caseTitle}>{item.title}</span>
										{/* <p className={styles.content}>{item.content}</p> */}
										{parse(parseMarkdown(item.content) || "")}
									</div>
								</div>
							</div>
						))}
					</div>
					<div className={`${styles.nextSwiper} ${styles.textMobile}`}>
						<div className={styles.buttons}>
							<div style={{ cursor: "pointer" }}>
								<Image
									src={Arrow}
									onClick={(e) => {
										e.stopPropagation();
										if (instanceRefMobile.current) {
											instanceRefMobile.current.prev();
										}
									}}
									alt="prev"
								/>
							</div>
							<div style={{ cursor: "pointer" }}>
								<Image
									src={Arrow}
									onClick={(e) => {
										e.stopPropagation();
										if (instanceRefMobile.current) {
											instanceRefMobile.current.next();
										}
									}}
									alt="next"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MovingSolutions;
