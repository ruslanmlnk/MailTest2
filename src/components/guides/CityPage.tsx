import Head from "next/head";
import Script from "next/script";

import { addJsonLDService, addJsonLdFAQ, addJsonLd_2 } from "@/pages/_document";
import style from "@/styles/css/guides/statePage.module.css";
import transformFAQtoJSON from "@/utils/transformFAQtoJSON";

import { GoogleMap } from "../GoogleMap/GoogleMap";
import { GridTable } from "../GridTable/GridTable";
import {
	LOCAL_DIST_TABLE_DATA,
	LONG_DIST_TABLE_DATA,
} from "../GridTable/static";
import { makeColumnsFromRows } from "../GridTable/utils";
import ArticleRelated from "../blog/articles/articleRelated";
import { ClientTestimonials } from "../clientTestimonials/clientTestimonials";
import FAQ from "../faq";
import OurServices from "../mainPage/ourServices/ourServices";
import RequestForm from "../mainPage/requestForm";
import Reviews from "../mainPage/reviews/reviews";
import { MeetOurTeam } from "../meetOurTeam/meetOurTeam";
import CalculatorInfo from "../services/calculatorInfo";
import SeoAbout from "./seoAbout";
import SeoBenefits from "./seoBenefits";
import SeoCityMovingRoutes from "./seoCityMovingRoutes";
import SeoHero from "./seoHero";

interface CityPageProps {
	page: any;
	slug: string;
	basePath?: string;
}

const CityPage = ({ page, slug, basePath = "/locations" }: CityPageProps) => {
	// console.log(page);
	const faqElems =
		page.FAQ?.faqElement.map((elem: any) => {
			return {
				title: elem.question,
				content: elem.answer,
			};
		}) || null;

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
	const relatedMovingRoutes = page.RelatedRoutes.data.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: "Routes",
			slug: `${item.attributes.movingFrom.data.attributes.stateName.toLowerCase().split(" ").join("-")}/${item.attributes.movingFrom.data.attributes.stateName.split(" ").join("-").toLowerCase()}-to-${item.attributes.movingTo.data.attributes.stateName.split(" ").join("-").toLowerCase()}`,
			needSlugify: true,
		};
	});
	const relateCityMR = page.RelatedCityMR.data.map((item: any) => {
		const stateSlug = item.attributes.states.data[0].attributes.stateName
			.split(" ")
			.join("-")
			.toLowerCase();
		const routeSlug = `${item.attributes.movingFrom.split(" ").join("-").toLowerCase()}-to-${item.attributes.movingTo.split(" ").join("-").toLowerCase()}-move`;
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
			slug: `${item.attributes.guide.data.attributes.slug.split(" ").join("-").toLowerCase()}/${item.attributes.cityName.split(" ").join("-").toLowerCase()}`,
			needSlugify: true,
		};
	});

	const relatedInfo = relatedArticles.concat(
		relateCityMR,
		relatedMovingRoutes,
		relatedStates,
		relatedCities,
	);

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
					  "name": "${basePath === '/locations' ? 'Locations' : 'International'}",
					  "item": "https://starvanlinesmovers.com${basePath}/"
				 },
				 {
					  "@type": "ListItem",
					  "position": 3,
					  "name": "${page.guide.data.attributes.stateName}",
					  "item": "https://starvanlinesmovers.com${basePath}/${page.guide.data.attributes.stateName.toLocaleLowerCase().split(" ").join("-")}/"
				 },
				 {
					  "@type": "ListItem",
					  "position": 4,
					  "name": "${page.cityName}",
					  "item": "https://starvanlinesmovers.com${basePath}/${page.guide.data.attributes.stateName.toLocaleLowerCase().split(" ").join("-")}/${slug}"
				 }
			]
	   		}`,
		};
	}

	return (
		<>
			<Head>
				<title>{page.metaTitle ? page.metaTitle : page.Hero.title}</title>
				<meta
					name="description"
					content={
						page.metaDescription
							? page.metaDescription
							: `Moving to ${page.cityName}? Trust Star Van Lines Movers for a reliable and efficient relocation. Our experienced team specializes in long-distance moves, ensuring a seamless transition to your new home in ${page.cityName}.`
					}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

				<link
					rel="canonical"
					href={`https://starvanlinesmovers.com${basePath}/${page.guide.data.attributes.stateName.toLowerCase().split(" ").join("-")}/${slug}`}
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
									url: `https://starvanlinesmovers.com${basePath}/${page.guide.data.attributes.stateName.toLowerCase().split(" ").join("-")}/${slug}`,
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
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLDService(
						"Moving services",
						page.Hero.title,
						page.guide.data.attributes.stateName ?? "Texas",
						page.Hero.description,
						page.seoAddress,
					)}
				></script>
			</Head>
			<div>
				{page.Hero && (
					<SeoHero
						store={page.Hero}
						slug={slug}
						stateFlag={page.image}
						stateName={page.guide.data.attributes.stateName}
						cityTitle={page.cityName}
						basePath={basePath}
					/>
				)}
				{page.clientTestimonials && page.clientTestimonials.length > 0 && (
					<div className={style.testimonialsBlueBg}>
						<ClientTestimonials
							TestimonialItems={page.clientTestimonials}
							className={style.testimonials}
						/>
					</div>
				)}
				{page.About && (
					<SeoAbout special store={page.About} stateName={page.cityName} />
				)}

				<GridTable
					table_title={"Local moving rates"}
					subtitle={"moving price"}
					calcAverage
					column={
						page.guide.data.attributes.LMTab
							? makeColumnsFromRows(page.guide.data.attributes.LMTab)
							: LOCAL_DIST_TABLE_DATA
					}
					cityName={page.cityName}
				/>

				<GridTable
					table_title={"Long distance moving rates"}
					subtitle={"moving price"}
					column={
						page.guide.data.attributes.LDTab
							? makeColumnsFromRows(page.guide.data.attributes.LDTab)
							: LONG_DIST_TABLE_DATA
					}
					cityName={page.cityName}
				/>

				{/* {page.Stats && <SeoStats store={page.Stats} />}
				{page.Benefits && <SeoBenefits store={page.Benefits} />}
				{page.CostOfLiving && <SeoCost store={page.CostOfLiving} />}
				{page.WhoWouldBeSuited && (
					<SeoWhodBeSuited store={page.WhoWouldBeSuited} />
				)} */}
				<CalculatorInfo />
				{/* {page.TopCities && (
					<SeoTopCities store={page.TopCities} subtitle="neighborhoods" />
				)} */}
				{page.guide.data.attributes.cityMovingRoutes.data[0] && (
					<SeoCityMovingRoutes
						store={page.guide.data.attributes.cityMovingRoutes.data}
						stateName={page.guide.data.attributes.stateName}
						isCityPage
						cityName={page.cityName}
						basePath={basePath}
					/>
				)}
				{/* {page.Schools && <SeoEducation store={page.Schools} />}
				{page.Universities && <SeoEducation store={page.Universities} />} */}
				{/* {page.WhereToWork && <SeoWhereToWork store={page.WhereToWork} />}
				{page.Vacation && <SeoVacation store={page.Vacation} />} */}
				{relatedInfo.length ? <ArticleRelated articles={relatedInfo} /> : null}
				<OurServices cityName={page.cityName} />
				{/* <CalculatorInfo /> */}
				<Reviews />
				<div className={style.meetOurTeam}>
					{!page.MeetOurTeamUnique &&
						page.MeetOurTeam &&
						page.MeetOurTeam.length > 0 && (
							<MeetOurTeam TeamItems={page.MeetOurTeam} />
						)}
					{page.MeetOurTeamUnique && page.MeetOurTeamUnique.length > 0 && (
						<MeetOurTeam TeamItems={page.MeetOurTeamUnique} />
					)}
				</div>
				{page.GoogleMap && <GoogleMap src={page.GoogleMap.src} />}
				{page.FAQ && faqElems?.length ? (
					<FAQ isNeedParse cards={faqElems} />
				) : null}
				<RequestForm />
			</div>
		</>
	);
};

export default CityPage;
