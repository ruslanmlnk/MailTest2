import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

import { IStrapiImage } from "@/lib/notion";
import { shimmer, toBase64 } from "@/lib/notion";

import TickIcon from "../../../public/images/tick-icon.svg";
import style from "../../styles/css/guides/seoWhereToWork.module.css";

export interface ISEOWhereToWork {
	id: number;
	image: IStrapiImage;
	title: string;
	textList: {
		textListItem: string;
	}[];
}

const SeoWhereToWork: FC<{ store: ISEOWhereToWork; name?: string }> = ({
	store,
	name,
}) => {
	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.text}>
					<h4 className="pretitle">WHERE TO WORK</h4>
					<h2>{name ? `Largest employers\n in ${name}` : store.title}</h2>
					<div className={style.grid}>
						{store.textList.map((item, index) => (
							<div key={index}>
								<Image src={TickIcon} alt="" />
								<p>{item.textListItem}</p>
							</div>
						))}
					</div>
				</div>
				<div className={style.image_container}>
					<Image
						src={store.image.data.attributes.url}
						// width={600}
						// height={600}
						fill
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(700, 700),
						)}`}
						alt=""
					/>
				</div>
				<div className={style.background} />
			</div>
		</section>
	);
};

export default SeoWhereToWork;
