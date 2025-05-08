import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

import Hero from "@/components/about/hero";
import BlogSection from "@/components/blog/blogSection";
import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
import { useMobile } from "@/lib/useMobile";
import { IArticle, blogHero } from "@/store/blogStore";
import style from "@/styles/css/blog/blog.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";
import { getIsMobileFromContext } from "@/utils/getIsMobileFromContext";

import { addJsonLd_2 } from "../_document";
import { ConsumerReviewsCarousel } from "@/components/ConsumerReviewsCarousel/ConsumerReviewsCarousel";

const qs = require("qs");

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
			 }
		]
		   }`,
	};
}

const Blog = ({
	paginatedArticles,
	latestArticles,
	totalArticles,
	page,
	initialDisplay,
	clientTestimonials,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const isMobile = useMobile(initialDisplay);
	const [search, setSearch] = useState<string | null>(null);

	return (
		<>
			<Head>
				<title>
					Ask the Star Van Lines Movers: Your Moving Questions Answered
				</title>
				<meta
					name="description"
					content="From packing hacks to hiring tips, get all your moving questions answered by the relocation experts at Star Van Lines. Our experienced movers provide insider advice for stress-free relocations in this informative Q&A"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href="https://starvanlinesmovers.com/blog" />
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd()}
				></script>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2({
						description:
							"From packing hacks to hiring tips, get all your moving questions answered by the relocation experts at Star Van Lines. Our experienced movers provide insider advice for stress-free relocations in this informative Q&A",
						title:
							"Ask the Star Van Lines Movers: Your Moving Questions Answered",
						url: `https://starvanlinesmovers.com/blog`,
					})}
				></script>
			</Head>
			<div className={style.blog}>
				<Hero store={blogHero} isMobile={isMobile} />
				{clientTestimonials && clientTestimonials.length > 0 && (
					<ClientTestimonials
						TestimonialItems={clientTestimonials}
						className={style.testimonials}
					/>
				)}
				<div className={style.blogSection}>
					<BlogSection
						articles={paginatedArticles}
						latestArticles={latestArticles}
						totalArticles={totalArticles}
						currentPage={page}
						perPage={20}
						setSearch={setSearch}
						search={search}
					/>
				</div>
                <ConsumerReviewsCarousel />
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const search: any = context.query.search || "";
	const tag: any = context.query.tag || "";

	const currentPageArticlesQuery = qs.stringify({
		populate: {
			image: {
				fields: ["url", "alternativeText"],
			},
		},
		fields: ["title", "description", "updatedAt", "image", "tag", "slug"],
		pagination: {
			page: 1,
			pageSize: 20,
		},
		filters: {
			title: {
				$containsi: search,
			},
			slug: {
				$nei: "florida",
			},
			tag: {
				$containsi: tag,
			},
		},
		sort: ["updatedAt:desc"],
	});

	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/articles?${currentPageArticlesQuery}`,
	).then((res) => res.json());

	const testimonialsQuery = getClientTestimonialsQuery();
	const testimonialRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/client-testimonial?${testimonialsQuery}`,
	);
	const testimonialData = await testimonialRes.json();
	const clientTestimonials =
		testimonialData?.data?.attributes?.ClientTestimonials?.ClientTestimonials ||
		null;

	const total = res.meta.pagination.total;

	const articles = res.data.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: item.attributes.tag,
			slug: item.attributes.slug,
		};
	});

	articles.sort(
		(a: IArticle, b: IArticle) =>
			new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	const latestArticlesQuery = qs.stringify({
		populate: {
			image: {
				fields: ["url", "alternativeText"],
			},
		},
		fields: ["title", "description", "updatedAt", "image", "tag", "slug"],
		pagination: {
			page: 1,
			pageSize: 5,
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

	const isMobile = getIsMobileFromContext(context);

	return {
		props: {
			page: 1,
			paginatedArticles: articles,
			latestArticles: latestArticles,
			totalArticles: total,
			initialDisplay: isMobile,
			clientTestimonials,
		},
	};
};

export default Blog;
