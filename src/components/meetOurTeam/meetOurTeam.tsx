"use client";

import clsx from "clsx";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import React from "react";

import Arrow from "@/../public/images/mainPage/arrow.svg";
import image1 from "@/../public/images/meetOurTeam/photo1.png";
import image2 from "@/../public/images/meetOurTeam/photo2.webp";
import image3 from "@/../public/images/meetOurTeam/photo3.webp";

import styles from "./meetOurTeam.module.scss";

// const data = [
// 	{
// 		image: image1,
// 		name: "Michael Thompson",
// 		role: "Manager",
// 		description: `With years of experience in transportation and logistics, John
//                 Carter is the driving force behind seamless and efficient
//                 deliveries. As a dedicated manager, he meticulously plans
//                 routes, optimizes schedules, and ensures that every shipment
//                 reaches its destination safely and on time. His deep
//                 understanding of the industry allows him to tackle challenges
//                 proactively, finding cost-effective and reliable solutions for
//                 our clients. His attention to detail and commitment to
//                 excellence help maintain smooth operations, ensuring customer
//                 satisfaction at every stage of the journey.`,
// 	},
// 	{
// 		name: "John Carter",
// 		image: image2,
// 		role: "Manager",
// 		description: `With years of experience in transportation and logistics, John
//                 Carter is the driving force behind seamless and efficient
//                 deliveries. As a dedicated manager, he meticulously plans
//                 routes, optimizes schedules, and ensures that every shipment
//                 reaches its destination safely and on time. His deep
//                 understanding of the industry allows him to tackle challenges
//                 proactively, finding cost-effective and reliable solutions for
//                 our clients. His attention to detail and commitment to
//                 excellence help maintain smooth operations, ensuring customer
//                 satisfaction at every stage of the journey.`,
// 	},
// 	{
// 		name: "John Carter",
// 		image: image3,
// 		role: "Manager",
// 		description: `With years of experience in transportation and logistics, John
//                 Carter is the driving force behind seamless and efficient
//                 deliveries. As a dedicated manager, he meticulously plans
//                 routes, optimizes schedules, and ensures that every shipment
//                 reaches its destination safely and on time. His deep
//                 understanding of the industry allows him to tackle challenges
//                 proactively, finding cost-effective and reliable solutions for
//                 our clients. His attention to detail and commitment to
//                 excellence help maintain smooth operations, ensuring customer
//                 satisfaction at every stage of the journey.`,
// 	},
// 	{
// 		name: "John Carter",
// 		image: image2,
// 		role: "Manager",
// 		description: `With years of experience in transportation and logistics, John
//                 Carter is the driving force behind seamless and efficient
//                 deliveries. As a dedicated manager, he meticulously plans
//                 routes, optimizes schedules, and ensures that every shipment
//                 reaches its destination safely and on time. His deep
//                 understanding of the industry allows him to tackle challenges
//                 proactively, finding cost-effective and reliable solutions for
//                 our clients. His attention to detail and commitment to
//                 excellence help maintain smooth operations, ensuring customer
//                 satisfaction at every stage of the journey.`,
// 	},
// 	{
// 		name: "John Carter",
// 		image: image3,
// 		role: "Manager",
// 		description: `With years of experience in transportation and logistics, John
//                 Carter is the driving force behind seamless and efficient
//                 deliveries. As a dedicated manager, he meticulously plans
//                 routes, optimizes schedules, and ensures that every shipment
//                 reaches its destination safely and on time. His deep
//                 understanding of the industry allows him to tackle challenges
//                 proactively, finding cost-effective and reliable solutions for
//                 our clients. His attention to detail and commitment to
//                 excellence help maintain smooth operations, ensuring customer
//                 satisfaction at every stage of the journey.`,
// 	},
// 	{
// 		name: "John Carter",
// 		image: image3,
// 		role: "Manager",
// 		description: `With years of experience in transportation and logistics, John
//                 Carter is the driving force behind seamless and efficient
//                 deliveries. As a dedicated manager, he meticulously plans
//                 routes, optimizes schedules, and ensures that every shipment
//                 reaches its destination safely and on time. His deep
//                 understanding of the industry allows him to tackle challenges
//                 proactively, finding cost-effective and reliable solutions for
//                 our clients. His attention to detail and commitment to
//                 excellence help maintain smooth operations, ensuring customer
//                 satisfaction at every stage of the journey.`,
// 	},
// ];

interface TeamItem {
	image: StaticImageData;
	name: string;
	role: string;
	description: string;
}
interface Team {
	TeamItems: TeamItem[];
	className?: string;
}

export const MeetOurTeam = ({ TeamItems, className }: Team) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 20,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
	});

	const [team, setTeam] = useState(TeamItems);

	const handleSelect = (index: number) => {
		if (index === 0) return;
		setTeam((prev) => {
			const newTeam = [...prev];
			[newTeam[0], newTeam[index]] = [newTeam[index], newTeam[0]];
			return newTeam;
		});
	};

	return (
		<section className={clsx(styles.section, className)}>
			<div className={styles.container}>
				<span className={styles.preTitle}>Meet Our Team</span>
				<h2>Meet the Experts Behind Our Success</h2>
				<div className={styles.experts}>
					<div className={clsx(styles.main, styles.desktop)}>
						<div className={styles.description}>
							<span className={styles.role}>{team[0]?.role}</span>
							<p className={styles.name}>{team[0]?.name}</p>
							<p className={styles.text}>{team[0]?.description}</p>
						</div>
						<Image className={styles.mainPhoto} src={team[0]?.image} alt="" />
					</div>

					<div className={clsx(styles.main, styles.mobile)}>
						<div className={styles.textWithPhoto}>
							<div className={styles.roleAndName}>
								<span className={styles.role}>{team[0]?.role}</span>
								<p className={styles.name}>{team[0]?.name}</p>
							</div>
							<div className={styles.photoContainer}>
								<Image
									className={styles.mainPhoto}
									src={team[0]?.image}
									alt=""
								/>
							</div>
						</div>
						<p className={styles.text}>{team[0]?.description}</p>
					</div>

					{team.length > 1 && (
						<div className={clsx(styles.others, styles.desktop)}>
							{team.slice(1).map((item, i) => (
								<div
									className={styles.card}
									key={i}
									onClick={() => handleSelect(i + 1)}
								>
									<Image
										className={styles.othersPhoto}
										src={item.image}
										alt=""
									/>
									<p>{item.name}</p>
								</div>
							))}
						</div>
					)}
					{team.length > 1 && (
						<div className={styles.mobile}>
							<div
								className={clsx(styles.others, "keen-slider")}
								ref={sliderRef}
								style={{ position: "relative", overflow: "visible" }}
							>
								{team.slice(1).map((item, i) => (
									<div
										className={clsx("keen-slider__slide", styles.card)}
										key={i}
										onClick={() => handleSelect(i + 1)}
									>
										<Image
											className={styles.othersPhoto}
											src={item.image}
											alt=""
										/>
										<p>{item.name}</p>
									</div>
								))}
							</div>
							<div className={`${styles.nextSwiper}`}>
								<div className={styles.buttons}>
									<div
										style={{ cursor: "pointer" }}
										onClick={(e) => {
											e.stopPropagation();
											if (instanceRef.current) {
												instanceRef.current.prev();
											}
										}}
									>
										<Image src={Arrow} alt="prev" className={styles.prev} />
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
										<Image src={Arrow} alt="next" className={styles.next} />
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};
