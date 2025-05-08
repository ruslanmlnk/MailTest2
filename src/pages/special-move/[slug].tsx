import Head from "next/head";
import { FC } from "react";

import RoutesContent from "@/components/guides/california-movers/routesContent";
import OurServices from "@/components/mainPage/ourServices/ourServices";
import RequestForm from "@/components/mainPage/requestForm";
import Reviews from "@/components/mainPage/reviews/reviews";
import Notfound from "@/components/notfound";
import CalculatorInfo from "@/components/services/calculatorInfo";
import ServiceSpecialHero from "@/components/services/serviceSpecial/serviceSpecialHero";
import {
	ISeoServicePage,
	specialMoveServices,
} from "@/store/services/specialMoveStore/seoSpecialMoveStore";
import getSpecialServicesDataQuery, {
	getSpecialServicePageData,
} from "@/utils/getSpecialServicesDataQuery";

import { addJsonLd_2 } from "../_document";

const SeoSpecialPage: FC<{ page: ISeoServicePage }> = ({ page }) => {
	if (!page) {
		return <Notfound />;
	}
	// function addJsonLd() {
	// 	return {
	// 		__html: `{
	// 			"@context": "https://schema.org/",
	// 			"@type": "BreadcrumbList",
	// 			"itemListElement": [
	// 				 {
	// 					  "@type": "ListItem",
	// 					  "position": 1,
	// 					  "name": "Main",
	// 					  "item": "https://starvanlinesmovers.com"
	// 				 },
	// 				 {
	// 					  "@type": "ListItem",
	// 					  "position": 2,
	// 					  "name": "${page.hero.title}",
	// 					  "item": "https://starvanlinesmovers.com/${page.slug}/"
	// 				 },
	// 			]
	// 			   }`,
	// 	};
	// }

	return (
		<>
			<Head>
				<title>{page.metaTitle}</title>
				<meta
					name="description"
					content={`${page.metaDescription || page.hero.title} | Move your things with Star Vanlines Movers`}
				/>
				<link
					rel="canonical"
					href={`https://starvanlinesmovers.com/special-move/${page.slug}`}
				/>
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2({
						description: `${page.hero.title} | Move your things with Star Vanlines Movers`,
						title: page.metaTitle,
						url: `https://starvanlinesmovers.com/special-move/${page.slug}`,
					})}
				></script>
			</Head>
			<div>
				<ServiceSpecialHero article={page.hero} slug={page.slug}/>
				<RoutesContent content={page.content} />
				<OurServices />
				<CalculatorInfo />
				<Reviews />
				<RequestForm />
			</div>
		</>
	);
};

type Params = {
	params: {
		slug: string;
	};
};

export const getStaticProps = async ({ params }: Params) => {
	const query = getSpecialServicePageData(params.slug);
	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/special-services?${query}`,
	);

	const { data } = await res.json();
	const hero = {
		title: data[0]?.attributes?.hero?.title ?? null,
		coverImage: data[0]?.attributes?.hero?.image?.data?.attributes?.url ?? null,
		description: "",
	};

	const content = data[0]?.attributes?.content ?? null;

	// const page = specialMoveServices.find((item) => item.slug === params.slug);

	const newPage = {
		hero: hero,
		content: content,
		metaTitle: data[0]?.attributes?.meta?.title ?? "",
		metaDescription: data[0]?.attributes?.meta?.description ?? "",
		slug: params.slug,
	};
	return {
		props: {
			page: newPage,
		},
		revalidate: 60,
	};
};
export const getStaticPaths = async () => {
	const query = getSpecialServicesDataQuery();
	const res = await fetch(
		`https://admin.starvanlinesmovers.com/api/special-services?${query}`,
	);

	const { data } = await res.json();

	return {
		paths: data.map((item: any) => ({
			params: { slug: item.attributes.slug },
		})),
		fallback: "blocking",
	};
};

export default SeoSpecialPage;
