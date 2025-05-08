import Head from "next/head";

import { addJsonLDService, addJsonLdFAQ, addJsonLd_2 } from "@/pages/_document";
import style from "@/styles/css/guides/statePage.module.css";
import transformFAQtoJSON from "@/utils/transformFAQtoJSON";

import { BenefitsTable } from "../BenefitsTable/BenefitsTable";
import { GridTable } from "../GridTable/GridTable";
import { makeColumnsFromShort } from "../GridTable/utils";
import ArticleRelated from "../blog/articles/articleRelated";
import { ClientTestimonials } from "../clientTestimonials/clientTestimonials";
import { Cloud } from "../cloud/cloud";
import FAQ from "../faq";
import OurServices from "../mainPage/ourServices/ourServices";
import RequestForm from "../mainPage/requestForm";
import Reviews from "../mainPage/reviews/reviews";
import { MainPageForm } from "../mainPageForm/MainPageForm";
import RoutesMap from "../map/RoutesMap/RoutesMap";
import CalculatorInfo from "../services/calculatorInfo";
import RoutesContent from "./california-movers/routesContent";
import RoutesHero, { IRouteHero } from "./california-movers/routesHero";
import SeoStats from "./seoStats";

const MovingRoutePage = ({ page, slug, state, dataFrom, dataTo, basePath = "/locations" }: any) => {
	const hero: IRouteHero = {
		title: page.title,
		description: page.description,
		movingFromName: page.movingFrom.data.attributes.stateName,
		movingToName: page.movingTo.data.attributes.stateName || page.movingTo.data.attributes.cityName,
		movingFromFlag:
			page.movingFrom.data.attributes.stateFlag.data.attributes.url,
		movingToFlag: page.movingTo.data.attributes.stateFlag?.data.attributes.url || page.movingTo.data.attributes.image.data.attributes.url,
		slug: slug,
		state: state,
		stateName: page.movingTo.stateName,
		basePath,
	};

	const relatedArticles = page.RelatedArticles.data.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: item.attributes.tag,
			slug: item.attributes.slug,
		};
	});
	const relatedMovingRoutes = page.RelatedMovingRoutes.data.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: "Routes",
			slug:
				item.attributes.movingFrom.data.attributes.stateName
					.toLowerCase()
					.split(" ")
					.join("-") +
				"/" +
				item.attributes.movingFrom.data.attributes.stateName
					.toLowerCase()
					.split(" ")
					.join("-") +
				"-to-" +
				item.attributes.movingTo.data.attributes.stateName
					.toLowerCase()
					.split(" ")
					.join("-"),
			needSlugify: true,
		};
	});
	const relatedCityRoutes = page.RelatedCityRoutes.data.map((item: any) => {
		const stateSlug = item.attributes.states.data[0].attributes.stateName
			.split(" ")
			.join("-")
			.toLowerCase();
		const routeSlug =
			item.attributes.movingFrom.split(" ").join("-").toLowerCase() +
			"-to-" +
			item.attributes.movingTo.split(" ").join("-").toLowerCase() +
			"-move";
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: "Routes",
			slug: `${stateSlug}/${routeSlug}`,
			needSlugify: true,
		};
	});

	const relatedStates = page.RelatedStates?.data.map((item: any) => {
		return {
			title: item.attributes.Hero.title,
			description: item.attributes.Hero.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.stateFlag,
			tag: "Routes",
			slug: item.attributes.slug,
			needSlugify: true,
		};
	});

	const relatedCities = page.RelatedCities?.data.map((item: any) => {
		return {
			title: item.attributes.Hero.title,
			description: item.attributes.Hero.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: "Routes",
			slug:
				item.attributes.guide.data.attributes.slug
					.split(" ")
					.join("-")
					.toLowerCase() +
				"/" +
				item.attributes.cityName.split(" ").join("-").toLowerCase(),
			needSlugify: true,
		};
	});

	const relatedInfo = relatedArticles.concat(
		relatedCityRoutes,
		relatedMovingRoutes,
		relatedCities,
		relatedStates,
	);

	const faqElems =
		page.FAQ?.faqElement.map((elem: any) => {
			return {
				title: elem.question,
				content: elem.answer,
			};
		}) || null;

	function addJsonLd(stateName: string, stateName2: string) {
		return {
			__html: `{
			"@context": "https://schema.org/",
			"@type": "BreadcrumbList",
			"itemListElement": [
				 {
					  "@type": "ListItem",
					  "position": 1,
					  "name": "Main",
					  "item": "https://starvanlinesmovers.com"
				 },
				 {
					  "@type": "ListItem",
					  "position": 2,
					  "name": "Locations",
					  "item": "https://starvanlinesmovers.com${basePath}/"
					 
				 },
				 {
					  "@type": "ListItem",
					  "position": 3,
					  "name": "${stateName}",
					  "item": "https://starvanlinesmovers.com${basePath}/${stateName.toLocaleLowerCase().split(" ").join("-")}/"
				 },
				 {
					  "@type": "ListItem",
					  "position": 4,
					  "name": "From ${stateName} to ${stateName2} ",
					  "item": "https://starvanlinesmovers.com${basePath}/${stateName.toLocaleLowerCase().split(" ").join("-")}/${stateName.toLowerCase().split(" ").join("-")}-to-${stateName2.toLocaleLowerCase().split(" ").join("-")}"
				 },
				 {
					  "@type": "ListItem",
					  "position": 4,
					  "name": "From ${stateName} to ${stateName2} ",
					  "item": "https://starvanlinesmovers.com${basePath}/${stateName.toLocaleLowerCase().split(" ").join("-")}/${stateName.toLowerCase().split(" ").join("-")}-to-${stateName2.toLocaleLowerCase().split(" ").join("-")}"
				 }
			]
	   		}`,
		};
	}

	const from = page.movingFrom.data.attributes.stateName;
	const to = page.movingTo.data.attributes.stateName;

	console.log("pageememcdmdc", page)

	return (
		<>
			<Head>
				<title>{page.metaTitle ? page.metaTitle : page.title}</title>
				<meta
					name="description"
					content={
						page.metaDescription
							? page.metaDescription
							: `${page.title}. Simplify your move with Star Vanlines Movers. Our team provides top-notch and stress-free moving solutions.`
					}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="canonical"
					href={`https://starvanlinesmovers.com${basePath}/${page.movingFrom.data.attributes.stateName.toLocaleLowerCase().split(" ").join("-")}/${page.movingFrom.data.attributes.stateName.toLocaleLowerCase().split(" ").join("-")}-to-${(page.movingTo.data.attributes.stateName || page.movingTo.data.attributes.cityName).toLocaleLowerCase().split(" ").join("-")}`}
				/>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd(
						page.movingFrom.data.attributes.stateName,
						page.movingTo.data.attributes.stateName || page.movingTo.data.attributes.cityName,
					)}
				/>

				{page.SeoRobots && (
					<meta name="robots" content={page.SeoRobots.content} />
				)}
				{page.SeoCanonical && (
					<link
						rel="canonical"
						href={page.SeoCanonical.link}
						key={"canonical"}
					/>
				)}
				{page.FAQ && faqElems.length ? (
					<script
						async
						type="application/ld+json"
						dangerouslySetInnerHTML={addJsonLdFAQ(transformFAQtoJSON(faqElems))}
					></script>
				) : null}
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={
						!page.SeoMarkup
							? addJsonLd_2({
									description: page.metaDescription
										? page.metaDescription
										: `${page.title}. Simplify your move with Star Vanlines Movers. Our team provides top-notch and stress-free moving solutions.`,
									title: page.metaTitle ? page.metaTitle : page.title,
									url: `https://starvanlinesmovers.com${basePath}/${hero.state
										?.toLowerCase()
										.split(" ")
										.join(
											"-",
										)}/${hero.slug?.toLowerCase().split(" ").join("-")}`,
								})
							: { __html: `${JSON.stringify(page.SeoMarkup.markup)}` }
					}
				></script>
				{/* <script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLDService(
						"Moving services",
						hero.title,
						hero.state ?? "Texas",
						hero.description,
						page.seoAddress,
					)}
				></script> */}
			</Head>
			<div>
				<RoutesHero store={hero} />
				{page.clientTestimonials && page.clientTestimonials.length > 0 && (
					<ClientTestimonials
						TestimonialItems={page.clientTestimonials}
						className={style.testimonialsMovingRoute}
					/>
				)}
				{page.CloudDescription && <Cloud content={page.CloudDescription} />}
				{page.PriceTable && (
					<GridTable
						column={makeColumnsFromShort(page.PriceTable)}
						altVersion
					/>
				)}
				<MainPageForm />
				<RoutesContent from={from ?? ""} to={to ?? ""} content={page.content} />
				{dataFrom.length &&
					dataTo.length &&
					dataFrom[0].attributes.Stats &&
					dataTo[0].attributes.Stats && (
						<BenefitsTable
							statsFirst={dataFrom[0].attributes.Stats.statCard}
							statsSecond={dataTo[0].attributes.Stats.statCard}
							firstTItle={page.movingFrom.data.attributes.stateName}
							secondTitle={page.movingTo.data.attributes.stateName}
						/>
					)}
				{page.FAQ && faqElems.length ? (
					<FAQ isNeedParse cards={faqElems} />
				) : null}
				{relatedInfo.length ? <ArticleRelated articles={relatedInfo} /> : null}
				<OurServices />
				<CalculatorInfo />
				{/* {dataFrom[0]?.attributes.Stats && (
					<SeoStats store={dataFrom[0].attributes.Stats} />
				)}
				{dataTo[0]?.attributes.Stats && (
					<SeoStats store={dataTo[0].attributes.Stats} />
				)} */}
				<Reviews />
				<RequestForm />
			</div>
		</>
	);
};

export default MovingRoutePage;
