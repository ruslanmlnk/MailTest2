import { GetStaticProps } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";

import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import MapOfTheStates from "@/components/guides/mapOfTheStates";
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
				  "name": "Locations",
				  "item": "https://starvanlinesmovers.com/locations/"
			 }
		]
		   }`,
	};
}

const Guides = ({ page, clientTestimonials }: any) => {
	const breadcrumbsArr = [
		{
			name: "Main page",
			url: "/",
		},
		{
			name: "locations",
			url: `/locations`,
		},
	];

	return (
		<>
			<Head>
				<title>Star Van lines locations | Trusted movers across US</title>
				<meta
					name="description"
					content="Changing cities or relocating your family across the country? Consult Star Van Lines' state-specific moving guides covering everything from packing tips to mover hiring advice, school ratings, real estate insights and more. Get insider knowledge for a seamless nationwide move"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://starvanlinesmovers.com/locations" />
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
						description: `Changing cities or relocating your family across the country? Consult Star Van Lines' state-specific moving guides covering everything from packing tips to mover hiring advice, school ratings, real estate insights and more. Get insider knowledge for a seamless nationwide move`,
						title: "Star Van lines locations | Trusted movers across US",
						url: `https://starvanlinesmovers.com/locations`,
					})}
				></script>
			</Head>
			<div>
				<div className={style.breadcrumbsWrapp}>
					<Breadcrumbs withPadding isDark breadcrumbsArr={breadcrumbsArr} />
				</div>
				<MapOfTheStates />
				{clientTestimonials && clientTestimonials.length > 0 && (
					<ClientTestimonials
						TestimonialItems={clientTestimonials}
						className={style.testimonials}
					/>
				)}
				<NavigationalMenu store={page} />
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
				fields: ['CountryName'],
			},
		},
		filters: {
			Country: {
				CountryName: {
					$eq: 'USA'
				}
			}
		},
	});

	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/guides?${query}`,
	);
	const data = await res.json();
	console.log('dataMyTest', data.data[0].attributes);
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

export default Guides;
