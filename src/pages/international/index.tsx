import { GetStaticProps } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";

import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import MapOfCountries from "@/components/guides/mapOfCountries";
import NavigationalMenu from "@/components/guides/navigationalMenu";
import TrustedPartner from "@/components/guides/trustedPartner";
import RequestFormMap from "@/components/map/requestForm";
import { trustedPartner } from "@/store/guides/stateMapStore";
import style from "@/styles/css/guides/MapTrustparther.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";

import { addJsonLd_2 } from "../_document";
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
				  "item": "https://starvanlinesmovers.com/international/"
			 }
		]
		   }`,
	};
}

const International = ({ page, clientTestimonials }: any) => {
	const breadcrumbsArr = [
		{
			name: "Main page",
			url: "/",
		},
		{
			name: "international",
			url: `/international`,
		},
	];

	return (
		<>
			<Head>
				<title>Star Van lines International | Trusted movers across World</title>
				<meta
					name="description"
					content="Moving internationally? Consult Star Van Lines' country-specific moving guides covering everything from packing tips to customs regulations, visa requirements, and more. Get expert guidance for a seamless international relocation."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://starvanlinesmovers.com/international" />
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
						description: `Moving internationally? Consult Star Van Lines' country-specific moving guides covering everything from packing tips to customs regulations, visa requirements, and more. Get expert guidance for a seamless international relocation.`,
						title: "Star Van lines International | Trusted movers across World",
						url: `https://starvanlinesmovers.com/international`,
					})}
				></script>
			</Head>
			<div>
				<div className={style.breadcrumbsWrapp}>
					<Breadcrumbs withPadding isDark breadcrumbsArr={breadcrumbsArr} />
				</div>
				<MapOfCountries />
				{clientTestimonials && clientTestimonials.length > 0 && (
					<ClientTestimonials
						TestimonialItems={clientTestimonials}
						className={style.testimonials}
					/>
				)}
				<NavigationalMenu store={page} basePath="/international" />
                <ConsumerReviewsCarousel />
				<div className={style.trustparther}>
					{/* <TrustedPartner store={trustedPartner} /> */}
				</div>
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
					$in: ['Puerto Rico', 'Canada']
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

export default International; 