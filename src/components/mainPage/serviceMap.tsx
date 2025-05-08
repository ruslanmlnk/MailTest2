import { observer } from "mobx-react-lite";
import Image from "next/image";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "use-debounce";

import Shipping from "@/../public/images/mainPage/serviceMap/car-image.webp";
import Gift from "@/../public/images/mainPage/serviceMap/gift2.webp";
// assets
import PointAIcon from "@/../public/images/mainPage/serviceMap/pointA-icon.svg";
import PointBIcon from "@/../public/images/mainPage/serviceMap/pointB-icon.svg";
import calculatorStore from "@/store/calculatorStore";
import formsStore from "@/store/formsStore";
// data
import mapStore, { IUSCities } from "@/store/mapStore";
import style from "@/styles/css/mainPage/serviceMap.module.css";

// components
import { DynamicMap } from "../map/dynamicMap";

const FoundedItemsDropdown: FC<{
	isFoundedItemsDropdownOpened: boolean[];
	setIsFoundedItemsDropdownOpened: React.Dispatch<
		React.SetStateAction<boolean[]>
	>;
	setInputValueText: (str: string) => void;
	inputId: number;
}> = ({
	isFoundedItemsDropdownOpened,
	setIsFoundedItemsDropdownOpened,
	setInputValueText,
	inputId,
}) => {
	return (
		<div
			className={`${style.dropdown} ${
				isFoundedItemsDropdownOpened[inputId] && style.opened
			}`}
		>
			{mapStore.foundCities.map((item: IUSCities, index) => (
				<div
					onClick={() => {
						setInputValueText(item.zip_code.toString());
						if (inputId == 0) {
							mapStore.postcodes[inputId] = item.zip_code;
							formsStore.CalculatorData.fromzip = parseInt(item.zip_code);
						} else {
							mapStore.postcodes[inputId] = item.zip_code;
							formsStore.CalculatorData.tozip = parseInt(item.zip_code);
						}
						setIsFoundedItemsDropdownOpened([false, false]);
					}}
				>
					<p key={index}>
						{item.city} ({item.zip_code})
					</p>
				</div>
			))}
		</div>
	);
};

interface MapInputs {
	from: string;
	to: string;
}

const useMapHook = (): [
	string,
	string,
	(e: React.ChangeEvent<HTMLInputElement> | string) => void,
	(e: React.ChangeEvent<HTMLInputElement> | string) => void,
	MapInputs,
] => {
	const [mapInputs, setMapInputs] = useState<MapInputs>({ from: "", to: "" });
	const [debounceFrom] = useDebounce(mapInputs.from, 500);
	const [debounceTo] = useDebounce(mapInputs.to, 500);

	const handleInputFrom = useCallback(
		(e: React.ChangeEvent<HTMLInputElement> | string) => {
			console.log(typeof e);
			if (typeof e === "string") {
				setMapInputs((old) => ({ ...old, from: e }));
			} else {
				const { value } = e.target;
				setMapInputs((old) => ({ ...old, from: value }));
			}
		},
		[],
	);

	const handleInputTo = useCallback(
		(e: React.ChangeEvent<HTMLInputElement> | string) => {
			if (typeof e === "string") {
				setMapInputs((old) => ({ ...old, to: e }));
			} else {
				const { value } = e.target;
				setMapInputs((old) => ({ ...old, to: value }));
			}
		},
		[],
	);

	return [debounceFrom, debounceTo, handleInputFrom, handleInputTo, mapInputs];
};

const ServiceMap = ({ className }: { className?: string }) => {
	const [isFoundedItemsDropdownOpened, setIsFoundedItemsDropdownOpened] =
		useState<boolean[]>([false, false]);

	const [debFrom, debTo, handleDebFrom, handleDebTo, inpts] = useMapHook();

	useEffect(() => {
		if (debFrom) {
			mapStore.searchedText = debFrom;
			formsStore.RequestFormData.ZipFrom = debFrom;
			formsStore.CalculatorData.fromzip = parseInt(debFrom);
			mapStore.postcodes[0] = debFrom;
			if (mapStore.foundCities.length > 0)
				setIsFoundedItemsDropdownOpened([true, false]);
		}
	}, [debFrom]);

	useEffect(() => {
		if (debTo) {
			mapStore.searchedText = debTo;
			formsStore.RequestFormData.ZipTo = debTo;
			formsStore.CalculatorData.tozip = parseInt(debTo);
			mapStore.postcodes[1] = debTo;
			if (mapStore.foundCities.length > 0)
				setIsFoundedItemsDropdownOpened([false, true]);
		}
	}, [debTo]);

	const { ref, inView } = useInView();

	return (
		<section className={style.section}>
			<div className={`block-container ${style.container} ${className || ""}`}>
				<div className={style.header}>
					<p className={style.title}>moving cost calculator</p>
					<h2>
						Know your moving price <span>in&nbsp;1&nbsp;minute</span>
					</h2>
					<p>
						We move your household goods across U.S. and help you saving money
					</p>
				</div>

				<div ref={ref} className={style.mapContainer}>
					{inView ? <DynamicMap /> : null}
					<div className={style.mapSettings}>
						<div className={style.form}>
							<span className={style.formTitle}>Find out moving costs</span>
							<p>Where are we moving from?</p>
							<div className={style.input}>
								<div className={style.inputWrapper}>
									<Image src={PointAIcon} alt="point a icon" />
									<div>
										<input
											id="point_a"
											type="text"
											placeholder=" "
											required
											value={inpts.from}
											onChange={handleDebFrom}
											onFocus={(e) => {
												mapStore.searchedText = e.currentTarget.value;
												if (mapStore.foundCities.length > 0)
													setIsFoundedItemsDropdownOpened([true, false]);
											}}
											onBlur={() => {
												setTimeout(() => {
													setIsFoundedItemsDropdownOpened([false, false]);
												}, 150);
												mapStore.searchedText = "";
											}}
										/>
										<label>ZIP code / city</label>
									</div>
								</div>
								<FoundedItemsDropdown
									isFoundedItemsDropdownOpened={isFoundedItemsDropdownOpened}
									setIsFoundedItemsDropdownOpened={
										setIsFoundedItemsDropdownOpened
									}
									setInputValueText={handleDebFrom}
									inputId={0}
								/>
							</div>
							<p>Where are we moving to?</p>
							<div className={style.input}>
								<div className={style.inputWrapper}>
									<Image src={PointBIcon} alt="point b icon" />
									<div>
										<input
											id="point_b"
											type="text"
											placeholder=" "
											required
											value={inpts.to}
											onChange={handleDebTo}
											onFocus={(e) => {
												mapStore.searchedText = e.currentTarget.value;

												if (mapStore.foundCities.length > 0)
													setIsFoundedItemsDropdownOpened([false, true]);
											}}
											onBlur={() => {
												setTimeout(() => {
													setIsFoundedItemsDropdownOpened([false, false]);
												}, 150);
												mapStore.searchedText = "";
											}}
										/>
										<label>ZIP code / city</label>
									</div>
								</div>
								<FoundedItemsDropdown
									isFoundedItemsDropdownOpened={isFoundedItemsDropdownOpened}
									setIsFoundedItemsDropdownOpened={
										setIsFoundedItemsDropdownOpened
									}
									setInputValueText={handleDebTo}
									inputId={1}
								/>
							</div>
						</div>
						<div className={style.shippingCost}>
							<Image src={Shipping} alt="shipping truck icon" />
							<div>
								<p> Preliminary shipping cost</p>
								<div className={style.cost}>
									<p>
										from{" "}
										<span suppressHydrationWarning>
											{calculatorStore.cost.toFixed(0)} USD
										</span>
									</p>
									<div />
									<p className={style.distance}>
										{Math.round(mapStore.distance) !== Math.round(4522.9345)
											? Math.floor(mapStore.distance * 0.621371)
											: 0}{" "}
										miles
									</p>
								</div>
							</div>
						</div>
						<p className={style.gift}>
							<Image src={Gift} alt="gift icon" /> Calculate your moving costs{" "}
							<br /> and receive a gift
						</p>
						<Link href="/calculator">
							<button type="button" className="main">
								Calculate cost
							</button>
						</Link>
					</div>
				</div>
				<div className={style.mapSettingsMobile}>
					<div className={style.form}>
						<h3>Find out moving costs</h3>
						<div className={style.input}>
							<Image src={PointAIcon} alt="point a icon" />
							<div>
								<input id="point_a" type="text" placeholder=" " required />
								<label>ZIP code / city</label>
								<label className={style.labelMobile}>
									Where are we moving from?
								</label>
							</div>
						</div>
						<div className={style.input}>
							<Image src={PointBIcon} alt="point b icon" />
							<div>
								<input id="point_b" type="text" placeholder=" " required />
								<label>ZIP code / city</label>
								<label className={style.labelMobile}>
									Where are we moving to?
								</label>
							</div>
						</div>
					</div>
					<div className={style.shippingCost}>
						<Image src={Shipping} alt="shipping truck icon" />
						<div>
							<p>Preliminary shipping cost</p>
							<div className={style.cost}>
								<p>
									from{" "}
									<span suppressHydrationWarning>
										{calculatorStore.cost.toFixed(0)} USD
									</span>
								</p>
								<div />
								<p className={style.distance}>
									{Math.floor(mapStore.distance * 0.621371)} miles
								</p>
							</div>
						</div>
					</div>
					<p className={style.gift}>
						<Image src={Gift} alt="gift icon" /> Calculate your moving costs{" "}
						<br /> and receive a gift
					</p>
					<Link href="/calculator">
						<button type="button" className="main">
							Calculate cost
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default observer(ServiceMap);
