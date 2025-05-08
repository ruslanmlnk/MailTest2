import Image from "next/image";
import React, { FC } from "react";

import { IStrapiImage } from "@/lib/notion";
import { shimmer, toBase64 } from "@/lib/notion";

import Arrow from "../../../public/images/mainPage/whyWeAre/bg-image.svg";
import Tick from "../../../public/images/tick-icon.svg";
import style from "../../styles/css/guides/seoTopCities.module.css";

export interface ISEOTopCities {
	id: number;
	image: IStrapiImage;
	title: string;
	textList: {
		textListItem: string;
	}[];
}

const SeoTopCities: FC<{
	store: ISEOTopCities;
	subtitle?: string;
	isFirst?: boolean;
}> = ({ store, subtitle, isFirst }) => {
	return (
		<section className={style.section}>
			<div
				style={isFirst ? { marginTop: "0px" } : {}}
				className={`block-container ${style.container}`}
			>
				<div className={style.images}>
					<Image
						src={store.image.data.attributes.url}
						fill
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(370, 578),
						)}`}
						alt={
							store.image.data.attributes.alternativeText ||
							`${store.title} SVL`
						}
					/>
					<Image src={Arrow} alt="arrow right icon" />
				</div>
				<div className={style.text}>
					<h4 className="pretitle">{subtitle ? subtitle : "Top cities"}</h4>
					<h2>{store.title}</h2>
					<div className={style.points}>
						{store.textList.map((item, index) => (
							<div key={index}>
								<Image src={Tick} alt="tick icon" />
								<p>{item.textListItem}</p>
							</div>
						))}
					</div>
					<div className={style.section_background} />
				</div>
			</div>
		</section>
	);
};

export default SeoTopCities;
