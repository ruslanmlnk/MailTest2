import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React, { FC } from "react";
import slugify from "slugify";

import Arrow from "@/../public/images/blog/see-all-arrow.svg";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import style from "@/styles/css/guides/routesHero.module.css";

import { parseMarkdown } from "../seoCost";

type pageType = "city" | "cityRoute" | "movingRoute" | "zipCode";

export interface IRouteHero {
	movingFromFlag?: string;
	movingFromName: string;
	movingToFlag?: string;
	movingToName: string;
	title: string;
	description: string;
	isCityPage?: boolean;
	slug?: string;
	state?: string;
	pageType?: pageType;
	stateName: string;
	basePath?: string;
}

const RoutesHero: FC<{ store: IRouteHero }> = ({ store }) => {
	let movingFrom;
	if (
		store.pageType === "cityRoute" &&
		store.movingFromName === "Jacksonville"
	) {
		store.movingFromName += "-fl";
	}
	if (store.movingFromName[store.movingFromName.length - 1] === " ") {
		store.movingFromName = store.movingFromName.slice(
			0,
			store.movingFromName.length - 1,
		);
	}
	const basePath = store.basePath || "/locations";
	const breadcrumbsArr =
		store.pageType === "cityRoute"
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
						name:
							store.movingFromName === "Bay Area"
								? "California"
								: store.movingFromName || "",
						url:
							store.movingFromName === "Bay Area"
								? `${basePath}/${store.state
										?.toLowerCase()
										.split(" ")
										.join("-")}`
								: `${basePath}/${
										store.movingFromName === "Richmond"
											? "virginia"
											: store.state?.toLowerCase().split(" ").join("-")
									}${
										store.movingFromName.toLowerCase().split(" ").join("-") !==
										"new-york"
											? "/" +
												store.movingFromName.toLowerCase().split(" ").join("-")
											: ""
									}`,
					},
					{
						name: store.title,
						url: `${basePath}/${store.state
							?.toLowerCase()
							.split(" ")
							.join("-")}/${store.slug?.toLowerCase().split(" ").join("-")}`,
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
						name: store.movingFromName || "",
						url: `${basePath}/${store.state
							?.toLowerCase()
							.split(" ")
							.join("-")}`,
					},
					{
						name: store.title,
						url: `${basePath}/${store.state
							?.toLowerCase()
							.split(" ")
							.join("-")}/${store.slug?.toLowerCase().split(" ").join("-")}`,
					},
				];
				console.log("storeMdsd", store);
	return (
		<section className={style.section}>
			<Breadcrumbs extraPadding withPadding breadcrumbsArr={breadcrumbsArr} />
			<div className={`block-container ${style.container}`}>
				<div className={style.title}>
					<div className={style.topbar}>
						<Link
							href={
								store.isCityPage
									? "#"
									: `${basePath}/${slugify(store.movingFromName, {
											lower: true,
										})}`
							}
						>
							{store.movingFromFlag && (
								<div>
									<Image src={store.movingFromFlag} alt={store.title} fill />
								</div>
							)}
							<p>{store.movingFromName}</p>
						</Link>
						<Image src={Arrow} alt={store.title} />
						<Link
							href={
								store.isCityPage
									? "#"
									: `${basePath}/${slugify(store.movingToName, {
											lower: true,
										})}`
							}
						>
							{store.movingToFlag && (
								<div>
									<Image src={store.movingToFlag} alt={store.title} fill />
								</div>
							)}
							<p>{store.movingToName}</p>
						</Link>
					</div>
					<h1>{store.title}</h1>
					<div
						className={style.description}
						dangerouslySetInnerHTML={{
							__html: parseMarkdown(store.description),
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default RoutesHero;
