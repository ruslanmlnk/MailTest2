import {
	GetServerSidePropsContext,
	GetStaticProps,
	InferGetServerSidePropsType,
} from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import React from "react";

import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
import FAQ from "@/components/faq";
import MapOfTheStates from "@/components/guides/mapOfTheStates";
import NavigationalMenu from "@/components/guides/navigationalMenu";
import CarefulTransportation from "@/components/mainPage/carefullTransportation/carefullTransportation";
import ChecklistForm from "@/components/mainPage/checklistForm";
import Cards from "@/components/mainPage/new/card";
import Cases from "@/components/mainPage/new/cases";
import Hero from "@/components/mainPage/new/hero";
import Instagram from "@/components/mainPage/new/instagram";
import MovingSolutions from "@/components/mainPage/new/movingSolutions";
import OurLicense from "@/components/mainPage/ourLicense";
import OurServices from "@/components/mainPage/ourServices/ourServices";
import RequestForm from "@/components/mainPage/requestForm";
import ServiceMap from "@/components/mainPage/serviceMap";
import { PhoneIcon } from "@/components/phone/PhoneIcon";
import { useMobile } from "@/lib/useMobile";
import { mainPageFaq } from "@/store/faqStore";
import style from "@/styles/css/mainPage/mainPage.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";
import { getIsMobileFromContext } from "@/utils/getIsMobileFromContext";
import transformFAQtoJSON from "@/utils/transformFAQtoJSON";

import { addJsonLdFAQ, addJsonLd_2 } from "./_document";
import { ConsumerReviewsCarousel } from "@/components/ConsumerReviewsCarousel/ConsumerReviewsCarousel";

const qs = require("qs");

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const isMobile = getIsMobileFromContext(context);

	const guidesQuery = qs.stringify({
		populate: {
			stateFlag: { fields: ["url"] },
		},
	});
	const testimonialsQuery = getClientTestimonialsQuery();

	const [guidesRes, testimonialRes] = await Promise.all([
		fetch(`https://admin.starvanlinesmovers.com/api/guides?${guidesQuery}`),
		fetch(
			`https://admin.starvanlinesmovers.com/api/client-testimonial?${testimonialsQuery}`,
		),
	]);

	const [guidesData, testimonialData] = await Promise.all([
		guidesRes.json(),
		testimonialRes.json(),
	]);

	if (!guidesData.data) {
		return {
			notFound: true,
			props: {
				initialDisplay: isMobile,
			},
		};
	}
    
	const clientTestimonials =
		testimonialData?.data?.attributes?.ClientTestimonials?.ClientTestimonials ||
		null;
	// console.log("client testimonials", clientTestimonials);

	return {
		props: {
			page: guidesData.data,
			clientTestimonials,
			initialDisplay: isMobile,
		},
	};
}

const newMain = ({
	initialDisplay,
	page,
	clientTestimonials,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const isMobile = useMobile(initialDisplay);
	return (
		<>
			<Head>
				<title>Star Van Lines: Best Movers For your Relocation</title>
				<meta
					name="description"
					content="Stress-free moving for local & long-distance relocations. Get a free quote & experience the Star Van Lines difference!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://starvanlinesmovers.com/" />
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2({
						description:
							"Stress-free moving for local & long-distance relocations. Get a free quote & experience the Star Van Lines difference!",
						title: "Star Van Lines: Best Movers For your Relocation",
						url: "https://starvanlinesmovers.com/",
					})}
				></script>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLdFAQ(
						transformFAQtoJSON(mainPageFaq),
					)}
				></script>
			</Head>

			<main className={style.main}>
				<Hero isMobile={isMobile} testimonials={clientTestimonials}/>
				<Cards />
				{/* <Cases /> */}
				<OurServices />
				<MapOfTheStates isMain />
				<NavigationalMenu isMain store={page} />
                <ConsumerReviewsCarousel />
				<OurLicense />
				<CarefulTransportation />
				{!isMobile && <ServiceMap className={style.serviceMap} />}
				<ChecklistForm />
				{/* <Instagram /> */}
				<FAQ cards={mainPageFaq} />
				<RequestForm />
				<MovingSolutions />
			</main>
		</>
	);
};

export default newMain;
