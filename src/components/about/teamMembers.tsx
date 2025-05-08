import Image from "next/image";
import React from "react";

import TeamMember from "@/../public/images/about/teamMembers/johnCarter.jpg";
import TeamMemberFull from "@/../public/images/about/teamMembers/johnCarterFull.jpg";
import QuoteIcon from "@/../public/images/about/teamMembers/quoteIcon.svg";
import InstagramIcon from "@/../public/images/blog/article/instagram-icon.svg";
import { ReadMore } from "@/lib/ReadMore";
import styles from "@/styles/scss/about/teamMembers.module.scss";

import { AnimatedNumber } from "../animatedNumber";
import { splitNum } from "../guides/seoStats";

export interface EmployeeStatCardProps {
	title: string;
	content: string;
	stat: string;
}

function EmployeeStatCard({ title, content, stat }: EmployeeStatCardProps) {
	return (
		<div className={styles.card}>
			<span className={styles.h3}>
				<b>{splitNum(stat).pref}</b>
				<AnimatedNumber duration={1500} value={splitNum(stat).number} />
				{splitNum(stat).post}
			</span>
			<span>{title}</span>
			<p>{content}</p>
		</div>
	);
}

function TeamMembers() {
	return (
		<section className={styles.section}>
			<div className={`block-container ${styles.container}`}>
				<div className={styles.employee}>
					<div className={styles.image}>
						<Image
							src={TeamMemberFull}
							fill
							objectFit="cover"
							alt="About our company SVL"
						/>
					</div>
					<div className={styles.information}>
						<span className={styles.preTitle}>CUSTOMER SUPPORT</span>
						<h2>Daria Golovaneva</h2>
						<p>
							Daria Golovaneva is a highly qualified customer support
							specialist. Many years of experience in this field have brought up
							communication skills, professionalism, and the ability to find a
							solution in any situation. She can effectively deal with
							unexpected situations in the moving process. Her dedication to her
							customers and commitment to excellence make Daria an indispensable
							specialist in our industry. Daria will make sure that your move
							goes smoothly, you are in good hands!
						</p>
						<div className={styles.socials}>
							<Image
								src={InstagramIcon}
								alt="instagram-icon"
								onClick={() =>
									window.open(
										"https://www.instagram.com/starvanlinesllc/?igshid=YmMyMTA2M2Y=",
									)
								}
							/>
						</div>
					</div>
				</div>

				<div className={styles.employeeMobile}>
					<div className={styles.title}>
						<div className={styles.image}>
							<Image
								src={TeamMemberFull}
								fill
								objectFit="cover"
								alt="About our company SVL"
							/>
						</div>
						<div>
							<span className={styles.preTitle}>CUSTOMER SUPPORT</span>
							<h2>Daria Golovaneva</h2>
						</div>
					</div>
					<ReadMore limit={100} color="#436AE5">
						Daria Golovaneva is a highly qualified customer support specialist.
						Many years of experience in this field have brought up communication
						skills, professionalism, and the ability to find a solution in any
						situation. She can effectively deal with unexpected situations in
						the moving process. Her dedication to her customers and commitment
						to excellence make Daria an indispensable specialist in our
						industry. Daria will make sure that your move goes smoothly, you are
						in good hands!
					</ReadMore>
				</div>

				<div className={styles.employeeQuote}>
					<div className={styles.text}>
						<div className={styles.innerText}>
							<div className={styles.background} />

							<h2>
								What does Daria think about <br /> Star Vanlines?
							</h2>

							<div className={styles.quote}>
								<Image src={QuoteIcon} alt="qoute-icon" />
								<p>
									My company is a real team of professionals! I am proud to work
									here. We have a high standard of customer service and we
									always strive to meet our customers' needs. Our team is
									close-knit and I appreciate their hard work and dedication. It
									is a pleasure to work here and I am confident that our company
									will continue to attract and retain customers due to the
									outstanding work of all employees.
								</p>
							</div>
						</div>
					</div>
					<div className={styles.image}>
						<Image
							src={TeamMember}
							fill
							objectFit="cover"
							alt="About our company SVL"
						/>
					</div>
				</div>

				<div className={styles.stats}>
					<EmployeeStatCard
						title="Years working in support"
						content="Daria has been working in the field of moving more than 5 years and she can be called a professional in this area. She has a lot of experience, hundreds of organized moves and satisfied customers!"
						stat="+5"
					/>
					<EmployeeStatCard
						title="Client satisfaction"
						content="Daria, the exceptional employee at customer support, has extensive experience and a deep understanding of her role. She excels at resolving queries and is dedicated to finding the perfect solution for every client."
						stat="100%"
					/>
					<EmployeeStatCard
						title="More than 2000 clients served"
						content="Daria is the main employee of the customer support service: her extensive work experience allows her to sort out any of your questions and find a solution for you."
						stat="+2K"
					/>
				</div>
			</div>
		</section>
	);
}

export default TeamMembers;
