import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Script from "next/script";
import { UAParser } from "ua-parser-js";

import Hero from "@/components/about/hero";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { ClientTestimonials } from "@/components/clientTestimonials/clientTestimonials";
import ContactRequestForm from "@/components/contacts/contact-request-form/contactRequestForm";
import WarehousesMap from "@/components/contacts/warehousesMap";
import { useMobile } from "@/lib/useMobile";
import { contactsHero } from "@/store/contactsStore";
import style from "@/styles/css/about/about.module.css";
import getClientTestimonialsQuery from "@/utils/clientTestimonialsQuery";
import { getIsMobileFromContext } from "@/utils/getIsMobileFromContext";

import { addJsonLd_2 } from "./_document";
import { ConsumerReviewsCarousel } from "@/components/ConsumerReviewsCarousel/ConsumerReviewsCarousel";

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
			initialDisplay: isMobile,
			clientTestimonials,
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
				  "name": "Contacts",
				  "item": "https://starvanlinesmovers.com/contacts/"
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
				<title>Star Van Lines Contacts</title>
				<meta
					name="description"
					content="Need to get in touch with Star Van Lines? Find all our contact information here, including phone numbers, email addresses, and office locations to reach our moving experts."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href="https://starvanlinesmovers.com/contacts" />
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
							"Need to get in touch with Star Van Lines? Find all our contact information here, including phone numbers, email addresses, and office locations to reach our moving experts.",
						title: "Star Van Lines Contacts",
						url: `https://starvanlinesmovers.com/contacts`,
					})}
				></script>
			</Head>
			<main className={style.main}>
				<Hero store={contactsHero} isMobile={isMobile} />
				<div className={style.testimonialsContactsBg}>
					{clientTestimonials && clientTestimonials.length > 0 && (
						<ClientTestimonials
							TestimonialItems={clientTestimonials}
							className={style.testimonialsContacts}
						/>
					)}
				</div>
				<ContactRequestForm />
                <ConsumerReviewsCarousel />
				{!isMobile && <WarehousesMap />}
			</main>
		</>
	);
}

export default Home;
