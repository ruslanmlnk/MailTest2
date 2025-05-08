import React, { FC, useEffect, useState } from "react";

import { IArticle, categories } from "@/store/blogStore";

import style from "../../styles/css/blog/blog.module.css";
import ArticleCard from "./articleCard";
import Pagination from "./pagination";
import SearchBar from "./searchBar";
import TagMenu from "./tagMenu";

interface IBlogSection {
	articles: IArticle[];
	currentPage: number;
	totalArticles: number;
	perPage: number;
	latestArticles: IArticle[];
	setSearch: (arg: any) => void;
	search: string | null;
}

const BlogSection: FC<IBlogSection> = ({
	articles,
	currentPage,
	totalArticles,
	perPage,
	latestArticles,
	setSearch,
	search,
}) => {
	const [activeTag, setActiveTag] = useState<string>("");
	const [activeCards, setActiveCards] = useState<IArticle[]>(articles);

	useEffect(() => {
		setActiveCards(articles);
	}, [currentPage]);

	return (
		<section>
			<div className="block-container">
				<SearchBar
					title={"Search Articles"}
					setSearch={setSearch}
					search={search}
					className={style.search_bar}
				/>
				<div className={style.articles_wrapper}>
					<div className={style.articles}>
						{articles.map((item) => (
							<ArticleCard store={item} key={item.slug} />
						))}
						<Pagination
							items={totalArticles}
							pageSize={perPage}
							currentPage={currentPage}
						/>
					</div>
					<aside className={style.aside_content}>
						<div>
							<div className={style.subcontent}>
								<TagMenu
									store={{
										title: "Latest articles",
										items: latestArticles,
									}}
									setActiveTag={setActiveTag}
									activeTag={activeTag}
								/>
								<TagMenu
									store={categories}
									setActiveTag={setActiveTag}
									activeTag={activeTag}
								/>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
