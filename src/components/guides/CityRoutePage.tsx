import Head from "next/head";
import Script from "next/script";

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
import CalculatorInfo from "../services/calculatorInfo";
import RoutesContent from "./california-movers/routesContent";
import RoutesHero, { IRouteHero } from "./california-movers/routesHero";

const CityRoutePage = ({
	page,
	slug,
	state,
	pageType,
	dataFrom,
	dataTo,
	basePath = "/locations",
}: any) => {
	const hero: IRouteHero = {
		title: page.title,
		description: page.description,
		movingFromName: page.movingFrom,
		movingToName: page.movingTo,
		isCityPage: true,
		slug: slug,
		state: state,
		pageType: pageType,
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
					.split(" ")
					.join("-")
					.toLowerCase() +
				"-to-" +
				item.attributes.movingTo.data.attributes.stateName
					.split(" ")
					.join("-")
					.toLowerCase(),
			needSlugify: true,
		};
	});
	const relateCityMR = page.RelatedCityMR.data.map((item: any) => {
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
		relateCityMR,
		relatedMovingRoutes,
		relatedStates,
		relatedCities,
	);

	const faqElems =
		page.FAQ?.faqElement.map((elem: any) => {
			return {
				title: elem.question,
				content: elem.answer,
			};
		}) || null;

	const from = page.movingFrom;
	const to = page.movingTo;

	// console.log(slug);
	// console.log(page);

	function addJsonLd() {
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
					  "item": "https://starvanlinesmovers.com/locations/"
				 },
				 {
					  "@type": "ListItem",
					  "position": 3,
					  "name": "${hero.movingFromName}",
					  "item": "https://starvanlinesmovers.com/locations/${hero.state?.toLowerCase().split(" ").join("-")}/${hero.movingFromName.toLowerCase().split(" ").join("-")}"
				 },
				 {
					  "@type": "ListItem",
					  "position": 4,
					  "name": "${hero.movingFromName} to ${hero.movingToName} Movers",
					  "item": "https://starvanlinesmovers.com/locations/${hero.state?.toLowerCase().split(" ").join("-")}/${hero.slug?.toLowerCase().split(" ").join("-")}"
				 }
			]
	   		}`,
		};
	}

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

				<link
					rel="canonical"
					href={`https://starvanlinesmovers.com${basePath}/${page.states.data[0].attributes.stateName.toLowerCase().split(" ").join("-")}/${slug}`}
				/>

				<link rel="icon" href="/favicon.ico" />
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
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd()}
				></script>
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
										.join("-")}/${hero.slug?.toLowerCase().split(" ").join("-")}`,
								})
							: { __html: `${JSON.stringify(page.SeoMarkup.markup)}` }
					}
				></script>
				{page.FAQ && faqElems?.length ? (
					<script
						async
						type="application/ld+json"
						dangerouslySetInnerHTML={addJsonLdFAQ(transformFAQtoJSON(faqElems))}
					></script>
				) : null}
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
						className={style.testimonialsCityRoute}
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
				<RoutesContent
					from={from}
					to={to}
					content={page.content}
					isCity
					cityStateName={page.states?.data?.[0].attributes?.stateName}
				/>
				{dataFrom.length &&
					dataTo.length &&
					dataFrom[0].attributes.Stats &&
					dataTo[0].attributes.Stats && (
						<BenefitsTable
							statsFirst={dataFrom[0].attributes.Stats.statCard}
							statsSecond={dataTo[0].attributes.Stats.statCard}
							firstTItle={page.movingFrom}
							secondTitle={page.movingTo}
						/>
					)}
				{page.FAQ && faqElems?.length ? (
					<FAQ isNeedParse cards={faqElems} />
				) : null}
				{relatedInfo.length ? <ArticleRelated articles={relatedInfo} /> : null}
				<OurServices />
				<CalculatorInfo />
				<Reviews />
				<RequestForm />
			</div>
		</>
	);
};

export default CityRoutePage;
