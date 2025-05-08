import Image from "next/image";
import { FC } from "react";

import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { MainPageForm } from "@/components/mainPageForm/MainPageForm";
import { parseNotionDate, shimmer, toBase64 } from "@/lib/notion";
import { IArticle } from "@/store/blogStore";
import style from "@/styles/css/blog/articles/articleHero.module.css";

interface IArticleHero {
	article: IArticle;
	isSEOpage?: boolean;
}

const ArticleHero: FC<IArticleHero> = ({ article, isSEOpage }) => {
	const breadcrumbsArr = !isSEOpage
		? [
				{
					name: "Main page",
					url: "/",
				},
				{
					name: "Blog",
					url: `/blog`,
				},
				{
					name: article.title,
					url: `/blog/${article.slug}`,
				},
			]
		: [
				{
					name: "Main page",
					url: "/",
				},
				{
					name: article.title,
					url: `/${article.slug}`,
				},
			];
	return (
		<section className={style.section}>
			<Breadcrumbs
				extraPadding
				truncate
				withPadding
				breadcrumbsArr={breadcrumbsArr}
			/>
			<div className={`block-container ${style.container}`}>
				<div className={style.title}>
					<div className={style.topbar}>
						<p className={style.tag}>{article.tag ?? "Common"}</p>
						<p className={style.date}>
							<span>Last updated</span> {parseNotionDate(article.date)}
						</p>
					</div>
					<h1>{article.title}</h1>
					<p>{article.description}</p>
				</div>
				<div className={style.preview}>
					<Image
						fill
						src={article.coverImage.data.attributes.url}
						alt={
							article.coverImage.data.attributes.alternativeText ||
							article.title + " SVL"
						}
						sizes="(max-width:768px) 100vw, (max-width: 1400px) 50vw, 30vw"
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(700, 475),
						)}`}
					/>
				</div>
			</div>
			<MainPageForm inHero />
		</section>
	);
};

export default ArticleHero;
