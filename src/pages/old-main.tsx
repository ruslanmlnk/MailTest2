import Head from "next/head";

import CarefullTransportation from "@/components/mainPage/carefullTransportation/carefullTransportation";
import Present from "@/components/mainPage/checklistForm";
import First from "@/components/mainPage/first";
import OurLicense from "@/components/mainPage/ourLicense";
import OurServices from "@/components/mainPage/ourServices/ourServices";
import RequestForm from "@/components/mainPage/requestForm";
import Reviews from "@/components/mainPage/reviews/reviews";
import ServiceMap from "@/components/mainPage/serviceMap";
import style from "@/styles/css/mainPage/mainPage.module.css";

function Home() {
	return (
		<>
			<Head>
				<title>Trusted Van Movers for Your Relocation | Star Van Lines</title>
				<meta
					name="description"
					content="Looking for trusted van movers? Star Van Lines is your reliable choice. Our experienced team of van movers is dedicated to providing a seamless and stress-free relocation experience. Whether you're moving locally or long distance, trust us to handle your move with care. Discover our professional van moving services today!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className={style.main}>
				<First />
				<OurServices />
				<OurLicense />
				<CarefullTransportation />
				<ServiceMap />
				<Reviews />
				<Present />
				<RequestForm />
			</main>
		</>
	);
}

export default Home;
