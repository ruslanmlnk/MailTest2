import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Script from "next/script";
import { ParsedUrlQuery } from "querystring";

import { GridTable } from "@/components/GridTable/GridTable";
import { makeColumnsFromShort } from "@/components/GridTable/utils";
import ArticleCTAWide from "@/components/blog/articles/articleCTAWide";
import ArticleContent from "@/components/blog/articles/articleContent";
import ArticleHero from "@/components/blog/articles/articleHero";
import ArticleRelated from "@/components/blog/articles/articleRelated";
import ClientTestimonials from "@/components/clientTestimonials/clientTestimonials";
import { Cloud } from "@/components/cloud/cloud";
import FAQ from "@/components/faq";
import { IArticle } from "@/store/blogStore";
import { IUsers } from "@/store/usersStore";
import style from "@/styles/css/blog/blog.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";
import transformFAQtoJSON from "@/utils/transformFAQtoJSON";

import { addJsonLdFAQ, addJsonLd_2 } from "../_document";

const qs = require("qs");

const Article = ({
	content,
	article,
	articles,
	author,
	table,
	cloudDescription,
	faq,
	relatedArticles,
	relatedCityRoutes,
	relatedRoutes,
	relatedStates,
	relatedCities,
	metaSeo,
	clientTestimonials,
	randomArticles,
}: any) => {
	const articleAuthor: IUsers = {
		uid: 1,
		avatar: author?.avatar?.data?.attributes.url || "",
		description: author?.description,
		role: author?.role,
		name: author?.name,
		socials: author?.socialLinks,
	};

	const relatedArticless = relatedArticles.data.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: item.attributes.tag,
			slug: item.attributes.slug,
		};
	});
	const randomArticless = randomArticles.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: item.attributes.tag,
			slug: item.attributes.slug,
		};
	});
	const relatedMovingRoutess = relatedRoutes.data.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: "Routes",
			slug:
				item.attributes.movingFrom.data.attributes.stateName
					.split(" ")
					.join("-")
					.toLowerCase() +
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
	const relatedCityRoutess = relatedCityRoutes.data.map((item: any) => {
		const stateSlug = item.attributes.states.data[0].attributes.stateName
			.split(" ")
			.join("-")
			.toLowerCase();
		const routeSlug =
			item.attributes.movingFrom.split(" ").join("-").toLowerCase() +
			"-to-" +
			item.attributes.movingTo.split(" ").join("-").toLowerCase();
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

	const relatedStatess = relatedStates.data.map((item: any) => {
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

	const relatedCitiess = relatedCities.data.map((item: any) => {
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

	const relatedInfo = relatedArticless.concat(
		relatedCityRoutess,
		relatedMovingRoutess,
		relatedStatess,
		relatedCitiess,
	);

	const faqElems =
		faq?.faqElement.map((elem: any) => {
			return {
				title: elem.question,
				content: elem.answer,
			};
		}) || null;

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
						  "name": "Blog",
						  "item": "https://starvanlinesmovers.com/blog/"
					 },
					 {
						  "@type": "ListItem",
						  "position": 3,
						  "name": "${article.title}",
						  "item": "https://starvanlinesmovers.com/blog/${article.slug}"
					 }
				]
				   }`,
		};
	}

	return (
		<>
			<Head>
				<title>{article.metaTitle ? article.metaTitle : article.title}</title>
				<meta
					name="description"
					key={"test"}
					content={
						article.metaDescription
							? article.metaDescription
							: article.description
					}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				{metaSeo.robots && (
					<meta name="robots" content={metaSeo.robots.content} />
				)}
				<link
					rel="canonical"
					href={`https://starvanlinesmovers.com/blog/${article.slug}`}
					key={"canonical"}
				/>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd()}
				></script>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={
						!metaSeo.markup
							? addJsonLd_2({
									description: article.metaDescription
										? article.metaDescription
										: article.description,
									title: article.metaTitle ? article.metaTitle : article.title,
									url: `https://starvanlinesmovers.com/blog/${article.slug}`,
								})
							: { __html: `${JSON.stringify(metaSeo.markup.markup)}` }
					}
				></script>
				{faq && (
					<script
						async
						type="application/ld+json"
						dangerouslySetInnerHTML={addJsonLdFAQ(transformFAQtoJSON(faqElems))}
					></script>
				)}
			</Head>

			<div>
				<ArticleHero article={article} />
				{clientTestimonials && clientTestimonials.length > 0 && (
					<ClientTestimonials
						TestimonialItems={clientTestimonials}
						className={style.testimonialsSlug}
					/>
				)}
				{cloudDescription && (
					<Cloud content={cloudDescription} isArticleBlock />
				)}
				{table && <GridTable column={makeColumnsFromShort(table)} altVersion />}
				{/* <ArticleCTAWide /> */}
				<ArticleContent
					content={content}
					articles={articles.filter((el: any) => el.title !== article.title)}
					author={articleAuthor}
					article={article}
				/>
				{/* <ArticleComments id={articleId} /> */}
				{faq && <FAQ isNeedParse cards={faqElems} />}
				{/* {relatedInfo.length ? <ArticleRelated articles={relatedInfo} /> : null} */}
				{randomArticless.length ? (
					<ArticleRelated articles={randomArticless} />
				) : null}
			</div>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths: any = [];

	const query = qs.stringify({
		fields: ["slug"],
		pagination: {
			page: 1,
			pageSize: 500,
		},
	});

	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/articles?${query}`,
	);
	let data = await res.json();
	data = data.data;

	data.forEach((result: any) => {
		if (result.object === "page") {
			paths.push({
				params: {
					slug: result.slug,
				},
			});
		}
	});

	return {
		paths,
		fallback: "blocking",
	};
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { slug } = ctx.params as Params;

	const query = qs.stringify({
		populate: {
			image: {
				fields: ["url", "alternativeText", "width", "height"],
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
			author: {
				populate: {
					avatar: {
						fields: ["url", "alternativeText"],
					},
					socialLinks: {
						populate: "*",
					},
					populate: "*",
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
			"content",
			"author",
			"CloudDescription",
			"FAQ",
			"Vacation",
			"Stats",
			"WhereToWork",
			"Universities",
			"Schools",
			"TopCities",
			"WhoWouldBeSuited",
			"CostOfLiving",
			"Benefits",
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

	function getRandomElements(arr: IArticle[], count = 10) {
		return arr.sort(() => Math.random() - 0.5).slice(0, count);
	}

	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/articles?${query}`,
	);
	let data = await res.json();
	data = data.data;

	const testimonialsQuery = getClientTestimonialsQuery();
	const testimonialRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/client-testimonial?${testimonialsQuery}`,
	);
	const testimonialData = await testimonialRes.json();
	const clientTestimonials =
		testimonialData?.data?.attributes?.ClientTestimonials?.ClientTestimonials ||
		null;

	const allArticlesQuery = qs.stringify({
		populate: {
			image: {
				fields: ["url", "alternativeText"],
			},
		},
		fields: ["title", "description", "updatedAt", "image", "tag", "slug"],
	});

	const res2 = await fetch(
		`https://admin.starvanlinesmovers.com/api/articles?${allArticlesQuery}`,
	);
	const res2Json = await res2.json();
	const allArticles = res2Json.data;

	const random10Articles = getRandomElements(allArticles);

	const page = data[0] || null;

	if (page === null) {
		return {
			notFound: true,
			revalidate: 60,
		};
	}

	const latestArticlesQuery = qs.stringify({
		populate: {
			image: {
				fields: ["url", "alternativeText"],
			},
		},
		fields: ["title", "description", "updatedAt", "image", "tag", "slug"],
		pagination: {
			page: 1,
			pageSize: 6,
		},
		sort: ["updatedAt:desc"],
	});

	const latestArticlesRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/articles?${latestArticlesQuery}`,
	).then((res) => res.json());

	const latestArticles = latestArticlesRes.data.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: item.attributes.tag,
			slug: item.attributes.slug,
		};
	});

	const articles = latestArticles;

	const article: IArticle = {
		title: page.attributes.title,
		description: page.attributes.description,
		date: page.attributes.updatedAt,
		coverImage: page.attributes.image,
		tag: page.attributes.tag,
		slug: page.attributes.slug,
		metaTitle: page.attributes.metaTitle,
		metaDescription: page.attributes.metaDescription,

		attribs: page.attributes,
	};

	const cloudDescription = page.attributes.CloudDescription;
	const table = page.attributes.PriceTable;
	const content = page.attributes.content;
	const author = page.attributes.author;
	const faq = page.attributes.FAQ;
	const relatedArticles = page.attributes.RelatedArticles;
	const relatedCityRoutes = page.attributes.RelatedCityMR;
	const relatedRoutes = page.attributes.RelatedMovingRoutes;
	const relatedStates = page.attributes.RelatedStates;
	const relatedCities = page.attributes.RelatedCities;
	const metaSeo = {
		canonical: page.attributes.SeoCanonical,
		robots: page.attributes.SeoRobots,
		markup: page.attributes.SeoMarkup,
	};

	return {
		props: {
			author,
			content,
			article,
			table,
			articles,
			cloudDescription,
			faq,
			relatedArticles,
			relatedCityRoutes,
			relatedRoutes,
			relatedStates,
			relatedCities,
			metaSeo,
			clientTestimonials,
			randomArticles: random10Articles,
		},
		revalidate: 30,
	};
};

export default Article;
