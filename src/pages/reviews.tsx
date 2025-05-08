import { GetStaticProps } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";



import { ConsumerReviewsCarousel } from "@/components/ConsumerReviewsCarousel/ConsumerReviewsCarousel";
import AllReviews from "@/components/allReviews";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
import style from "@/styles/css/allReviews.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";



import { addJsonLd_2 } from "./_document";


const qs = require("qs");
const breadcrumbsArr = [
	{
		name: "Main page",
		url: "/",
	},
	{
		name: "Customer reviews",
		url: `/reviews`,
	},
];

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
				  "name": "Customer reviews",
				  "item": "https://starvanlinesmovers.com/reviews/"
			 }
		]
		   }`,
	};
}

const reviews = (props: any) => {
	return (
		<>
			<Head>
				<title>Reviews - Moving Company | Star Vanlines</title>
				<meta
					name="description"
					content="Welcome to Star Vanlines reviews! We are a reliable and experienced moving company committed to providing exceptional service for your relocation needs."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href={`https://starvanlinesmovers.com/reviews`} />
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
							"Welcome to Star Vanlines reviews! We are a reliable and experienced moving company committed to providing exceptional service for your relocation needs.",
						title: "Reviews - Moving Company | Star Vanlines",
						url: `https://starvanlinesmovers.com/reviews`,
					})}
				></script>
			</Head>
			<div style={{ marginTop: "120px" }}>
				<Breadcrumbs withPadding isDark breadcrumbsArr={breadcrumbsArr} />
			</div>
			<AllReviews reviews={props.reviews} />
			{props.clientTestimonials && props.clientTestimonials.length > 0 && (
				<ClientTestimonials
					TestimonialItems={props.clientTestimonials}
					className={style.testimonials}
				/>
			)}
			<ConsumerReviewsCarousel />
		</>
	);
};

export default reviews;

const getRandomDate = (start: Date, end: Date) => {
	const date = new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime()),
	);
	return date.toLocaleString("en", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
};

const parseReviews = (reviewsArr: any) => {
	const startDate = new Date("2025-01-01");
	const endDate = new Date("2025-04-16");

	const arr = reviewsArr.map((el: any, i: number) => {
		// let str = new Date(el.attributes.createdAt).toLocaleString("en", {
		// 	month: "long",
		// 	day: "numeric",
		// 	year: "numeric",
		// });
        let str = getRandomDate(startDate, endDate);

		return {
			img: {
				src: el.attributes.user_avatar.data?.attributes.url,
				width: el.attributes.user_avatar.data?.attributes.width,
				height: el.attributes.user_avatar.data?.attributes.height,
			},
			name: el.attributes.user_name,
			text: el.attributes.user_comment,
			stars: el.attributes?.stars_rating,
			date: str,
			video: el.attributes.video
				? {
						url: el.attributes.video.user_video.data.attributes.url,
						isVertical: el.attributes.video.is_vertical,
					}
				: null,
			route: el.attributes?.route,
			id: i + 1,
		};
	});
	return arr;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const query = qs.stringify({
		populate: {
			user_avatar: {
				fields: ["url", "width", "height"],
			},
			video: {
				populate: {
					populate: "*",
					user_video: {
						fields: ["url"],
					},
				},
			},
			user_name: "*",
			user_comment: "*",
			stars_rating: "*",
			route: "*",
		},
		sort: ["id:asc"],
	});

	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/reviews-pages?${query}`,
	);
	let data = await res.json();
	data = data.data;

	if (data === null) {
		return {
			notFound: true,
			revalidate: 60,
		};
	}

	const reviews = parseReviews(data);

	const testimonialsQuery = getClientTestimonialsQuery();
	const testimonialRes = await fetch(
		`https://admin.starvanlinesmovers.com/api/client-testimonial?${testimonialsQuery}`,
	);
	const testimonialData = await testimonialRes.json();
	const clientTestimonials =
		testimonialData?.data?.attributes?.ClientTestimonials?.ClientTestimonials ||
		null;
	console.log(reviews, "reviews");
	return {
		props: {
			reviews: reviews,
			clientTestimonials,
		},
		revalidate: 30,
	};
};