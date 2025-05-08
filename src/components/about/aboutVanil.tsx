import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { useMobile } from "@/lib/useMobile";
import { AboutVanils } from "@/store/about/aboutVanil";

import ButtonArrow from "../../../public/images/mainPage/button-arrow-blue.svg";
import style from "../../styles/css/about/aboutVanil.module.css";
import { splitTitleBySpan } from "../services/serviceHero";

const AboutVanil: FC<{ store: AboutVanils }> = ({ store }) => {
	const [showAdditionalText, setShowAdditionalText] = useState(false);

	const isMobile = useMobile();

	const handleSeeAllClick = () => {
		setShowAdditionalText(!showAdditionalText);
	};

	return (
		<section>
			<div className={`block-container ${style.container}`}>
				<div className={style.image_container}>
					<Image
						className={style.image}
						src={store.image}
						alt="About our company SVL"
					/>
				</div>
				<div className={style.text}>
					<span className={style.preTitle}>{store.label}</span>
					<h2>{splitTitleBySpan(store.title)}</h2>
					<div className={style.description}>
						{isMobile && <p>{store.text1}</p>}
						{(isMobile && showAdditionalText) || !isMobile ? (
							<>
								{!isMobile && <p>{store.text1}</p>}
								{!isMobile && <p>{store.text2}</p>}
								{!isMobile && <p>{store.text3}</p>}
								{isMobile && (
									<>
										<p>{store.text2}</p>
										<p>{store.text3}</p>
									</>
								)}
							</>
						) : null}
						{isMobile ? (
							<button
								className={`main ${style.button}`}
								onClick={handleSeeAllClick}
							>
								{showAdditionalText ? "Read Less" : "Read More"}
								<Image src={ButtonArrow} alt="arrow-icon" />
							</button>
						) : null}
					</div>
					<div className={style.section_background} />
				</div>
			</div>
		</section>
	);
};

export default AboutVanil;
