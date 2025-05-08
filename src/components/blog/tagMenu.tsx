import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { IArticle } from "@/store/blogStore";
import style from "@/styles/css/blog/tagMenu.module.css";

import img from "../../../public/images/placeholder-1.webp";

type Item = {
	id: number;
	coverImage: StaticImageData;
	title: string;
};

export interface ITagMenu {
	title: string;
	items: IArticle[] | Item[];
}

const TagMenu: FC<{
	store: ITagMenu;
	setActiveTag: React.Dispatch<React.SetStateAction<string>>;
	activeTag: string;
}> = ({ store, setActiveTag, activeTag }) => {
	let trimString = function (string: string, length: number) {
		return string.length > length
			? string.substring(0, length) + "..."
			: string;
	};

	let slicedItems = store.items;

	const router = useRouter();

	const setTagQuery = (tag: string) => {
		router.query.tag = tag;
		router.query["page-number"] = "1";
		router.push(router, undefined, { scroll: false });
	};

	const isArticle = (value: any): value is IArticle => !!value?.slug;

	if (store.title == "Latest articles") slicedItems = store.items.slice(0, 5);
	else if (store.title == "Categories") slicedItems = store.items.slice(0, 10);
	return (
		<div className={style.container}>
			<span className={style.title}>{store.title}</span>
			<div className={style.tags}>
				{store.title == "Latest articles"
					? slicedItems.map((item, index) => (
							<Link
								href={isArticle(item) ? `/blog/${item.slug}` : ""}
								key={index}
								className={style.tag}
							>
								<div className={style.image}>
									<Image
										fill
										// @ts-ignore
										src={item.coverImage.data?.attributes.url || img}
										sizes="45px"
										alt="Blog post cover image"
									/>
								</div>
								<p>{trimString(item.title, 40)}</p>
							</Link>
						))
					: slicedItems.map((item, index) => (
							<a
								onClick={() => {
									if (router.query.tag == item.title) {
										// setActiveTag("");
										setTagQuery("");
									} else {
										// setActiveTag(item.title);
										setTagQuery(item.title);
									}
								}}
								className={`${style.tag} ${
									item.title == router.query.tag ? style.active : ""
								}`}
								key={index}
							>
								<div className={style.image}>
									<Image
										fill
										// @ts-ignore
										src={item.coverImage}
										sizes="45px"
										alt="Blog post category cover image"
									/>
								</div>
								<p>{trimString(item.title, 30)}</p>
							</a>
						))}
			</div>
		</div>
	);
};

export default TagMenu;
