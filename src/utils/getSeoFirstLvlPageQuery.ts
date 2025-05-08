const qs = require("qs");
export default function getSeoFirstLvlPageQuery(slug: string) {
	return qs.stringify({
		populate: {
			image: {
				fields: ["url", "alternativeText", "width", "height"],
			},
			DynamicBlocks: {
				on: {
					"seo-pages.stats": {
						populate: "*",
					},
					"articles-components.article-author": {
						populate: "*",
					},
					"articles-components.additionl-sources": {
						populate: "*",
					},
					"seo-pages.cost-of-living": {
						populate: "*",
					},
					"seo-pages.benefits": {
						populate: "*",
					},
					"seo-pages.who-would-be-suited": {
						populate: {
							contentCard: {
								populate: "*",
							},
						},
					},
					"seo-pages.top-cities": {
						populate: "*",
					},
					"seo-pages.education": {
						populate: {
							educationalInstitution: {
								populate: "*",
							},
						},
					},
					"seo-pages.where-to-work": {
						populate: "*",
					},
					"seo-pages.article-content": {
						populate: "*",
					},
					"seo-pages.vacation": {
						populate: {
							vacationItem: {
								populate: "*",
							},
						},
					},
				},
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
			FAQ: {
				populate: {
					faqElement: {
						populate: "*",
					},
				},
			},

			RelatedArticles: {
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
			AdditionalSources: {
				populate: {
					fields: ["text"],
					Socials: {
						populate: {
							fields: ["YouTube", "Wiki", "Facebook", "Global"],
						},
					},
				},
			},
		},
		fields: [
			"title",
			"metaTitle",
			"metaDescription",
			"slug",
			"description",
			"updatedAt",
			"image",
			"tag",
			"CloudDescription",
			"FAQ",
		],
		pagination: {
			page: 1,
			pageSize: 500,
		},
		filters: {
			slug: {
				$eqi: slug,
			},
		},
		sort: ["updatedAt:desc"],
	});
}
