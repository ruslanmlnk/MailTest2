import Image from "next/image";
import { useState } from "react";

import Story2 from "@/../public/images/about/companyStory/companyStory2.webp";
import Story1 from "@/../public/images/about/companyStory/companyStory3.webp";
import ButtonArrow from "@/../public/images/mainPage/button-arrow.svg";
import style from "@/styles/css/about/companyStory.module.css";

import GetAQuotePopup from "../getAQuotePopup";

const CompanyStory = () => {
	const [isPopupOpened, setIsPopupOpened] = useState(false);
	return (
		<>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<section>
				<div className={`block-container ${style.container}`}>
					<div className={style.leftSide}>
						<span className={style.preTitle}>our history</span>
						<h2>
							A <span>story</span> about
							<br /> our company
						</h2>
						<p>
							STAR VAN LINES began its activities in 2016, when transportation
							services in the U.S. were just gaining popularity. We immediately
							identified for ourselves the main priorities - high quality of
							work, honesty and openness in relations, accessibility of our
							services to most customers.
						</p>
						<Image
							src={Story1}
							alt="About our company SVL"
							width={600}
							height={400}
						/>
						<div></div>
					</div>
					<div className={style.rightSide}>
						<Image src={Story2} alt="About our company SVL" />
						<p>
							To maintain a high level of quality, the company has its own
							Quality Control Service. Every day the employees of the Service
							monitor the process of moving, compliance of our employees with
							the Company's Standards. By preventing violations of the
							Standards, we minimize the risk of property damage, violations of
							deadlines and other undesirable phenomena. Thus we guarantee high
							quality of our services.
						</p>
						<div className={style.buttons}>
							<button className="main" onClick={() => setIsPopupOpened(true)}>
								Get a quote <Image src={ButtonArrow} alt="arrow-icon" />
							</button>
						</div>
						<div className={style.bg}></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CompanyStory;
