import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import style from "@/styles/css/services/whyWeAre.module.css";

import BgImage from "../../../public/images/mainPage/whyWeAre/bg-image.svg";

export interface IWhyWeAre {
	points: {
		icon: StaticImageData;
		text: string;
	}[];
}

const WhyWeAre: FC<{ store: IWhyWeAre }> = ({ store }) => {
	return (
		<section>
			<div className={`block-container ${style.container}`}>
				<div className={style.text}>
					<span className="preTitle">All inclusive</span>
					<h2>
						What is included <br /> in the price
					</h2>
					<div className={style.points}>
						{store.points.map((item, index) => (
							<div key={index}>
								<Image src={item.icon} alt="" />
								<p>{item.text}</p>
							</div>
						))}
					</div>
					<div className={style.section_background} />
				</div>
				<div className={style.video}>
					<Image src={BgImage} alt="" />
				</div>
			</div>
		</section>
	);
};

export default WhyWeAre;
