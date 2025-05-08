import Head from "next/head";
import Script from "next/script";

import { GridTable } from "@/components/GridTable/GridTable";
import { makeColumnsFromShort } from "@/components/GridTable/utils";
import ArticleContent from "@/components/blog/articles/articleContent";
import ArticleHero from "@/components/blog/articles/articleHero";
import ArticleRelated from "@/components/blog/articles/articleRelated";
import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
import { Cloud } from "@/components/cloud/cloud";
import FAQ, { FAQCardProps } from "@/components/faq";
import NewSeoCost, {
	CommercialRelocationEOCost,
	LocalMovingSeoCost,
	LongDistanceSeoCost,
	StorageSEOCost,
} from "@/components/guides/NewSeoCost/NewSeoCost";
import SeoCost, { ISEOCost } from "@/components/guides/seoCost";
import ChecklistForm from "@/components/mainPage/checklistForm";
import RequestForm from "@/components/mainPage/requestForm";
import Reviews from "@/components/mainPage/reviews/reviews";
import ServiceMap from "@/components/mainPage/serviceMap";
import OurValues, { IOurValues } from "@/components/ourValues";
import CargoTypes, {
	ICargoType,
	ICargoTypes,
} from "@/components/services/cargoTypes";
import OurProcess, { IOurProcess } from "@/components/services/ourProcess";
import PackagingMaterials from "@/components/services/packagingMaterials";
import ServiceHero, { IServiceHero } from "@/components/services/serviceHero";
import WhyWeAre, { IWhyWeAre } from "@/components/services/whyWeAre";
import { useMobile } from "@/lib/useMobile";
import { IArticle } from "@/store/blogStore";
import { mainPageFaq } from "@/store/faqStore";
import { IMaterials } from "@/store/services/packagingStore";
import { services } from "@/store/services/servicesStore";
import { IUsers } from "@/store/usersStore";
import style from "@/styles/css/services/servicesPage.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";
import getFAQQuery from "@/utils/faqQuery";
import getArticleRelatedInfo from "@/utils/getArticleRelatedInfo";
import getSeoFirstLvlPageQuery from "@/utils/getSeoFirstLvlPageQuery";
import getSpecialServicesDataQuery from "@/utils/getSpecialServicesDataQuery";
import transformFAQtoJSON from "@/utils/transformFAQtoJSON";

import { addJsonLdFAQ, addJsonLd_2 } from "./_document";
import { ConsumerReviewsCarousel } from "@/components/ConsumerReviewsCarousel/ConsumerReviewsCarousel";

const qs = require("qs");

type PageType = "SEOPage" | "ServicesPage";

interface SeoFirstLvlPage extends IArticle {
	CloudDescription?: string;
	PriceTable?: any;
	FAQ?: any;
	latestArticles?: any;
	relations: {
		relatedArticles?: any;
		relatedMR?: any;
		relatedCR?: any;
		relatedCities?: any;
		relatedStates?: any;
	};
	dynamicZone?: any;
}

export interface IServicePage {
	slug: string;
	metaTitle: string;
	metaDescription: string;
	hero: IServiceHero;
	cargoTypes: ICargoTypes;
	cargoType?: ICargoType;
	ourProcess: IOurProcess;
	ourValues: IOurValues;
	whyWeAre: IWhyWeAre;
	tabsWithContent: ISEOCost;
	bName?: string;
	faq?: FAQCardProps[];
	packagingMaterials?: IMaterials;
	clientTestimonials?: any;
}

interface ServicesPageProps {
	page: IServicePage;
}

interface Props {
	page: any;
	pageType: PageType;
}

type Params = {
	params: {
		slug: string;
	};
};

interface SeoPageProps {
	page: SeoFirstLvlPage;
}

const ServicesPage = ({ page }: ServicesPageProps) => {
	const isMobile = useMobile();

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
					  "name": "${page.bName}",
					  "item": "https://starvanlinesmovers.com/${page.slug}/"
				 }
			]
			   }`,
		};
	}

	return (
		<>
			<Head>
				<title>{page.metaTitle}</title>
				<meta name="description" content={page.metaDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="canonical"
					href={`https://starvanlinesmovers.com/${page.slug}`}
				/>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd()}
				></script>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2({
						description: page.metaDescription,
						title: page.bName,
						url: `https://starvanlinesmovers.com/${page.slug}`,
					})}
				></script>
				{page.faq && (
					<script
						async
						type="application/ld+json"
						dangerouslySetInnerHTML={addJsonLdFAQ(transformFAQtoJSON(page.faq))}
					></script>
				)}
			</Head>
			<div>
				{page.slug == "packing-and-unpacking" ? (
					<>
						<ServiceHero
							bName={page.bName}
							slug={page.slug}
							store={page.hero}
						/>
                        {page.clientTestimonials && page.clientTestimonials.length > 0 && (
							<ClientTestimonials
								TestimonialItems={page.clientTestimonials}
								className={style.testimonials}
							/>
						)}
						{page.packagingMaterials && (
							<PackagingMaterials
								isServicePage
								store={page.packagingMaterials}
							/>
						)}
						<ChecklistForm />
                        <ConsumerReviewsCarousel />
						<Reviews />
						{/* <SeoCost store={page.tabsWithContent} subTitle="Moving Solutions" /> */}
						{page.faq ? <FAQ isNeedParse cards={page.faq} /> : null}
						<RequestForm />
					</>
				) : (
					<>
						<ServiceHero
							bName={page.bName}
							slug={page.slug}
							store={page.hero}
						/>
						{page.clientTestimonials && page.clientTestimonials.length > 0 && (
							<ClientTestimonials
								TestimonialItems={page.clientTestimonials}
								className={style.testimonials}
							/>
						)}
						<CargoTypes
							store={page.cargoTypes}
							item={page.cargoType || { typelink: [] }}
						/>
						{!isMobile && <ServiceMap />}
						<OurProcess store={page.ourProcess} />
						<OurValues store={page.ourValues} />
                        <ConsumerReviewsCarousel />
						<WhyWeAre store={page.whyWeAre} />
						{page.slug === "long-distance-moving" ? (
							<NewSeoCost costArray={LongDistanceSeoCost} />
						) : page.slug === "local-moving" ? (
							<NewSeoCost costArray={LocalMovingSeoCost} />
						) : page.slug === "storage" ? (
							<NewSeoCost costArray={StorageSEOCost} />
						) : page.slug === "commercial-relocation" ? (
							<NewSeoCost costArray={CommercialRelocationEOCost} />
						) : null}
						<ChecklistForm />
						<Reviews />
						{page.slug !== "long-distance-moving" &&
						page.slug !== "commercial-relocation" &&
						page.slug !== "special-move" &&
						page.slug !== "packing-and-unpacking" &&
						page.slug !== "storage" ? (
							<SeoCost
								store={page.tabsWithContent}
								subTitle="Moving Solutions"
							/>
						) : null}
						{page.faq ? <FAQ isNeedParse cards={page.faq} /> : null}
						<RequestForm />
					</>
				)}
			</div>
		</>
	);
};

const SeoPage = ({ page }: SeoPageProps) => {
	const {
		title,
		description,
		metaTitle,
		metaDescription,
		CloudDescription,
		PriceTable,
		FAQ: faq,
		relations,
		latestArticles,
		dynamicZone,
	} = page;

	const relatedInfo = getArticleRelatedInfo({ ...relations });

	const faqElems =
		faq?.faqElement.map((elem: any) => {
			return {
				title: elem.question,
				content: elem.answer,
			};
		}) || null;

	return (
		<>
			<Head>
				<title>{metaTitle ?? title}</title>
				<meta name="description" content={metaDescription ?? description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<Script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2({
						description: metaDescription ?? description,
						title: metaTitle ?? title,
						url: `https://starvanlinesmovers.com/${page.slug}`,
					})}
				></Script>
			</Head>

			<div>
				<ArticleHero article={page} isSEOpage />
				{CloudDescription && (
					<Cloud content={CloudDescription} isArticleBlock />
				)}
				{PriceTable && (
					<GridTable column={makeColumnsFromShort(PriceTable)} altVersion />
				)}
				<ArticleContent
					articles={latestArticles ?? []}
					article={page}
					dynamicBlocks={dynamicZone}
				/>
				{faq && <FAQ isNeedParse cards={faqElems} />}
				{relatedInfo && relatedInfo.length ? (
					<ArticleRelated articles={relatedInfo} />
				) : null}
			</div>
		</>
	);
};

const Service = ({ page, pageType }: Props) => {
	switch (pageType) {
		case "SEOPage":
			return <SeoPage page={page} />;
		case "ServicesPage":
			return <ServicesPage page={page} />;
	}
};

export async function getStaticProps({ params }: Params) {
	const page = services.find((item) => item.slug == params.slug);
	const faqQuery = getFAQQuery();
	let faq: any = null;
	const testimonialsQuery = getClientTestimonialsQuery();
	const testimonialRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/client-testimonial?${testimonialsQuery}`,
	);
	const testimonialData = await testimonialRes.json();
	const clientTestimonials =
		testimonialData?.data?.attributes?.ClientTestimonials?.ClientTestimonials ||
		null;

	if (page) {
		if (params.slug === "special-move") {
			const query = getSpecialServicesDataQuery();
			const res = await fetch(
				`https://admin.starvanlinesmovers.com/api/special-services?${query}`,
			);

			const { data } = await res.json();

			const res2 = await fetch(
				`https://admin.starvanlinesmovers.com/api/special-moving?${faqQuery}`,
			);
			const { data: faqData } = await res2.json();
			const faq: FAQCardProps[] = faqData.attributes.faq.faqElement.map(
				(el: any) => ({ title: el.question, content: el.answer }),
			);

			if (data && data.length) {
				const cargoTypes: ICargoType = {
					typelink: [
						...data.map((el: any) => ({
							icon:
								el?.attributes?.preview?.previewImage?.data?.attributes?.url ??
								null,
							title: el?.attributes?.preview?.previewTitle ?? null,
							description: `/special-move/${el?.attributes?.slug ?? null}`,
						})),
					],
				};
				return {
					props: {
						page: { ...page, cargoType: cargoTypes, faq: faq, clientTestimonials },
						pageType: "ServicesPage",
					},
					revalidate: 30,
				};
			}
		}
		if (page.slug === "commercial-relocation") {
			const res = await fetch(
				`https://admin.starvanlinesmovers.com/api/commertial-realocation?${faqQuery}`,
			);
			const { data: faqData } = await res.json();
			faq = faqData.attributes.faq.faqElement.map((el: any) => ({
				title: el.question,
				content: el.answer,
			}));
		}
		if (page.slug === "packing-and-unpacking") {
			const res = await fetch(
				`https://admin.starvanlinesmovers.com/api/packing?${faqQuery}`,
			);
			const { data: faqData } = await res.json();
			faq = faqData.attributes.faq.faqElement.map((el: any) => ({
				title: el.question,
				content: el.answer,
			}));
		}
		if (page.slug === "storage") {
			const res = await fetch(
				`https://admin.starvanlinesmovers.com/api/storage?${faqQuery}`,
			);
			const { data: faqData } = await res.json();
			faq = faqData.attributes.faq.faqElement.map((el: any) => ({
				title: el.question,
				content: el.answer,
			}));
		}
		if (page.slug === "long-distance-moving") {
			const res = await fetch(
				`https://admin.starvanlinesmovers.com/api/long-distance-mov?${faqQuery}`,
			);
			const { data: faqData } = await res.json();

			faq = faqData.attributes.faq.faqElement.map((el: any) => ({
				title: el.question,
				content: el.answer,
			}));
		}
		if (page.slug === "local-moving") {
			const res = await fetch(
				`https://admin.starvanlinesmovers.com/api/local-mov?${faqQuery}`,
			);
			const { data: faqData } = await res.json();
			faq = faqData.attributes.faq.faqElement.map((el: any) => ({
				title: el.question,
				content: el.answer,
			}));
		}
		return {
			props: {
				page: faq
					? { ...page, faq: faq, clientTestimonials }
					: { ...page, clientTestimonials },
				pageType: "ServicesPage",
			},
			revalidate: 30,
		};
	} else {
		const query = getSeoFirstLvlPageQuery(params.slug);

		const res = await fetch(
			`https://admin.starvanlinesmovers.com/api/seo-first-lvl-pages?${query}`,
		);
		const { data } = await res.json();
		const page = data?.[0]?.attributes;

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

		return page
			? {
					props: {
						page: {
							title: page.title,
							description: page.description,
							metaTitle: page.metaTitle,
							metaDescription: page.metaDescription,
							slug: page.slug,
							PriceTable: page.PriceTable || null,
							FAQ: page.FAQ || null,
							CloudDescription: page.CloudDescription || null,
							coverImage: page.image,
							date: page.updatedAt,
							latestArticles,
							relations: {
								relatedArticles: page.RelatedArticles || null,
								relatedMR: page.RelatedMovingRoutes || null,
								relatedCR: page.RelatedCityMR || null,
								relatedCities: page.RelatedCities || null,
								relatedStates: page.relatedStates || null,
							},
							dynamicZone: page.DynamicBlocks || null,
							ClientTestimonials,
						},
						pageType: "SEOPage",
					},
					revalidate: 30,
				}
			: {
					notFound: true,
					revalidate: 60,
				};
	}
}

export async function getStaticPaths() {
	const staticPaths = services.map((page) => {
		return {
			params: {
				slug: page.slug,
			},
		};
	});
	const query = qs.stringify({
		fields: ["slug"],
		pagination: {
			page: 1,
			pageSize: 500,
		},
	});

	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/seo-first-lvl-pages?${query}`,
	);
	let { data } = await res.json();
	const dynamicPaths = data
		?.filter((r: any) => r?.object === "page")
		.map((r: any) => ({
			params: {
				slug: r.slug,
			},
		}));

	return {
		paths: [...dynamicPaths, ...staticPaths],
		fallback: "blocking",
	};
}

export default Service;
