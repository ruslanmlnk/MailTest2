import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";

import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
import ServiceMap from "@/components/mainPage/serviceMap";
import { BlueBlockSection } from "@/components/newCalculator/BlueBlockSection/BlueBlockSection";
import { CalculatorBenefitsSection } from "@/components/newCalculator/CalculatorBenefitsSection/CalculatorBenefitsSection";
import { FirstSection } from "@/components/newCalculator/FirstSection/FirstSection";
import {
	GenericSection,
	GenericSectionProps,
} from "@/components/newCalculator/GenericSection/GenericSection";
import { Hero } from "@/components/newCalculator/Hero/Hero";
import { useMobile } from "@/lib/useMobile";
import style from "@/styles/css/calculatorPage.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";

import bnfImg_2 from "../../public/images/calcB-2.jpg";
import bnfImg from "../../public/images/calclB-1.jpg";
import { addJsonLd_2 } from "./_document";
import { ConsumerReviewsCarousel } from "@/components/ConsumerReviewsCarousel/ConsumerReviewsCarousel";

const BENEFITS: string[] = [
	"Hiring full-service movers or diy move.",
	"Local movers or Long distance movers",
	"Professional packing and unpacking labor",
	"Specialty item relocation (pianos, hot tubs, vehicles, etc.)",
	"Temporary storage unit fees",
	"Packing and moving supply purchases",
	"Fuel costs for rental trucks",
	"Moving insurance and liability coverage",
	"And more!",
];

const BENEFITS_2: string[] = [
	"How to Downsize and Declutter Before You Pack",
	"Must-Know Packing Hacks for an Organized Move",
	"Professional packing and unpacking labor",
	"A Printable Moving Checklist to Keep You On Track",
	"Tips for Moving with kids and pets",
	"Best Practices for Protecting Valuables During a Move",
	"How to Have a Stress-Free Moving Day",
	"And more!",
];

const GENERIC_1: GenericSectionProps = {
	preTitle: "calculator accounts",
	title:
		"Our calculator accounts for every potential expense associated with a move, including:",
	body: "No more guessing games or potential hidden fees to worry about. With all factors considered upfront, you can make an informed decision and plan your estimate moving cost accurately. As a professional moving company we give a choice to customer , get a help from sales manager or get moving quote by himself. All of that is is free quotes.",
};

const GENERIC_2: GenericSectionProps = {
	preTitle: "moving resources",
	title: "Some of our most popular moving \nresources include:",
	body: "We want to make your move simple and affordable. It doesn't matter if you're moving nearby or far away. We can help whether you're moving across town or across the country. Start by calculating your moving costs today using our trusted online calculator and save money. We're confident it will provide an accurate, comprehensive estimate to guide your moving budget, avoid additional fees and plan effectively.",
};

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
					  "name": "Calculator",
					  "item": "https://starvanlinesmovers.com/calculator-page/"
				 }
			]
			   }`,
	};
}
export async function getServerSideProps() {
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
		},
	};
}

const calculatorPage = ({
	clientTestimonials,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const isMobile = useMobile();
	return (
		<>
			<Head>
				<title>Star Van Lines Movers: Calculate your cost</title>
				<link
					rel="canonical"
					href="https://starvanlinesmovers.com/calculator-page"
				/>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd()}
				></script>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd()}
				></script>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2({
						description: "Star Van Lines Movers: Calculate your cost",
						title: "Star Van Lines Movers: Calculate your cost",
						url: `https://starvanlinesmovers.com/calculator-page`,
					})}
				></script>
			</Head>
			<main>
				<Hero />
				{clientTestimonials && clientTestimonials.length > 0 && (
					<ClientTestimonials
						TestimonialItems={clientTestimonials}
						className={style.testimonials}
					/>
				)}
				<FirstSection />
				<GenericSection {...GENERIC_1} />
				<CalculatorBenefitsSection elements={BENEFITS} img={bnfImg} />
				<BlueBlockSection />
                <ConsumerReviewsCarousel />
				{!isMobile && <ServiceMap />}
				<GenericSection {...GENERIC_2} />
				<CalculatorBenefitsSection
					isLast
					reversed
					elements={BENEFITS_2}
					img={bnfImg_2}
				/>
			</main>
		</>
	);
};

export default calculatorPage;
