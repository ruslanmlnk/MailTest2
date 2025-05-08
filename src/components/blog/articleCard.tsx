import Image from "next/image";
import React, { FC } from "react";

import { parseNotionDate, shimmer, toBase64 } from "@/lib/notion";
import { IArticle } from "@/store/blogStore";

import img from "../../../public/images/placeholder-1.webp";
import style from "../../styles/css/blog/articleCard.module.css";

const ArticleCard: FC<{ store: IArticle }> = ({ store }) => {
	const trimString = (str: string, length: number) => {
		if (str == null) return "";
		return str.length > length ? str.substring(0, length) + "..." : str;
	};

	return (
		<a href={`/blog/${store.slug}`} className={style.container}>
			<div>
				<Image
					src={store.coverImage.data?.attributes.url || img}
					alt={
						store.coverImage.data?.attributes.alternativeText ||
						"Ask the Star Van Lines Movers: Your Moving Questions Answered Blog Post"
					}
					fill
					sizes="(max-width:768px) 100vw, (max-width: 1400px) 50vw, 30vw"
					placeholder="blur"
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(700, 475),
					)}`}
				/>
			</div>
			<div className={style.text}>
				<div>
					<p className={style.tag}>
						<span>{store.tag}</span>
					</p>
					<p className={style.date}>
						<span>Last updated</span> {parseNotionDate(store.date)}
					</p>
				</div>
				<h3>{store.title}</h3>
				<p>{trimString(store.description, 75)}</p>
			</div>
		</a>
	);
};

export default ArticleCard;
