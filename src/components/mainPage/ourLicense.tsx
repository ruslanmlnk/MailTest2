import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Benzinga from "@/../public/images/mainPage/benzinga.jpg";
import Arrow from "@/../public/images/mainPage/button-arrow.svg";
import GlobeAndMail from "@/../public/images/mainPage/globeandmail.jpg";
import whyUsPreview from "@/../public/images/mainPage/whyUs.jpg";
import style from "@/styles/css/mainPage/ourLicense.module.css";

import { AnimatedNumber } from "../animatedNumber";
import GetAQuotePopup from "../getAQuotePopup";

export const TrustBoxComponent = dynamic(() => import("../TrustBox"), {
	ssr: false,
});

const OurLicense = () => {
	const [isPopupOpened, setIsPopupOpened] = useState(false);

	return (
		<>
			<GetAQuotePopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<section className={style.section}>
				<div className={`block-container`}>
					<div className={style.title}>
						<h2>
							Why you can trust <br /> us with your relocation
						</h2>

						<div className={`${style.buttons} ${style.buttons_desktop}`}>
							<button className="main" onClick={() => setIsPopupOpened(true)}>
								Get a quote <Image src={Arrow} alt="arrow right icon" />{" "}
							</button>
							<Link href="/about">
								<button className="add">Learn more</button>
							</Link>
						</div>
					</div>

					<div className={style.description}>
						<p>
							STAR VAN LINES is a full-service home and business moving, packing
							and unpacking, and storage company in all states of the United
							States. We proudly offer professionally trained movers along with
							top-of-the-line equipment and resources to exceed your
							expectations.
						</p>
					</div>

					<div className={`${style.buttons} ${style.buttons_mobile}`}>
						<button className="main" onClick={() => setIsPopupOpened(true)}>
							Get a quote <Image src={Arrow} alt="arrow right icon" />{" "}
						</button>
						<Link href="/about">
							<button className="add">Learn more</button>
						</Link>
					</div>

					<div className={style.grid}>
						<div>
							<p className={style.text}>
								<AnimatedNumber value={7} duration={1000} />
								<b>+</b>
							</p>
							<p>Years in private and commercial relocations</p>
						</div>
						<div>
							<p className={style.text}>
								<AnimatedNumber value={4} duration={1000} />
								,9<b>/</b>5
							</p>
							<p>NPS rating of clients about our services</p>
						</div>
						<div>
							<p className={style.text}>
								<AnimatedNumber value={75} duration={1000} />
								<b>+</b>
							</p>
							<p>Our fleet has a variety of moving trucks</p>
						</div>
						<div>
							<p className={style.text}>
								<AnimatedNumber value={240} duration={1000} />

								<b>+</b>
							</p>
							<p>Reviews on major platforms</p>
						</div>
						<div>
							<p className={style.text}>
								<AnimatedNumber value={12} duration={1000} />

								<b>K</b>
							</p>
							<p>During this time, cargo shipments were made</p>
						</div>
						<div>
							<p className={style.text}>
								<AnimatedNumber value={50} duration={1000} />
								<b></b>
							</p>
							<p>Relocation services in all U.S. states</p>
						</div>
					</div>

					<div className={style.theyWriteAboutUs}>
						<p className={style.aboutText}>
							They write <br /> about us:
						</p>
						<div className={style.logos}>
							<Link
								target="_blank"
								href="https://www.benzinga.com/pressreleases/23/11/ab35885269/with-over-40-offices-warehouses-nationwide-star-van-lines-movers-achieved-the-highest-growth-in-2"
							>
								<Image src={Benzinga} alt="benzinga logo" />
							</Link>
							<Link
								target="_blank"
								href="https://www.theglobeandmail.com/investing/markets/markets-news/GetNews/22170329/with-over-40-offices-warehouses-nationwide-star-van-lines-movers-achieved-the-highest-growth-in-2023-among-us-moving-companies/"
							>
								<Image src={GlobeAndMail} alt="globe and mail logo" />
							</Link>
						</div>
					</div>

					<div className={style.whyUs}>
						<p className={style.descriptionMobile}>
							Experience seamless long-distance moving with our top-notch
							customer service. From loading to unloading, we handle it all. Get
							a moving quote today and benefit from our professional packing
							services. With expertise in state-to-state moves, we offer storage
							solutions tailored to your needs. Whether you're moving across the
							state or across the country, trust us to make your relocation
							smooth and stress-free.
						</p>
						<div className={style.whyUsPreview}>
							<video
								width={"100%"}
								controls
								preload="none"
								poster="/images/mainPage/whyUs2.webp"
							>
								<source src="/svl_adv.mp4" type="video/mp4"></source>
							</video>
						</div>
						<div className={style.whyUsText}>
							<p className={style.title}>why us</p>
							<h2>Experience the best service with us</h2>
							<p>
								Experience seamless long-distance moving with our top-notch
								customer service. From loading to unloading, we handle it all.
								Get a moving quote today and benefit from our professional
								packing services. With expertise in state-to-state moves, we
								offer storage solutions tailored to your needs. Whether you're
								moving across the state or across the country, trust us to make
								your relocation smooth and stress-free.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default OurLicense;
