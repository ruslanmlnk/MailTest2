import slugify from "slugify";

import CityPage from "@/components/guides/CityPage";
import CityRoutePage from "@/components/guides/CityRoutePage";
import MovingRoutePage from "@/components/guides/MovingRoutePage";
import ZipCodePage from "@/components/guides/ZipCodePage";
import { capitalizeSlug } from "@/lib/capitalizeSlug";
import { unslugify } from "@/lib/unslugify";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";

const qs = require("qs");

const SeoCityPage = ({
	page,
	pageType,
	slug,
	state,
	dataFrom,
	dataTo,
}: any) => {
	page = {
		...page.attributes,
		MeetOurTeam: page.MeetOurTeam,
		clientTestimonials: page.clientTestimonials,
	};

	if (pageType === "cityRoute") {
		return (
			<CityRoutePage
				slug={slug}
				page={page}
				state={state}
				pageType={pageType}
				dataFrom={dataFrom}
				dataTo={dataTo}
			/>
		);
	}

	if (pageType === "city") {
		return <CityPage slug={slug} page={page} />;
	}

	if (pageType === "movingRoute") {
		return (
			<MovingRoutePage
				slug={slug}
				page={page}
				state={state}
				dataFrom={dataFrom}
				dataTo={dataTo}
			/>
		);
	}

	// if (pageType === "zipCode") {
	// 	return <ZipCodePage page={page} />;
	// }

	// return {
	// 	notFound: true,
	// };
};

type Params = {
	params: {
		slug: string;
		state: string;
	};
};

type pageType = "city" | "cityRoute" | "movingRoute" | "zipCode";

export async function getStaticProps({ params }: Params) {
	let queryString = "";
	let pageType: pageType = "city";

	if (!isNaN(Number(params.slug))) {
		pageType = "zipCode";
		// NextResponse.redirect("/404");

		return {
			notFound: true,
			revalidate: 60,
		};

		// const zipCodeQuery = qs.stringify({
		// 	populate: {
		// 		guide: {
		// 			fields: ["stateName"],
		// 		},
		// 	},
		// 	fields: [
		// 		"zipCode",
		// 		"title",
		// 		"description",
		// 		"content",
		// 		"guide",
		// 		"metaTitle",
		// 		"metaDescription",
		// 	],
		// 	filters: {
		// 		zipCode: {
		// 			$containsi: unslugify(params.slug),
		// 		},
		// 		guide: {
		// 			stateName: {
		// 				$containsi: unslugify(params.state),
		// 			},
		// 		},
		// 	},
		// 	pagination: {
		// 		page: 1,
		// 		pageSize: 1000,
		// 	},
		// });

		// queryString = `https://admin.starvanlinesmovers.com/api/zip-codes?${zipCodeQuery}`;
	} else if (
		params.slug.includes("-to-") &&
		params.slug.includes(params.state) &&
		!params.slug.includes("-move")
	) {
		pageType = "movingRoute";
		const slug = params.slug.split("-to-");
		const movingRoutesQuery = qs.stringify({
			populate: {
				movingFrom: {
					populate: {
						stateFlag: {
							fields: ["url", "alternativeText"],
						},
					},
					fields: ["stateName", "stateFlag"],
				},
				movingTo: {
					populate: {
						stateFlag: {
							fields: ["url", "alternativeText"],
						},
					},
					fields: ["stateName", "stateFlag"],
				},
				FAQ: {
					populate: {
						faqElement: {
							populate: "*",
						},
					},
				},
				RelatedArticles: {
					fields: ["title", "updatedAt", "tag", "slug"],
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
				RelatedCityRoutes: {
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
				RelatedMovingRoutes: {
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
						fields: [
							"title",
							"description",
							"updatedAt",
							"image",
							"tag",
							"slug",
						],
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
								fields: ["title"],
							},
						},
					},
					fields: ["stateName", "updatedAt", "slug"],
				},
				PriceTable: {
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
			fields: [
				"movingFrom",
				"movingTo",
				"title",
				"description",
				"content",
				"metaTitle",
				"metaDescription",
				"CloudDescription",
			],
			filters: {
				movingFrom: {
					stateName: {
						$containsi: unslugify(slug[0]),
					},
				},
				movingTo: {
					stateName: {
						$containsi: unslugify(slug[1]),
					},
				},
			},
			pagination: {
				page: 1,
				pageSize: 1000,
			},
		});

		queryString = `https://admin.starvanlinesmovers.com/api/moving-routes?${movingRoutesQuery}`;
	} else if (params.slug.includes("-to-")) {
		if (!params.slug.includes("-move"))
			return {
				notFound: true,
				revalidate: 60,
			};
		pageType = "cityRoute";

		const slug = params.slug.replace("-move", "").split("-to-");
		const cityRoutesQuery = qs.stringify({
			populate: {
				movingFrom: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
					fields: ["cityName", "image"],
				},
				movingTo: {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
					},
					fields: ["cityName", "image"],
				},
				states: {
					fields: ["stateName"],
				},
				FAQ: {
					populate: {
						faqElement: {
							populate: "*",
						},
					},
				},
				RelatedArticles: {
					fields: ["title", "updatedAt", "tag", "slug"],
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
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
				RelatedMovingRoutes: {
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
						fields: [
							"title",
							"description",
							"updatedAt",
							"image",
							"tag",
							"slug",
						],
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
								fields: ["title"],
							},
						},
					},
					fields: ["stateName", "updatedAt", "slug"],
				},
				PriceTable: {
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
			fields: [
				"movingFrom",
				"movingTo",
				"title",
				"description",
				"content",
				"states",
				"metaTitle",
				"metaDescription",
				"CloudDescription",
			],
			filters: {
				movingFrom: {
					$containsi: unslugify(slug[0]),
				},
				movingTo: {
					$containsi: unslugify(slug[1]),
				},
				states: {
					stateName: {
						$containsi: unslugify(params.state),
					},
				},
			},
			pagination: {
				page: 1,
				pageSize: 1000,
			},
		});

		queryString = `https://admin.starvanlinesmovers.com/api/city-moving-routes?${cityRoutesQuery}`;
	} else {
		pageType = "city";

		const cityLocalMovingRoutesQuery = qs.stringify({
			populate: {
				cityMovingRoutes: {
					populate: {},
					fields: ["movingFrom", "movingTo", "distance"],
				},
			},
		});

		const cityPageQuery = qs.stringify({
			populate: {
				guide: {
					fields: ["stateName", "slug"],
					populate: {
						cityMovingRoutes: {
							populate: {},
							fields: ["movingFrom", "movingTo", "distance"],
							filters: {
								$or: [
									{
										movingFrom: {
											$containsi: unslugify(params.slug),
										},
									},
									{
										movingTo: {
											$containsi: unslugify(params.slug),
										},
									},
								],
							},
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
						image: {
							fields: ["url", "alternativeText"],
						},
					},
				},
				fields: ["cityName"],
				image: {
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

				GoogleMap: {
					populate: {
						fields: ["src"],
					},
				},
				RelatedArticles: {
					fields: ["title", "updatedAt", "tag", "slug"],
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
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
						fields: [
							"title",
							"description",
							"updatedAt",
							"image",
							"tag",
							"slug",
						],
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
								fields: ["title"],
							},
						},
					},
					fields: ["stateName", "updatedAt", "slug"],
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
				guide: {
					stateName: {
						$containsi: unslugify(params.state),
					},
				},
				cityName: {
					$containsi: unslugify(params.slug),
				},
			},
		});

		queryString = `https://admin.starvanlinesmovers.com/api/cities?${cityPageQuery}`;
	}

	const res = await fetch(queryString);
	const jsonRes = await res.json();

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
		filters: {
			cityName: {
				$eq: capitalizeSlug(params.slug),
			},
		},
	});
	const res2 = await fetch(
		`https://admin.starvanlinesmovers.com/api/cities?${meetOurTeamQuery}`,
	);
	const res3 = await fetch(
		`https://admin.starvanlinesmovers.com/api/meet-our-team?${meetOurTeamQuery}`,
	);

	const jsonRes2 = await res2.json();
	const jsonRes3 = await res3.json();

	let page = jsonRes.data[0] || null;

	// console.log("jsonRes2: ", jsonRes2.data);
	// console.log("slug: ", params.slug);

	const testimonialsQuery = getClientTestimonialsQuery();
	const testimonialRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/client-testimonial?${testimonialsQuery}`,
	);
	const testimonialData = await testimonialRes.json();
	const clientTestimonials =
		testimonialData?.data?.attributes?.ClientTestimonials?.ClientTestimonials ||
		null;

	let dataTo = [];
	let dataFrom = [];

	if (pageType == "city") {
		page = {
			...jsonRes.data.find(
				(item: any) =>
					slugify(item.attributes.cityName).toLowerCase() == params.slug,
			),
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
			clientTestimonials,
		};

		// console.log("page.MeetOurTeam: ", page.MeetOurTeam);
	}

	if (pageType == "cityRoute") {
		const getStatsQueryFrom = qs.stringify({
			populate: {
				Stats: {
					populate: {
						statCard: {
							populate: "*",
						},
					},
				},
			},
			fields: [""],
			filters: {
				slug: {
					$containsi: page?.attributes.movingFrom
						.toLowerCase()
						.split(" ")
						.join("-"),
				},
			},
		});
		const getStatsQueryTo = qs.stringify({
			populate: {
				Stats: {
					populate: {
						statCard: {
							populate: "*",
						},
					},
				},
			},
			fields: [""],
			filters: {
				slug: {
					$containsi: page?.attributes.movingTo
						.toLowerCase()
						.split(" ")
						.join("-"),
				},
			},
		});
		const resFrom = await fetch(
			`https://admin.starvanlinesmovers.com/api/articles?${getStatsQueryFrom}`,
		);
		dataFrom = await resFrom.json();
		dataFrom = dataFrom.data;
		const resTo = await fetch(
			`https://admin.starvanlinesmovers.com/api/articles?${getStatsQueryTo}`,
		);

		dataTo = await resTo.json();
		dataTo = dataTo.data;
		if (page) {
			page.StatsFrom = dataFrom;
			page.StatsTo = dataTo;
		}
	}

	if (pageType == "movingRoute") {
		page = jsonRes.data.find(
			(item: any) =>
				slugify(
					`${item.attributes.movingFrom.data.attributes.stateName} to ${item.attributes.movingTo.data.attributes.stateName}`,
				).toLowerCase() == params.slug,
		);
		const getStatsQueryFrom = qs.stringify({
			populate: {
				Stats: {
					populate: {
						statCard: {
							populate: "*",
						},
					},
				},
			},
			fields: [""],
			filters: {
				slug: {
					$containsi: page.attributes.movingFrom.data.attributes.stateName
						.toLowerCase()
						.split(" ")
						.join("-"),
				},
			},
		});
		const getStatsQueryTo = qs.stringify({
			populate: {
				Stats: {
					populate: {
						statCard: {
							populate: "*",
						},
					},
				},
			},
			fields: [""],
			filters: {
				slug: {
					$containsi: page.attributes.movingTo.data.attributes.stateName
						.toLowerCase()
						.split(" ")
						.join("-"),
				},
			},
		});

		const resFrom = await fetch(
			`https://admin.starvanlinesmovers.com/api/articles?${getStatsQueryFrom}`,
		);
		dataFrom = await resFrom.json();

		dataFrom = dataFrom.data;
		const resTo = await fetch(
			`https://admin.starvanlinesmovers.com/api/articles?${getStatsQueryTo}`,
		);
		dataTo = await resTo.json();
		dataTo = dataTo.data;

		page.StatsFrom = dataFrom;
		page.StatsTo = dataTo;
	}

	page.clientTestimonials = clientTestimonials;

	if (!page) {
		return {
			notFound: true,
			revalidate: 60,
		};
	}

	return {
		props: {
			jsonRes,
			page,
			pageType,
			slug: params.slug,
			state: params.state,
			dataFrom,
			dataTo,
			clientTestimonials,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const zipCodePathQuery = qs.stringify({
		populate: {
			guide: {
				fields: ["stateName"],
			},
		},
		pagination: {
			page: 1,
			pageSize: 1000,
		},
	});

	const cityPathQuery = qs.stringify({
		populate: {
			guide: {
				fields: ["stateName"],
			},
		},
		pagination: {
			page: 1,
			pageSize: 1000,
		},
	});

	const cityRoutePathQuery = qs.stringify({
		populate: {
			movingFrom: {
				fields: ["cityName"],
			},
			movingTo: {
				fields: ["cityName"],
			},
			states: {
				fields: ["stateName"],
			},
		},
		fields: ["movingFrom", "movingTo"],
		pagination: {
			page: 1,
			pageSize: 1000,
		},
	});

	const movingRoutePathQuery = qs.stringify({
		populate: {
			movingFrom: {
				fields: ["stateName"],
			},
			movingTo: {
				fields: ["stateName"],
			},
		},
		fields: ["movingFrom", "movingTo"],
		pagination: {
			page: 1,
			pageSize: 1000,
		},
	});

	const cityRoutesRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/city-moving-routes?${cityRoutePathQuery}`,
	);
	const jsonCityRoutesRes = await cityRoutesRes.json();

	const cityRoutePaths = jsonCityRoutesRes.data.map((cityRoute: any) => ({
		params: {
			slug: `${slugify(cityRoute.attributes.movingFrom, {
				lower: true,
			})}-to-${slugify(cityRoute.attributes.movingTo, {
				lower: true,
			})}-move`,
			state: slugify(cityRoute.attributes.states.data[0].attributes.stateName, {
				lower: true,
			}),
		},
	}));

	const cityRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/cities?${cityPathQuery}`,
	);
	const jsonCityRes = await cityRes.json();

	const cityPaths = jsonCityRes.data.map((city: any) => ({
		params: {
			slug: slugify(city.attributes.cityName, { lower: true }),
			state: slugify(city.attributes.guide.data.attributes.stateName, {
				lower: true,
			}),
		},
	}));

	const movingRoutesRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/moving-routes?${movingRoutePathQuery}`,
	);
	const jsonMovingRoutesRes = await movingRoutesRes.json();

	const movingRoutePaths = jsonMovingRoutesRes.data.map((movingRoute: any) => ({
		params: {
			slug: `${slugify(
				movingRoute.attributes.movingFrom.data.attributes.stateName,
				{
					lower: true,
				},
			)}-to-${slugify(
				movingRoute.attributes.movingTo.data.attributes.stateName,
				{
					lower: true,
				},
			)}`,
			state: slugify(
				movingRoute.attributes.movingFrom.data.attributes.stateName,
				{
					lower: true,
				},
			),
		},
	}));

	// const zipCodeRes = await fetch(
	// 	`https://admin.starvanlinesmovers.com/api/zip-codes?${zipCodePathQuery}`,
	// );
	// const jsonZipCodesRes = await zipCodeRes.json();

	// const zipCodesPaths = jsonZipCodesRes.data.map((zipCode: any) => ({
	// 	params: {
	// 		slug: slugify(zipCode.attributes.zipCode, { lower: true }),
	// 		state: slugify(zipCode.attributes.guide.data.attributes.stateName, {
	// 			lower: true,
	// 		}),
	// 	},
	// }));

	return {
		paths: cityPaths.concat(movingRoutePaths).concat(cityRoutePaths),
		fallback: "blocking",
	};
}

export default SeoCityPage;
