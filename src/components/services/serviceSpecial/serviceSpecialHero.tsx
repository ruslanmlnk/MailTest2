import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { capitalizeSlug } from "@/lib/capitalizeSlug";
import { shimmer, toBase64 } from "@/lib/notion";
import style from "@/styles/css/blog/articles/articleHero.module.css";

export interface IServiceSpecialHero {
	title: string;
	coverImage: StaticImageData | string;
	description: string;
}

interface SeoServiceSpecialHeroProps {
	article: IServiceSpecialHero;
	slug?: string;
}

const ServiceSpecialHero: FC<SeoServiceSpecialHeroProps> = ({
	article,
	slug,
}) => {
	const breadcrumbsArr = [
		{
			name: "Main page",
			url: "/",
		},
		{
			name: "Special move",
			url: `/special-move`,
		},
		{
			name: capitalizeSlug(slug!) || ``,
			url: `/special-move/${slug}` || ``,
		},
	];
	return (
		<section className={style.section}>
			<div className={style.breadcrumbs}>
				<Breadcrumbs withPadding breadcrumbsArr={breadcrumbsArr} />
			</div>
			<div className={`block-container ${style.container}`}>
				<div className={style.title}>
					<div className={style.topbar}>
						<p className={style.tag}>Special move</p>
					</div>
					<h1>{article.title}</h1>
					<p>{article.description}</p>
				</div>
				<div className={style.preview}>
					<Image
						fill
						src={article.coverImage}
						alt=""
						sizes="(max-width:768px) 100vw, (max-width: 1400px) 50vw, 30vw"
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(700, 475),
						)}`}
					/>
				</div>
			</div>
		</section>
	);
};

export default ServiceSpecialHero;
