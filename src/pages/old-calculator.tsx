import { observer } from "mobx-react-lite";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// assets
import Arrow from "@/../public/images/mainPage/arrow.svg";
import Categories from "@/components/UpdatedCalculator/CalculateCostsSection/Categories/Categories";
import PreCalculatorSection from "@/components/UpdatedCalculator/PreCalculatorSection/PreCalculatorSection";
import AddressSelection from "@/components/calculator/addressSelection";
import BasicСalculations from "@/components/calculator/basicСalculations";
import CalculatorPage from "@/components/calculator/calculatorPage";
import ClientData from "@/components/calculator/clientData";
import ExtraServices from "@/components/calculator/extraServices";
// components
import SliderPagination from "@/components/calculator/sliderPagination";
import Total from "@/components/calculator/total";
import { validatePhoneNumber } from "@/components/map/requestForm";
// interfaces
import calculatorStore from "@/store/calculatorStore";
import formsStore from "@/store/formsStore";
import popupsStore from "@/store/popupsStore";
import style from "@/styles/css/calculator/calculator.module.css";

interface IClientData {
	clientName?: string;
	phoneNumber: string | null;
	email?: string;
}

interface IExtras {
	packaging: boolean;
	storage: boolean;
}

interface IMovingData {
	date: Date | null;
	extras: IExtras;
}

export interface ICalculatorData {
	clientData: IClientData;
	movingData: IMovingData;
}

const Calculator = () => {
	const [swiper, setSwiper] = useState<any>();
	const [currentPage, setCurrentPage] = useState<number>(0);

	const handleNextSlide = () => {
		if (swiper) {
			const currentIndex = swiper.realIndex;
			setCurrentPage(currentIndex);
			swiper.slideNext();
		}
	};

	const activeSlide = {
		height: "0",
	};
	return (
		<>
			<Head>
				<title>
					Cost of Hiring Professional Movers | Affordable Moving Services
				</title>
				<meta
					name="description"
					content="Explore the cost of hiring professional movers for your relocation needs. Our affordable moving services ensure reliable and efficient assistance from experienced professionals. Get a quote and enjoy a smooth moving process."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={style.main}>
				<div className={`block-container ${style.title}`}>
					<h1>Moving Cost Calculator</h1>
				</div>

				<section className={style.section}>
					<SliderPagination
						sliderLenght={4}
						activeSlide={calculatorStore.currentSlide + 1}
					/>
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						className={style.swiper}
						slideClass={style.swiperSlide}
						onActiveIndexChange={(swiper) => {
							calculatorStore.currentSlide = swiper.realIndex;
							setCurrentPage(swiper.realIndex);
						}}
						onSwiper={(swiper) => setSwiper(swiper)}
						allowTouchMove={false}
					>
						<SwiperSlide style={currentPage === 0 ? {} : activeSlide}>
							<ClientData />
						</SwiperSlide>

						<SwiperSlide style={currentPage === 1 ? {} : activeSlide}>
							<AddressSelection />
						</SwiperSlide>

						<SwiperSlide style={currentPage === 2 ? {} : activeSlide}>
							<BasicСalculations />
						</SwiperSlide>

						<SwiperSlide style={currentPage === 3 ? {} : activeSlide}>
							<ExtraServices />
						</SwiperSlide>

						<SwiperSlide style={currentPage === 4 ? {} : activeSlide}>
							<Total />
						</SwiperSlide>
					</Swiper>
					<div className={style.swiperControls}>
						{calculatorStore.currentSlide > 0 && (
							<div
								className={style.prev}
								onClick={() => {
									swiper.slidePrev();
									setCurrentPage(currentPage - 1);
								}}
							>
								<Image src={Arrow} alt="prev" />
								<p>Back</p>
							</div>
						)}
						{calculatorStore.currentSlide == 0 && <p />}
						{calculatorStore.currentSlide < 4 && (
							<div
								className={`${style.next} ${
									calculatorStore.isNextSlideAllowed && style.active
								}`}
								id={
									calculatorStore.currentSlide === 0
										? "form_submit_calculatorNextButton"
										: ""
								}
								onClick={() => {
									handleNextSlide();
									calculatorStore.isNextSlideAllowed = false;
									if (calculatorStore.currentSlide === 1) {
										if (validatePhoneNumber(formsStore.CalculatorData.phone1)) {
											// formsStore.quietSendQuote(
											// 	"https://api.starvanlinesmovers.com/send/newQuote",
											// 	formsStore.PreCalculatorData,
											// 	undefined,
											// );
										} else {
											swiper.slidePrev();
											popupsStore.toastAlert(
												"error",
												formsStore.CalculatorData.phone1[4] === "1"
													? "Please enter a valid phone number (invalid area code)"
													: "Please enter a valid phone number",
												10000,
											);
										}
									}
								}}
							>
								<p>Next</p>
								<Image src={Arrow} alt="next" />
							</div>
						)}
					</div>
				</section>
			</main>
		</>
	);
};

export default observer(Calculator);
