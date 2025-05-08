import { GetStaticProps } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";

import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import MapOfCanadaProvinces from "@/components/guides/mapOfCanadaProvinces";
import NavigationalMenu from "@/components/guides/navigationalMenu";
import RequestFormMap from "@/components/map/requestForm";
import style from "@/styles/css/guides/MapTrustparther.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";

import { addJsonLd_2 } from "../../_document";
import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
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
				  "name": "International",
				  "item": "https://starvanlinesmovers.com/international"
			 },
			 {
				  "@type": "ListItem",
				  "position": 3,
				  "name": "Canada",
				  "item": "https://starvanlinesmovers.com/international/canada"
			 }
		]
		   }`,
	};
}

const Canada = ({ page, clientTestimonials }: any) => {
	const breadcrumbsArr = [
		{
			name: "Main page",
			url: "/",
		},
		{
			name: "International",
			url: `/international`,
		},
		{
			name: "Canada",
			url: `/international/canada`,
		},
	];

	return (
		<>
			<Head>
				<title>Star Van lines Canada | Trusted movers across Canada</title>
				<meta
					name="description"
					content="Moving to or within Canada? Consult Star Van Lines' province-specific moving guides covering everything from packing tips to mover hiring advice, school ratings, real estate insights and more. Get insider knowledge for a seamless move across Canada"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://starvanlinesmovers.com/international/canada" />
				<link rel="icon" href="/favicon.ico" />
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd()}
				></script>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2({
						description: `Moving to or within Canada? Consult Star Van Lines' province-specific moving guides covering everything from packing tips to mover hiring advice, school ratings, real estate insights and more. Get insider knowledge for a seamless move across Canada`,
						title: "Star Van lines Canada | Trusted movers across Canada",
						url: `https://starvanlinesmovers.com/international/canada`,
					})}
				></script>
			</Head>
			<div>
				<div className={style.breadcrumbsWrapp}>
					<Breadcrumbs withPadding isDark breadcrumbsArr={breadcrumbsArr} />
				</div>
				<MapOfCanadaProvinces />
				{clientTestimonials && clientTestimonials.length > 0 && (
					<ClientTestimonials
						TestimonialItems={clientTestimonials}
						className={style.testimonials}
					/>
				)}
				<NavigationalMenu store={page} basePath="/international" />
                <ConsumerReviewsCarousel />
				<RequestFormMap />
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const query = qs.stringify({
		populate: {
			stateFlag: {
				fields: ["url"],
			},
			
			CountryName: {
				fields: ['CountryName']
			},
		},
		filters: {
			CountryName: {
				CountryName: {
					$eq: 'Canada'
				}
			}
		}
	});

	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/guides?${query}`,
	);
	const data = await res.json();

	if (!data.data) {
		return {
			notFound: true,
			revalidate: 60,
		};
	}

	const testimonialsQuery = getClientTestimonialsQuery();
	const testimonialRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/client-testimonial?${testimonialsQuery}`,
	);
	const testimonialData = await testimonialRes.json();
	const clientTestimonials =
		testimonialData?.data?.attributes?.ClientTestimonials?.ClientTestimonials ||
		null;

	return {
		props: {
			page: data.data,
			clientTestimonials,
		},
		revalidate: 60,
	};
};

export default Canada; 