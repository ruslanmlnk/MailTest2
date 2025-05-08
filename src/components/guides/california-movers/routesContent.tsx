"use client";

import { marked } from "marked";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect } from "react";
import { ClipLoader } from "react-spinners";

import Arrow from "@/../public/images/mainPage/button-arrow.svg";
import ChecklistIcon from "@/../public/images/packages-icon.png";
import GetAQuotePopup from "@/components/getAQuotePopup";
import { ILatLng } from "@/components/map/routing";
import { parseNotionDate } from "@/lib/notion";
import { useStickySidebar } from "@/lib/useStickySidebar";
import formsStore from "@/store/formsStore";
import style from "@/styles/css/guides/routesContent.module.css";


marked.use({
	mangle: false,
	headerIds: false,
});
const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
	if (href.startsWith("(")) {
		let newHref = href.split("");
		newHref.pop();
		newHref.shift();
		return `<a target="_blank" href="${newHref.join()}">${text}</a>`;
	}
	return `<a target="_blank" href="${href}">${text}</a>`;
};
renderer.heading = (text, level) => {
	if (level === 3) {
		return `<span class="h3">${text}</span>`;
	}
	if (level === 4) {
		return `<span class="h4">${text}</span>`;
	}
	return `<h${level}>${text}</h${level}>`;
};
renderer.image = (href, alt) => {
	return `<img class="svl-img" src="${href}" alt="${alt ?? "hero-img"}"} />`;
};

export const parseMarkdownWithSpanTitles = (text: string) => {
	if (text) {
		return marked.parse(text, { renderer });
	} else return "";
};

const LazyMap = dynamic(
	() => import("../../../components/map/RoutesMap/RoutesMap"),
	{ ssr: false },
);

const qs = require("qs");

interface UseGetNavigationHookProps {
	from?: string;
	to?: string;
	isCity?: boolean;
	isCityState?: string;
}

interface UseGetNavigationHookRetunValue {
	fromCoords?: ILatLng | null;
	toCoords?: ILatLng | null;
	isLoading: boolean;
}

const useGetNavigation = ({
	from,
	to,
	isCity,
	isCityState,
}: UseGetNavigationHookProps): UseGetNavigationHookRetunValue => {
	const APi_KEY = "1887c00b3a6c46a78ee8c9eb6bd01265";
	const [fromCoords, setFromCoords] = React.useState<ILatLng | null>(null);
	const [toCoords, setToCoords] = React.useState<ILatLng | null>(null);
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		const getCoords = async () => {
			await Promise.all([
				fetch(
					isCity
						? isCityState
							? `https://api.geoapify.com/v1/geocode/search?country=United%20States%20of%20America&city=${from}$state=${isCityState}&format=json&apiKey=${APi_KEY}`
							: `https://api.geoapify.com/v1/geocode/search?country=United%20States%20of%20America&city=${from}&format=json&apiKey=${APi_KEY}`
						: `https://api.geoapify.com/v1/geocode/search?country=United%20States%20of%20America&state=${from}&format=json&apiKey=${APi_KEY}`,
					{ method: "GET" },
				),
				fetch(
					isCity
						? `https://api.geoapify.com/v1/geocode/search?country=United%20States%20of%20America&city=${to}&format=json&apiKey=${APi_KEY}`
						: `https://api.geoapify.com/v1/geocode/search?country=United%20States%20of%20America&state=${to}&format=json&apiKey=${APi_KEY}`,
					{ method: "GET" },
				),
			])
				.then(async (value) => {
					if (value[0].ok && value[1].ok) {
						const resfrom = await value[0].json();
						const resTo = await value[1].json();

						setFromCoords({
							lat: resfrom?.results?.[0]?.lat ?? null,
							lng: resfrom?.results?.[0]?.lon ?? null,
						});
						setToCoords({
							lat: resTo?.results?.[0]?.lat ?? null,
							lng: resTo?.results?.[0]?.lon ?? null,
						});
					}
				})
				.catch((err) => {
					console.error(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		};
		if (from && to) {
			getCoords();
		} else {
			setIsLoading(false);
		}
	}, []);

	return {
		fromCoords,
		toCoords,
		isLoading,
	};
};

const RoutesContent: FC<{
	content: string;
	from?: string;
	to?: string;
	isCity?: boolean;
	cityStateName?: string;
}> = ({ content, from, to, isCity, cityStateName }) => {
	const { asideRef, topOffset } = useStickySidebar(125, 30);

	const [isPopupOpened, setIsPopupOpened] = React.useState(false);
	const [latestArticle, setLatestArticle] = React.useState<any>(null);
	const path = usePathname();

	const { fromCoords, toCoords, isLoading } = useGetNavigation({
		from,
		to,
		isCity,
		isCityState: cityStateName,
	});

	const hasMap = !path.includes("special-move");

	return (
		<>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<section className={style.section}>
				<div className={`block-container ${style.container}`}>
					<div className={style.mapWrapper}>
						{hasMap ? (
							isLoading ? (
								<div className={style.skeleton}>
									<ClipLoader color="#436ae5" />
								</div>
							) : fromCoords && toCoords ? (
								<LazyMap points={[fromCoords, toCoords]} />
							) : null
						) : null}
						<div
							className={style.content}
							dangerouslySetInnerHTML={{ __html: parseMarkdownWithSpanTitles(content) }}
						></div>
					</div>

					<aside className={style.aside_content}>
						<div>
							<div
								className={`${style.subcontent} ${style.sticky}`}
								style={{ top: topOffset + "px" }}
								ref={asideRef}
							>
								<div className={style.getAQuote}>
									<span className={style.h3}>Do you need to move?</span>
									<p>Calculate the cost in 1 minute</p>
									<button
										className="main"
										onClick={() => setIsPopupOpened(true)}
									>
										Get a quote
										<Image src={Arrow} alt="arrow right icon" />
									</button>
								</div>

								{latestArticle && (
									<div className={style.latestArticle}>
										<div className={style.imageContainer}>
											<Image
												src={latestArticle?.image.data.attributes.url}
												alt={latestArticle?.title}
												fill
											/>
										</div>
										<div className={style.latestArticleText}>
											<div className={style.topbar}>
												<p className={style.tag}>
													<span>{latestArticle?.tag}</span>
												</p>
												<p className={style.date}>
													<span> Last updated </span>
													{parseNotionDate(latestArticle?.updatedAt)}
												</p>
											</div>

											<h3>
												<Link href={`/blog/${latestArticle?.slug}`}>
													{latestArticle?.title}
												</Link>
											</h3>
										</div>
									</div>
								)}

								<div className={style.checklist}>
									<Image src={ChecklistIcon} alt="download checklist icon" />
									<div>
										<span className={style.h3}>Ready to pack your bags?</span>
										<p>Download a checklist of 10 steps to perfect packing</p>
									</div>
									<Link
										href={"/#checklist"}
										scroll={false}
										className="main"
										onMouseDown={() => {
											formsStore.ChecklistData.EmailAddress =
												"checklist@downloaded.com";
											formsStore.ChecklistData.PhoneNumber = "19999999999";
										}}
									>
										{formsStore.loadingRequest ? (
											<p>Please wait...</p>
										) : (
											<>
												Download checklists{" "}
												<Image
													src={Arrow}
													alt="download checklists arrow right icon"
												/>
											</>
										)}
									</Link>
								</div>
							</div>
						</div>
					</aside>
				</div>
			</section>
		</>
	);
};

const latestBlogPostQuery = qs.stringify({
	populate: {
		image: {
			fields: ["url"],
		},
	},
	fields: ["title", "updatedAt", "image", "tag", "slug"],
	pagination: {
		page: 1,
		pageSize: 1,
	},
	sort: ["updatedAt:desc"],
});

export default RoutesContent;