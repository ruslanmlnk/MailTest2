import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import { IStrapiImage } from "@/lib/notion";
import { shimmer, toBase64 } from "@/lib/notion";

import style from "../../styles/css/guides/seoAbout.module.css";
import { splitTitleBySpan } from "../services/serviceHero";
import { parseMarkdown } from "./seoCost";

export interface ISEOAbout {
	id: number;
	image: IStrapiImage;
	title: string;
	description: string;
}

const SeoAbout: FC<{
	store: ISEOAbout;
	stateName: string;
	mt?: boolean;
	special?: boolean;
}> = ({ store, stateName, mt, special }) => {
	return (
		<section>
			<div
				className={`block-container ${clsx(
					style.container,
					!mt ? style.mt : "",
					special && style.special,
				)}`}
			>
				<div className={style.image_container}>
					<Image
						className={style.image}
						width={700}
						height={700}
						src={store.image.data.attributes.url}
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(700, 700),
						)}`}
						alt={
							store.image.data.attributes.alternativeText ||
							`${stateName} flag image SVL`
						}
					/>
				</div>
				<div className={style.text}>
					<span className={style.stateName}>{stateName}</span>
					<h2>{splitTitleBySpan(store.title)}</h2>
					<div
						className={style.description}
						dangerouslySetInnerHTML={{
							__html: parseMarkdown(store.description),
						}}
					></div>
					<div className={style.section_background} />
				</div>
			</div>
		</section>
	);
};

export default SeoAbout;
