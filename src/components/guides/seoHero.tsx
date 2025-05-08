import Image from "next/image";
import React, { FC } from "react";

import ReadMoreOverflow from "@/lib/ReadMoreOverflow";
import { IStrapiImage } from "@/lib/notion";
import style from "@/styles/css/guides/seoHero.module.css";

import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { MainPageForm } from "../mainPageForm/MainPageForm";
import { parseMarkdown } from "./seoCost";

export interface ISEOHero {
	id: number;
	description: string;
	image: IStrapiImage;
	title: string;
	warehouseAddress: string | null;
}

const SeoHero: FC<{
	store: ISEOHero;
	stateName: string;
	slug: string;
	stateFlag: IStrapiImage;
	isState?: boolean;
	cityTitle?: string;
	basePath?: string;
}> = ({ store, stateName, stateFlag, slug, isState, cityTitle, basePath = "/locations" }) => {
	console.log('stateFlag data:', stateName, stateFlag);

	const breadcrumbsArr = isState
		? [
				{
					name: "Main page",
					url: "/",
				},
				{
					name: basePath === "/locations" ? "Locations" : "International",
					url: basePath,
				},
				{
					name: stateName,
					url: `${basePath}/${slug}`,
				},
			]
		: [
				{
					name: "Main page",
					url: "/",
				},
				{
					name: basePath === "/locations" ? "Locations" : "International",
					url: basePath,
				},
				{
					name: stateName,
					url: `${basePath}/${stateName.toLowerCase().split(" ").join("-")}`,
				},
				{
					name: cityTitle ?? store.title,
					url: `${basePath}/${stateName.toLowerCase().split(" ").join("-")}/${slug}`,
				},
			];

	return (
		<section className={style.section}>
			<Breadcrumbs withPadding breadcrumbsArr={breadcrumbsArr} />
			<div
				className={`block-container ${style.container} ${
					store.image.data == null ? style.noFlag : ""
				}`}
			>
				<div className={style.title}>
					<div className={style.topbar}>
						<div>
							<Image
								src={stateFlag.data.attributes.url}
								alt={`${stateName} flag icon`}
								fill
							/>
						</div>
						<p className={style.tag}> {stateName}</p>
					</div>
					<h1>{store.title}</h1>
					<div
						className={style.description}
						dangerouslySetInnerHTML={{
							__html: parseMarkdown(store.description),
						}}
					/>
				</div>
				<div className={style.preview}>
					<div className={style.image}>
						{store.image.data && (
							<Image
								src={store.image.data.attributes.url}
								alt={
									store.image.data.attributes.alternativeText ||
									"Nationwide Moving Guides For Anywhere in America SVL"
								}
								fill
							/>
						)}
					</div>
					<div>
						<p className={style.stateName}>{stateName}</p>
						<p>{store.warehouseAddress}</p>
					</div>
				</div>

				<ReadMoreOverflow className={style.textMobile}>
					{store.description}
				</ReadMoreOverflow>
			</div>
			<MainPageForm inHero name={cityTitle} className={style.mainPageForm}/>
		</section>
	);
};

export default SeoHero;
