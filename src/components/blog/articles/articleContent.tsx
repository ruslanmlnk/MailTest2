import clsx from "clsx";
import parse from "html-react-parser";
import {
	DOMNode,
	Element,
	type HTMLReactParserOptions,
	domToReact,
} from "html-react-parser";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, ReactNode, useState } from "react";
import {
	FacebookIcon,
	FacebookShareButton,
	FacebookShareCount,
	TelegramIcon,
	TelegramShareButton,
	TwitterShareButton,
	XIcon,
} from "react-share";
import { toast } from "react-toastify";

import LinkIcon from "@/../public/images/link-open-flat.svg";
import { AdditionlSources } from "@/components/AdditionalSources/AdditionlSources";
import BlockManager from "@/components/BlockManager/BlockManager";
import { GridTable } from "@/components/GridTable/GridTable";
import {
	LOCAL_DIST_TABLE_DATA,
	LONG_DIST_TABLE_DATA,
} from "@/components/GridTable/static";
import { ITableColumn } from "@/components/GridTable/types";
import { makeColumnsFromRows } from "@/components/GridTable/utils";
import { Cloud } from "@/components/cloud/cloud";
import SeoBenefits from "@/components/guides/seoBenefits";
import { parseMarkdown } from "@/components/guides/seoCost";
import SeoCost from "@/components/guides/seoCost";
import SeoEducation from "@/components/guides/seoEducation";
import SeoStats from "@/components/guides/seoStats";
import SeoTopCities from "@/components/guides/seoTopCities";
import SeoVacation from "@/components/guides/seoVacation";
import SeoWhereToWork from "@/components/guides/seoWhereToWork";
import SeoWhodBeSuited from "@/components/guides/seoWhodBeSuited";
import CalculatorInfo from "@/components/services/calculatorInfo";
import { replaceNthOccurrence } from "@/lib/replaceNthMatch";
import { IArticle } from "@/store/blogStore";
import { IUsers, users } from "@/store/usersStore";
import style from "@/styles/scss/blog/articles/articleContent.module.scss";

import TagMenu from "../tagMenu";
import ArticleCreator from "./articleCreator";

interface IArticleContentProps {
	articles: IArticle[];
	content?: any;
	author?: IUsers;
	article?: any;
	dynamicBlocks?: any[];
}

const parseOptions: HTMLReactParserOptions = {
	replace(node) {
		if (!(node instanceof Element)) {
			return;
		}

		const { name, attribs, children } = node;

		if (
			name === "p" &&
			children[0].nodeType === 1 &&
			children[0].name === "img"
		) {
			return (
				<div className={style.wrapWrap}>
					{domToReact(children as DOMNode[], parseOptions)}
				</div>
			);
		}

		if (name === "a") {
			if (attribs && !attribs.href.startsWith("https://")) {
				return (
					<a href={"https://" + attribs.href} target="_blank">
						{domToReact(children as DOMNode[], parseOptions)}
					</a>
				);
			}
		}

		if (name === "img") {
			return (
				<>
					<div className={style.imageWrap}>
						<Image
							src={attribs.src}
							alt={attribs.alt}
							// width={Number(attribs.width)}
							// height={Number(attribs.height)}
							fill
						/>
					</div>
					<p>{attribs.alt}</p>
				</>
			);
		}
		if (name === "ol") {
			return <ol>{domToReact(children as DOMNode[], parseOptions)}</ol>;
		}
		if (name === "ul") {
			return <ul>{domToReact(children as DOMNode[], parseOptions)}</ul>;
		}
	},
};

export const parseArticleContent = (str: string) => {
	let mdContent = parseMarkdown(str);

	const h3Amount = mdContent?.match(/<h3>/g)?.length || 1;

	mdContent = replaceNthOccurrence(
		mdContent || " ",
		"<h3>",
		'<div class="cta"></div>\n<h3>',
		Math.round(h3Amount / 2),
	);

	return parse(mdContent, parseOptions);
};

const getTargetNameFromSlug = (title: string) => {
	const parsed = title.split(" ");
	if (parsed.length >= 8) {
		return parsed[7].startsWith("2") ? parsed[6] : parsed[6] + " " + parsed[7];
	} else return title;
};

export const TextContent = ({ content }: { content: string }) => {
	return <div className={style.content}>{parseArticleContent(content)}</div>;
};

const ArticleContent: FC<IArticleContentProps> = ({
	content,
	articles,
	author,
	article,
	dynamicBlocks,
}) => {
	const router = useRouter();

	const [activeTag, setActiveTag] = useState<string>("");

	const copyToClipboard = (text: string): void => {
		navigator.clipboard.writeText(text);
		toast.success("Link copied to clipboard!", { position: "bottom-right" });
	};

	const title = "Blog article from Star Van Lines";
	const URL = `https://starvanlinesmovers.com${router.asPath}`;

	return (
		<section className={style.section}>
			<div
				className={`block-container ${style.container} ${dynamicBlocks ? style.noMT : ""}`}
			>
				{!dynamicBlocks ? (
					<div className={style.contentHolder}>
						{content && <TextContent content={content} />}

						<div className={style.moreContent}>
							{article.attribs.Stats && (
								<SeoStats
									store={article.attribs.Stats}
									placeName={getTargetNameFromSlug(article.title)}
								/>
							)}
							{article.attribs.Benefits && (
								<SeoBenefits
									store={article.attribs.Benefits}
									placeName={getTargetNameFromSlug(article.title)}
								/>
							)}
							{article.attribs.CostOfLiving && (
								<SeoCost
									isArticle
									store={article.attribs.CostOfLiving}
									placeName={getTargetNameFromSlug(article.title)}
								/>
							)}
							{article.attribs.WhoWouldBeSuited && (
								<SeoWhodBeSuited
									store={article.attribs.WhoWouldBeSuited}
									placeName={getTargetNameFromSlug(article.title)}
								/>
							)}
							{article.attribs.TopCities && (
								<SeoTopCities store={article.attribs.TopCities} />
							)}
							{article.attribs.Schools && (
								<SeoEducation
									store={article.attribs.Schools}
									placeName={getTargetNameFromSlug(article.title)}
								/>
							)}
							{article.attribs.Universities && (
								<SeoEducation
									store={article.attribs.Universities}
									placeName={getTargetNameFromSlug(article.title)}
									isUni
								/>
							)}

							{article.attribs.WhereToWork && (
								<SeoWhereToWork
									name={getTargetNameFromSlug(article.title)}
									store={article.attribs.WhereToWork}
								/>
							)}

							{article.attribs.Vacation && (
								<SeoVacation
									store={article.attribs.Vacation}
									placeName={getTargetNameFromSlug(article.title)}
								/>
							)}
							<div className={style.share}>
								<b>Liked this article? Share it!</b>
								<div className={style.shareButtons}>
									<div
										className={style.copy}
										onClick={() => copyToClipboard(URL)}
									>
										<Image src={LinkIcon} alt="link-icon" width={40} />
									</div>
									<FacebookShareButton url={URL}>
										<FacebookIcon size={40} round />
										<FacebookShareCount url={URL} />
									</FacebookShareButton>
									<TwitterShareButton url={URL} title={title}>
										<XIcon size={40} round />
									</TwitterShareButton>
									<TelegramShareButton url={URL} title={title}>
										<TelegramIcon size={40} round />
									</TelegramShareButton>
								</div>
							</div>
							{article.additionalSources && (
								<AdditionlSources
									text={article.additionalSources.text}
									socials={article.additionalSources.Socials}
								/>
							)}
							{author && author.avatar ? (
								<ArticleCreator user={author} />
							) : (
								<ArticleCreator user={users[0]} />
							)}
						</div>
					</div>
				) : (
					<div className={clsx(style.contentHolder, style.moreContent)}>
						<BlockManager blocks={dynamicBlocks} />
					</div>
				)}

				<aside className={style.aside_content}>
					<div className={`${style.subcontent} ${style.sticky}`}>
						<TagMenu
							setActiveTag={setActiveTag}
							activeTag={activeTag}
							store={{
								title: "Latest articles",
								items: articles,
							}}
						/>
						{/* <div className={style.subscribe}>
								<Image src={HomeIcon} alt="article content home icon" />
								<h4>
									Subscribe <br /> to our Instagram
								</h4>
								<p>Follow our moving services, news, discounts. No spam</p>
								<Link href="https://www.instagram.com/starvanlinesllc/?igshid=YmMyMTA2M2Y=">
									<button className="main">Subscribe</button>
								</Link>
							</div> */}
					</div>
				</aside>
			</div>
		</section>
	);
};

export default ArticleContent;
