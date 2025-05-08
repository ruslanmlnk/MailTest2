import { marked } from "marked";
import Image from "next/image";
import React, { FC, useState } from "react";

import { ReadMore } from "@/lib/ReadMore";

import style from "../../styles/css/guides/seoCost.module.css";

marked.use({
	mangle: false,
	headerIds: false,
});

export interface ISEOCost {
	id: number;
	title: string;
	tab: {
		tabContent: string;
		tabTitle: string;
	}[];
}

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

renderer.image = (href, alt) => {
	return `<img class="svl-img" src="${href}" alt="${alt ?? "hero-img"}"} />`;
};

export const parseMarkdown = (text: string) => {
	if (text) {
		return marked.parse(text, { renderer });
	} else return "";
};

const SeoCost: FC<{
	store: ISEOCost;
	subTitle?: string;
	isArticle?: boolean;
	placeName?: string;
	isFirst?: boolean;
}> = ({ store, subTitle, isArticle, placeName, isFirst }) => {
	const [currentTab, setCurrentTab] = useState<number>(0);
	const [hideBlocks, setHideBlocks] = useState<boolean>(false);

	const handleTabClick = (index: number) => {
		setCurrentTab(index);
		setHideBlocks(false);
	};
	return (
		<section>
			<div
				style={isFirst ? { marginTop: "0px" } : {}}
				className={`block-container ${style.container} ${
					isArticle ? style.article : ""
				}`}
			>
				<p className={style.title}>
					{subTitle ? subTitle : "COST OF LIVING IN THE STATE"}
				</p>
				<h2>
					{placeName
						? `Is ${placeName} a good place to live?`
						: "Is this city a good place to live?"}
				</h2>

				<div className={style.tabs}>
					{store.tab.map((item, index) => (
						<button
							className={`${style.tab} ${
								currentTab == index ? style.active : ""
							}`}
							onClick={() => handleTabClick(index)}
							key={index}
						>
							{item.tabTitle}
						</button>
					))}
				</div>

				{store.tab.map((item, index) => (
					<div style={{ width: "100%" }} key={index}>
						<div
							className={`${style.content} ${
								currentTab === index && !hideBlocks
									? style.visible
									: style.hidden
							}`}
							dangerouslySetInnerHTML={{
								__html: parseMarkdown(item.tabContent) || "",
							}}
						/>
						<ReadMore
							limit={120}
							className={`${style.mobileContent} ${
								currentTab === index && !hideBlocks
									? style.visible
									: style.hidden
							}`}
						>
							{item.tabContent}
						</ReadMore>
					</div>
				))}
			</div>
		</section>
	);
};

export default SeoCost;
