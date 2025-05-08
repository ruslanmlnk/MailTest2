import { observer } from "mobx-react-lite";
import Image from "next/image";

// assets
import Packaging from "@/../public/images/calculator/packaging.webp";
import Storage from "@/../public/images/calculator/storage.webp";
import calculatorStore from "@/store/calculatorStore";
import formsStore from "@/store/formsStore";
import style from "@/styles/scss/calculator/extraServices.module.scss";

import { Navigation } from "../UpdatedCalculator/Navigation/Navigation";
import SliderPagination from "./sliderPagination";

const ExtraServices = () => {
	const updateExtrasInFormStore = () => {
		const selectedExtras = [];

		if (calculatorStore.extras.packaging) {
			selectedExtras.push("Packaging");
		}

		if (calculatorStore.extras.storage) {
			selectedExtras.push("Storage");
		}

		formsStore.CalculatorData.extras = selectedExtras.join(", ");
	};
	return (
		<section className={style.section_}>
			<SliderPagination sliderLenght={4} activeSlide={4} />
			<div className={`block-container ${style.container}`}>
				<h2>If you wish, select an additional service</h2>
				<div>
					<div
						className={`${style.extra} ${
							calculatorStore.extras.packaging && style.active
						}`}
						onClick={() => {
							calculatorStore.extras.packaging =
								!calculatorStore.extras.packaging;
							updateExtrasInFormStore();
						}}
					>
						<Image src={Packaging} alt="extra service image SVL" />
						<h2>Packing</h2>
						<p>
							We provide services of careful packing of your cargo in our
							materials to preserve the quality of the items during the move{" "}
							<b>
								(1$ per ft<sup>3</sup>)
							</b>
						</p>
						<div className={style.choose}>
							<div className={style.checkbox}></div>
						</div>
					</div>
					<div
						className={`${style.extra} ${
							calculatorStore.extras.storage && style.active
						}`}
						onClick={() => {
							calculatorStore.extras.storage = !calculatorStore.extras.storage;
							updateExtrasInFormStore();
						}}
					>
						<Image src={Storage} alt="extra service image SVL" />
						<h2>Storage</h2>
						<p>
							We accept your shipments for storage in our specially equipped
							warehouses for short or long term storage <b>(1 month free)</b>
						</p>
						<div className={style.choose}>
							<div className={style.checkbox}></div>
						</div>
					</div>
				</div>
			</div>
			<Navigation
				nextBtn={{ text: "next", link: "/check" }}
				prevBtn={{ text: "back", link: "/inventory" }}
				isSpaceBetween
			/>
		</section>
	);
};

export default observer(ExtraServices);
