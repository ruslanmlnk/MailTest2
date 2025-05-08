import Head from "next/head";

import OurServices from "../mainPage/ourServices/ourServices";
import RequestForm from "../mainPage/requestForm";
import Reviews from "../mainPage/reviews/reviews";
import CalculatorInfo from "../services/calculatorInfo";
import RoutesContent from "./california-movers/routesContent";
import ZipHero, { IZipCodeHero } from "./california-movers/zipHero";

const ZipCodePage = ({ page }: any) => {
	const hero: IZipCodeHero = {
		title: page.title,
		description: page.description,
		zipCode: page.zipCode,
	};

	return (
		<>
			<Head>
				<title>{page.metaTitle ? page.metaTitle : page.title}</title>
				<meta
					name="description"
					content={
						page.metaDescription
							? page.metaDescription
							: `${page.title}. Simplify your move with Star Vanlines Movers. Our team provides top-notch and stress-free moving solutions.`
					}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<ZipHero store={hero} />
				<RoutesContent content={page.content} />
				<OurServices />
				<CalculatorInfo />
				<Reviews />
				<RequestForm />
			</div>
		</>
	);
};

export default ZipCodePage;
