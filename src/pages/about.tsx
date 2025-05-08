import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";

import { ConsumerReviewsCarousel } from "@/components/ConsumerReviewsCarousel/ConsumerReviewsCarousel";
import AboutVanil from "@/components/about/aboutVanil";
import CompanyStory from "@/components/about/companyStory";
import Hero from "@/components/about/hero";
import OurMission from "@/components/about/ourMission";
import OurStandarts from "@/components/about/ourStandarts";
import OurTeam from "@/components/about/ourTeam";
import TeamMembers from "@/components/about/teamMembers";
import { VerifiedTrademark } from "@/components/about/verifiedTrademark";
import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
import OurValues, { valuesArray } from "@/components/ourValues";
import { useMobile } from "@/lib/useMobile";
import { trustedPartner } from "@/store/about/aboutVanil";
import { aboutHero } from "@/store/aboutStore";
import style from "@/styles/css/about/about.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";
import { getIsMobileFromContext } from "@/utils/getIsMobileFromContext";

import { addJsonLd_2 } from "./_document";

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const isMobile = getIsMobileFromContext(context);
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
			clientTestimonials,
			initialDisplay: isMobile,
		},
	};
}

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
				  "name": "About",
				  "item": "https://starvanlinesmovers.com/about/"
			 }
		]
		   }`,
	};
}

function Home({
	initialDisplay,
	clientTestimonials,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const isMobile = useMobile(initialDisplay);
	return (
		<>
			<Head>
				<title>
					Trusted Long Distance Residential Movers Near Me | Star Van Lines
				</title>
				<meta
					name="description"
					content="Searching for trusted long distance residential movers near your location? Look no further! Star Van Lines offers reliable and professional moving services for long distance relocations. Our experienced team ensures a seamless and stress-free transition to your new home. Contact us today for a smooth moving experience!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://starvanlinesmovers.com/about" />
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
						description:
							"Searching for trusted long distance residential movers near your location? Look no further! Star Van Lines offers reliable and professional moving services for long distance relocations. Our experienced team ensures a seamless and stress-free transition to your new home. Contact us today for a smooth moving experience!",
						title:
							"Trusted Long Distance Residential Movers Near Me | Star Van Lines",
						url: `https://starvanlinesmovers.com/about`,
					})}
				></script>
			</Head>
			<main className={style.main}>
				<Hero store={aboutHero} isMobile={isMobile} />
				{clientTestimonials && clientTestimonials.length > 0 && (
					<ClientTestimonials
						TestimonialItems={clientTestimonials}
						className={style.testimonials}
					/>
				)}
				<CompanyStory />
				<AboutVanil store={trustedPartner} />
				<OurStandarts />
				<ConsumerReviewsCarousel />
				<OurMission />
				<OurTeam />
				<TeamMembers />
				{/* <Specialists /> */}
				<OurValues store={valuesArray} />
				<VerifiedTrademark />
			</main>
		</>
	);
}

export default Home;
