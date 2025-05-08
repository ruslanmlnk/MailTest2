import Head from "next/head";
import Script from "next/script";

import { GoogleMap } from "@/components/GoogleMap/GoogleMap";
import { GridTable } from "@/components/GridTable/GridTable";
import {
	LOCAL_DIST_TABLE_DATA,
	LONG_DIST_TABLE_DATA,
} from "@/components/GridTable/static";
import { makeColumnsFromRows } from "@/components/GridTable/utils";
import ArticleRelated from "@/components/blog/articles/articleRelated";
import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
import { Warehouses } from "@/components/contacts/lib/warehouses";
import FAQ from "@/components/faq";
import SeoAbout from "@/components/guides/seoAbout";
import SeoBenefits from "@/components/guides/seoBenefits";
import SeoCost from "@/components/guides/seoCost";
import SeoHero from "@/components/guides/seoHero";
import SeoMovingRoute from "@/components/guides/seoMovingRoute";
import SeoNavigation from "@/components/guides/seoNavigation";
import SeoStats from "@/components/guides/seoStats";
import SeoVacation from "@/components/guides/seoVacation";
import SeoWhereToWork from "@/components/guides/seoWhereToWork";
import SeoWhodBeSuited from "@/components/guides/seoWhodBeSuited";
import OurServices from "@/components/mainPage/ourServices/ourServices";
import RequestForm from "@/components/mainPage/requestForm";
import Reviews from "@/components/mainPage/reviews/reviews";
import { MeetOurTeam } from "@/components/meetOurTeam/meetOurTeam";
import CalculatorInfo from "@/components/services/calculatorInfo";
import { addJsonLDService, addJsonLdFAQ, addJsonLd_2 } from "@/pages/_document";
import style from "@/styles/css/guides/statePage.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";
import transformFAQtoJSON from "@/utils/transformFAQtoJSON";

const qs = require("qs");
const SeoPage = ({ page, warehouses, slug }: any) => {
	page = {
		...page.attributes,
		MeetOurTeam: page.MeetOurTeam,
		MeetOurTeamUnique: page.MeetOurTeamUnique,
		ClientTestimonial: page.clientTestimonials,
	};

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

	// console.log(page.FAQ);

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
						  "name": "${page.stateName}",
						  "item": "https://starvanlinesmovers.com/locations/${slug}"
					 }
				]
				   }`,
		};
	}

	return (
		<>
			<Head>
				<title>
					{`${
						page.metaTitle
							? page.metaTitle
							: `Trusted Movers in ${page.stateName}`
					}`}
				</title>
				<meta
					name="description"
					content={
						page.metaDescription
							? page.metaDescription
							: `Moving to ${page.stateName} Trust Star Van Lines Movers for a reliable and efficient relocation. Our experienced team specializes in long-distance moves, ensuring a seamless transition to your new home in ${page.stateName}.`
					}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="canonical"
					href={`https://starvanlinesmovers.com/locations/${slug}`}
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
										: `Moving to ${page.stateName}? Trust Star Van Lines Movers for a reliable and efficient relocation. Our experienced team specializes in long-distance moves, ensuring a seamless transition to your new home in ${page.stateName}.`,
									title: `${
										page.metaTitle
											? page.metaTitle
											: `Trusted Movers in ${page.stateName}`
									}`,
									url: `https://starvanlinesmovers.com/locations/${slug}`,
								})
							: { __html: `${JSON.stringify(page.SeoMarkup.markup)}` }
					}
				></script>
				{page.FAQ && page.faqElement?.length ? (
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
					<SeoNavigation cities={page.cities} stateName={page.stateName} />
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
				{/* {page.Stats && <SeoStats store={page.Stats} />}
				{page.Benefits && <SeoBenefits store={page.Benefits} />}
				{page.CostOfLiving && <SeoCost store={page.CostOfLiving} />}
				{page.WhoWouldBeSuited && (
					<SeoWhodBeSuited store={page.WhoWouldBeSuited} />
				)}
				<CalculatorInfo /> */}
				{/* Removed in SVL-43 */}
				{/* {page.TopCities && <SeoTopCities store={page.TopCities} />} */}
				{/* {page.Schools && <SeoEducation store={page.Schools} />}
				{page.Universities && <SeoEducation store={page.Universities} />} */}
				{/* {page.WhereToWork && (
					<SeoWhereToWork name={page.stateName} store={page.WhereToWork} />
				)} */}
				{page.movingRoutes.data[0] && (
					<SeoMovingRoute
						stateName={page.stateName}
						routes={page.movingRoutes}
					/>
				)}

				{/* {page.Vacation && <SeoVacation store={page.Vacation} />} */}
				{relatedInfo.length ? <ArticleRelated articles={relatedInfo} /> : null}
				<OurServices cityName={page.stateName} />
				<CalculatorInfo />
				<Reviews />
				{/* {warehouses && (
					<MapWarehouses
						warehouses={warehouses[0]}
						stateName={page.stateName}
					/>
				)} */}
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
				{/* // TODO 
					NEW SLIDER WITH SERVICES
					SUBSCRIBE TO INST
					ZIP CODES
				*/}
			</div>
		</>
	);
};

type Params = {
	params: {
		state: string;
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
					textList: {
						populate: "*",
					},
					image: {
						fields: ["url", "alternativeText"],
					},
				},
			},
			CostOfLiving: {
				populate: {
					tab: {
						populate: "*",
					},
				},
			},
			WhoWouldBeSuited: {
				populate: {
					contentCard: {
						populate: {
							icon: {
								fields: ["url", "alternativeText"],
							},
						},
					},
				},
			},
			TopCities: {
				populate: {
					textList: {
						populate: "*",
					},
					image: {
						fields: ["url", "alternativeText"],
					},
				},
			},
			Schools: {
				populate: {
					educationalInstitution: {
						populate: {
							icon: {
								fields: ["url", "alternativeText"],
							},
						},
					},
				},
			},
			Universities: {
				populate: {
					educationalInstitution: {
						populate: {
							icon: {
								fields: ["url", "alternativeText"],
							},
						},
					},
				},
			},
			WhereToWork: {
				populate: {
					textList: {
						populate: "*",
					},
					image: {
						fields: ["url", "alternativeText"],
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
			movingRoutes: {
				populate: {
					movingTo: {
						populate: {
							fields: ["stateName"],
						},
						fields: ["stateName"],
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
				$eq: params.state,
			}
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
				$eq: params.state,
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
	console.log("jsonRes:", jsonRes.data);
	const jsonRes2 = await res2.json();
	const jsonRes3 = await res3.json();
	console.log(
		`https://admin.starvanlinesmovers.com/api/meet-our-team?${meetOurTeamUniqueQuery}`,
	);

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
			slug: params.state,
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
				state: path.attributes.slug,
			},
		})),
		fallback: "blocking",
	};
}

export default SeoPage;
