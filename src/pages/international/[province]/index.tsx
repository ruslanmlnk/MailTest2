import { GetStaticProps } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";

import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
import { ConsumerReviewsCarousel } from "@/components/ConsumerReviewsCarousel/ConsumerReviewsCarousel";
import { GoogleMap } from "@/components/GoogleMap/GoogleMap";
import { GridTable } from "@/components/GridTable/GridTable";
import {
	LOCAL_DIST_TABLE_DATA,
	LONG_DIST_TABLE_DATA,
} from "@/components/GridTable/static";
import { makeColumnsFromRows } from "@/components/GridTable/utils";
import { MeetOurTeam } from "@/components/meetOurTeam/meetOurTeam";
import NavigationalMenu from "@/components/guides/navigationalMenu";
import OurServices from "@/components/mainPage/ourServices/ourServices";
import RequestForm from "@/components/mainPage/requestForm";
import Reviews from "@/components/mainPage/reviews/reviews";
import CalculatorInfo from "@/components/services/calculatorInfo";
import FAQ from "@/components/faq";
import SeoAbout from "@/components/guides/seoAbout";
import SeoHero from "@/components/guides/seoHero";
import SeoMovingRoute from "@/components/guides/seoMovingRoute";
import SeoNavigation from "@/components/guides/seoNavigation";
import { addJsonLd_2 } from "../../_document";
import style from "@/styles/css/guides/statePage.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";
import transformFAQtoJSON from "@/utils/transformFAQtoJSON";
import { Warehouses } from "@/components/contacts/lib/warehouses";
import ArticleRelated from "@/components/blog/articles/articleRelated";
import { addJsonLDService, addJsonLdFAQ } from "@/pages/_document";

const qs = require("qs");

function addJsonLd(slug: string, provinceName: string) {
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
				  "name": "International",
				  "item": "https://starvanlinesmovers.com/international"
			 },
			 {
				  "@type": "ListItem",
				  "position": 4,
				  "name": "${provinceName}",
				  "item": "https://starvanlinesmovers.com/international/${slug}"
			 }
		]
		   }`,
	};
}

const ProvincePage = ({ page, warehouses, slug }: any) => {
	console.log('Page data:', page);
	console.log('State flag data:', page.stateFlag);
	console.log('Hero data:', page.Hero);
	
	page = {
		...page.attributes,
		MeetOurTeam: page.MeetOurTeam,
		MeetOurTeamUnique: page.MeetOurTeamUnique,
		ClientTestimonial: page.clientTestimonials,
	};
    
    // console.log('Page data Local Moving Routes:', page.internationalMovingRoutes.data[0].attributes.textMf.data.attributes.cityName);

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
    console.log('Related articles:', page);
	const relatedMovingRoutes = page.RelatedRoutes.data.map((item: any) => {
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

	return (
		<>
			<Head>
				<title>{page.metaTitle || `Star Van Lines ${page.stateName} Movers`}</title>
				<meta
					name="description"
					content={page.metaDescription || `Moving to or within ${page.stateName}? Consult Star Van Lines' moving guide covering everything from packing tips to mover hiring advice, school ratings, real estate insights and more. Get insider knowledge for a seamless move to ${page.stateName}`}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href={`https://starvanlinesmovers.com/international/${slug}`} />
				<link rel="icon" href="/favicon.ico" />

				<link
					rel="canonical"
					href={`https://starvanlinesmovers.com/international/${slug}`}
				/>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd(slug, page.stateName)}
				></script>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2({
						description: page.metaDescription || `Moving to or within ${page.stateName}? Consult Star Van Lines' moving guide covering everything from packing tips to mover hiring advice, school ratings, real estate insights and more. Get insider knowledge for a seamless move to ${page.stateName}`,
						title: page.metaTitle || `Star Van Lines ${page.stateName} Movers`,
						url: `https://starvanlinesmovers.com/international/${slug}`,
					})}
				></script>
				{page.SeoCanonical?.data?.attributes?.link && (
					<link
						rel="canonical"
						href={page.SeoCanonical.data.attributes.link}
					/>
				)}
				{page.SeoRobots?.data?.attributes?.content && (
					<meta
						name="robots"
						content={page.SeoRobots.data.attributes.content}
					/>
				)}
				{page.SeoMarkup?.data?.attributes?.markup && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: page.SeoMarkup.data.attributes.markup,
						}}
					/>
				)}
				{page.seoAddress?.data?.attributes && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								"@context": "https://schema.org",
								"@type": "LocalBusiness",
								"@id": "https://starvanlinesmovers.com",
								address: {
									"@type": "PostalAddress",
									streetAddress:
										page.seoAddress.data.attributes.streetAddress,
									addressLocality:
										page.seoAddress.data.attributes.addressLocality,
									addressRegion:
										page.seoAddress.data.attributes.addressRegion,
									postalCode:
										page.seoAddress.data.attributes.postalCode,
									addressCountry:
										page.seoAddress.data.attributes.addressCountry,
								},
							}),
						}}
					/>
				)}
				{page.FAQ && page.faqElement?.length ? (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(
								addJsonLdFAQ(transformFAQtoJSON(page.FAQ.faqElement)),
							),
						}}
					/>
				) : null}
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLDService(
						"Moving services",
						page.Hero.title,
						page.stateName,
						page.Hero.description,
						page.seoAddress,
					)}
				></script>
			</Head>
			<div>
				
				{page.Hero && (
					<SeoHero
						slug={slug}
						isState
						basePath="/international"
						store={page.Hero}
						stateFlag={page.stateFlag}
						stateName={page.stateName}
					/>
				)}
				{page.ClientTestimonial && page.ClientTestimonial.length > 0 && (
					<ClientTestimonials
						TestimonialItems={page.ClientTestimonial}
						className={style.testimonials}
					/>
				)}
				{page.cities && (
					<SeoNavigation 
						cities={page.cities} 
						stateName={page.stateName} 
						basePath="/international"
					/>
				)}
				{page.About && (
					<SeoAbout
						mt={page.cities}
						store={page.About}
						stateName={page.stateName}
					/>
				)}
				<GridTable
					table_title={"Local moving rates"}
					cityName={page.stateName}
					subtitle={"moving price"}
					calcAverage
					column={
						page.LMTab ? makeColumnsFromRows(page.LMTab) : LOCAL_DIST_TABLE_DATA
					}
				/>
				<GridTable
					table_title={"Long distance moving rates"}
					subtitle={"moving price"}
					cityName={page.stateName}
					column={
						page.LDTab ? makeColumnsFromRows(page.LDTab) : LONG_DIST_TABLE_DATA
					}
				/>
				{page.internationalMovingRoutes.data[0] && (
					<SeoMovingRoute
						stateName={page.stateName}
						routes={page.internationalMovingRoutes}
						basePath="/international"
					/>
				)}
				{relatedInfo.length ? <ArticleRelated articles={relatedInfo} /> : null}
				<OurServices cityName={page.stateName} />
				<CalculatorInfo />
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
				{page.FAQ && page.faqElement?.length ? (
					<FAQ isNeedParse cards={faqElems} />
				) : null}
				<RequestForm />
			</div>
		</>
	);
};

type Params = {
	params: {
		province: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const query = qs.stringify({
		populate: {
			cities: {
				fields: ["cityName", "slug"],
				populate: {
					image: {
						fields: ["url", "alternativeText"],
					},
				},
			},
			counties: {
				fields: ["countyName", "slug"],
				populate: {
					image: {
						fields: ["url", "alternativeText"],
					},
				},
			},
			stateFlag: {
				fields: ["url", "alternativeText"],
			},
			Hero: {
				populate: {
					image: {
						fields: ["url", "alternativeText"],
					},
				},
			},
			About: {
				populate: {
					image: {
						fields: ["url", "alternativeText"],
					},
				},
			},
			Stats: {
				populate: {
					statCard: {
						populate: "*",
					},
				},
			},
			Benefits: {
				populate: {
					benefitItem: {
						populate: "*",
					},
				},
			},
			CostOfLiving: {
				populate: {
					costItem: {
						populate: "*",
					},
				},
			},
			WhoWouldBeSuited: {
				populate: {
					suitedItem: {
						populate: "*",
					},
				},
			},
			TopCities: {
				populate: {
					cityItem: {
						populate: "*",
					},
				},
			},
			Schools: {
				populate: {
					schoolItem: {
						populate: "*",
					},
				},
			},
			Universities: {
				populate: {
					universityItem: {
						populate: "*",
					},
				},
			},
			WhereToWork: {
				populate: {
					workItem: {
						populate: "*",
					},
				},
			},
			Vacation: {
				populate: {
					image: {
						fields: ["url", "alternativeText"],
					},
					vacationItem: {
						populate: "*",
					},
				},
			},
			FAQ: {
				populate: {
					faqElement: {
						populate: "*",
					},
				},
			},
			internationalMovingRoutes: {
				populate: {
					movingTo: {
						populate: {
							fields: ["cityName"],
						},
						fields: ["cityName"],
					},
				},
				fields: ["movingTo"],
			},
			cityMovingRoutes: {
				populate: {},
				fields: ["movingFrom", "movingTo", "distance"],
			},
			zip_codes: {
				populate: {},
				fields: ["zipCode"],
			},
			LMTab: {
				populate: {
					row_1: {
						fields: ["*"],
					},
					row_2: {
						fields: ["*"],
					},
					row_3: {
						fields: ["*"],
					},
					row_4: {
						fields: ["*"],
					},
					row_5: {
						fields: ["*"],
					},
					row_6: {
						fields: ["*"],
					},
				},
			},
			LDTab: {
				populate: {
					row_1: {
						fields: ["*"],
					},
					row_2: {
						fields: ["*"],
					},
					row_3: {
						fields: ["*"],
					},
					row_4: {
						fields: ["*"],
					},
					row_5: {
						fields: ["*"],
					},
					row_6: {
						fields: ["*"],
					},
					row_7: {
						fields: ["*"],
					},
				},
			},
			GoogleMap: {
				populate: {
					fields: ["src"],
				},
			},
			RelatedArticles: {
				populate: {
					image: {
						fields: ["url", "alternativeText"],
					},
					fields: ["title", "description", "updatedAt", "image", "tag", "slug"],
				},
			},
			RelatedCityMR: {
				populate: {
					image: {
						fields: ["url", "alternativeText"],
					},
					states: {
						fields: ["stateName"],
					},
					fields: ["title", "description", "updatedAt", "image", "tag"],
				},
			},
			RelatedRoutes: {
				populate: {
					image: {
						fields: ["url", "alternativeText"],
					},
					movingFrom: {
						fields: ["stateName"],
					},
					movingTo: {
						fields: ["stateName"],
					},
					fields: ["title", "description", "updatedAt", "image", "tag", "slug"],
				},
			},
			RelatedCities: {
				populate: {
					image: {
						fields: ["url", "alternativeText"],
					},
					Hero: {
						populate: {
							fields: ["title", "description"],
						},
					},
					guide: {
						popultae: {
							fields: ["stateName"],
						},
					},
				},
			},
			RelatedStates: {
				populate: {
					stateFlag: {
						fields: ["url", "alternativeText"],
					},
					Hero: {
						populate: {
							fields: ["title", "description"],
						},
					},
				},
			},
			SeoCanonical: {
				populate: {
					fields: ["link"],
				},
			},
			SeoRobots: {
				populate: {
					fields: ["content"],
				},
			},
			SeoMarkup: {
				populate: {
					fields: ["markup"],
				},
			},
			seoAddress: {
				populate: {
					fields: [
						"streetAddress",
						"addressLocality",
						"addressRegion",
						"postalCode",
						"addressCountry",
					],
				},
			},
		},
		filters: {
			slug: {
				$eq: params.province,
			},
		},
	});

	const meetOurTeamQuery = qs.stringify({
		populate: {
			MeetOurTeam: {
				populate: {
					item: {
						populate: {
							image: {
								fields: ["url", "width", "height"],
							},
						},
						fields: ["image", "name", "role", "description"],
					},
				},
			},
		},
	});

	const meetOurTeamUniqueQuery = qs.stringify({
		populate: {
			MeetOurTeam: {
				populate: {
					item: {
						populate: {
							image: {
								fields: ["url", "width", "height"],
							},
						},
						fields: ["image", "name", "role", "description"],
					},
				},
			},
		},
		filters: {
			slug: {
				$eq: params.province,
			},
		},
	});

	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/guides?${query}`,
	);

	const res2 = await fetch(
		`https://admin.starvanlinesmovers.com/api/guides?${meetOurTeamUniqueQuery}`,
	);

	const res3 = await fetch(
		`https://admin.starvanlinesmovers.com/api/meet-our-team?${meetOurTeamQuery}`,
	);

	const jsonRes = await res.json();
	console.log('API Response:', jsonRes);
	const jsonRes2 = await res2.json();
	const jsonRes3 = await res3.json();

	const testimonialsQuery = getClientTestimonialsQuery();
	const testimonialRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/client-testimonial?${testimonialsQuery}`,
	);
	const testimonialData = await testimonialRes.json();
	const clientTestimonials =
		testimonialData?.data?.attributes?.ClientTestimonials?.ClientTestimonials ||
		null;

	const page = {
		...jsonRes.data[0],
		clientTestimonials,
		stateFlag: jsonRes.data[0]?.attributes?.stateFlag || null,
		MeetOurTeamUnique:
			jsonRes2.data[0]?.attributes?.MeetOurTeam?.item.map(
				(item: any, _i: number) => {
					if (item.image.data.attributes) {
						return {
							...item,
							image: {
								src: item.image.data.attributes.url,
								height: item.image.data.attributes.height,
								width: item.image.data.attributes.width,
							},
						};
					}
					return item;
				},
			) || null,
		MeetOurTeam:
			jsonRes3.data?.attributes?.MeetOurTeam?.item.map(
				(item: any, _i: number) => {
					if (item.image.data.attributes) {
						return {
							...item,
							image: {
								src: item.image.data.attributes.url,
								height: item.image.data.attributes.height,
								width: item.image.data.attributes.width,
							},
						};
					}
					return item;
				},
			) || null,
	};

	if (!page) {
		return {
			notFound: true,
			revalidate: 60,
		};
	}

	const warehouses =
		Warehouses.filter(
			(w) => w.state === page.attributes.stateName && w.iframe,
		) || null;

	return {
		props: {
			page,
			warehouses,
			slug: params.province,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const res = await fetch(`https://admin.starvanlinesmovers.com/api/guides`);
	const result = await res.json();

	return {
		paths: result.data.map((path: any) => ({
			params: {
				province: path.attributes.slug,
			},
		})),
		fallback: "blocking",
	};
}

export default ProvincePage; 