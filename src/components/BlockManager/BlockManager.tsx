import { AdditionlSources } from "../AdditionalSources/AdditionlSources";
import { TextContent } from "../blog/articles/articleContent";
import ArticleCreator from "../blog/articles/articleCreator";
import SeoBenefits from "../guides/seoBenefits";
import SeoCost from "../guides/seoCost";
import SeoEducation from "../guides/seoEducation";
import SeoStats from "../guides/seoStats";
import SeoTopCities from "../guides/seoTopCities";
import SeoVacation from "../guides/seoVacation";
import SeoWhodBeSuited from "../guides/seoWhodBeSuited";
import styles from "./BlockManager.module.scss";

interface IBlock {
	blocks: object[];
}

const getBlockComponent = ({ __component, ...rest }: any, index: number) => {
	let Block;
	let props;
	const isFirst = index === 0;

	switch (__component) {
		case "seo-pages.stats":
			Block = SeoStats;
			props = { store: { ...rest } };
			return Block ? (
				<Block key={`index-${index}`} {...props} isFirst={isFirst} />
			) : null;
		case "seo-pages.benefits":
			Block = SeoBenefits;
			props = { store: { ...rest } };
			return Block ? (
				<Block key={`index-${index}`} {...props} isFirst={isFirst} />
			) : null;
		case "seo-pages.vacation":
			Block = SeoVacation;
			props = { store: { ...rest } };
			return Block ? (
				<Block key={`index-${index}`} {...props} isFirst={isFirst} />
			) : null;
		case "seo-pages.cost-of-living":
			Block = SeoCost;
			props = { store: { ...rest }, style: { marginTop: "0px" } };
			return Block ? (
				<Block key={`index-${index}`} {...props} isFirst={isFirst} />
			) : null;
		case "seo-pages.education":
			Block = SeoEducation;
			props = { store: { ...rest } };
			return Block ? (
				<Block key={`index-${index}`} {...props} isFirst={isFirst} />
			) : null;
		case "seo-pages.top-cities":
			Block = SeoTopCities;
			props = { store: { ...rest } };
			return Block ? (
				<Block key={`index-${index}`} {...props} isFirst={isFirst} />
			) : null;
		case "seo-pages.who-would-be-suited":
			Block = SeoWhodBeSuited;
			props = { store: { ...rest, isDynamic: true } };
			return Block ? (
				<Block key={`index-${index}`} {...props} isFirst={isFirst} />
			) : null;
		case "articles-components.additionl-sources":
			Block = AdditionlSources;
			props = { text: rest.text, socials: rest.Socials };
			return Block ? (
				<Block key={`index-${index}`} {...props} isFirst={isFirst} isDynamic />
			) : null;
		case "articles-components.article-author":
			Block = ArticleCreator;
			props = {
				user: {
					...rest,
					avatar: rest.avatar.data.attributes.url,
					socials: rest.socialLinks,
				},
			};
			return Block ? <Block key={`index-${index}`} {...props} /> : null;
		case "seo-pages.article-content":
			Block = TextContent;
			return Block ? (
				<div className={styles.textContent}>
					<Block key={`index-${index}`} {...rest} />
				</div>
			) : null;
	}
};

const BlockManager = ({ blocks = [] }: IBlock) => {
	return (
		<>
			{blocks.map(getBlockComponent)}
			<div className={styles.mb} />
		</>
	);
};

export default BlockManager;
