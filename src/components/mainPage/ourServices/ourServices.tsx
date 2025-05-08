import clsx from "clsx";
import { FC } from "react";

import style from "@/styles/css/mainPage/ourServices.module.css";
import type { OurServicesListItemType } from "@/types/OurServices";

import OurServicesList from "./components/List";

const list: OurServicesListItemType[] = [
	{
		slug: "long-distance-moving",
		images: "/images/mainPage/services/LongDinstance-icon.png",
		title: "Long distance moving",
		proposal: [
			"Careful transportation over any distances",
			"Insurance of your choice",
			"We will arrive right on time",
			"Free storage for 1 month!",
		],
	},
	{
		slug: "local-moving",
		images: "/images/mainPage/services/Local-icon.png",
		title: "Local moving",
		proposal: [
			"departure of the movers within 1 hour",
			"anywhere in the city by the shortest route",
			"24/7. just in time",
			"Unlimited packing materials (blankets, wardrobes, shrink wrap, tape)",
		],
	},
	{
		slug: "commercial-relocation",
		images: "/images/mainPage/services/CorrmecialRelocation-icon.png",
		title: "Commercial relocation",
		proposal: [
			"Accurate transport of your cargo",
			"Insurance of your choice",
			"We'll be there right on time",
			"Storage for 1 month as a gift!",
		],
	},
	{
		slug: "special-move",
		images: "/images/mainPage/services/SpecialMove-icon.png",
		title: "Special moving",
		proposal: [
			"Careful transportation of valuables",
			"Transportation of any oversized cargo",
			"Insurance of your choice during the move",
			"Specialized packaging and special fasteners",
		],
	},
	{
		slug: "storage",
		images: "/images/mainPage/services/Storage-icon.png",
		title: "Storage",
		proposal: [
			"Storing household goods  from 1 month to infinity",
			"100% guarantee of cargo safety during storage",
			"We'll be there right on time",
			"Storage for 1 month as a gift!",
		],
	},
	{
		slug: "packing-and-unpacking",
		images: "/images/mainPage/services/Packaging-icon.png",
		title: "Packaging",
		proposal: [
			"Packing your items properly",
			"Have 15 types of packing materials",
			"100% guarantee of cargo safety during movement",
		],
	},
];

interface Props {
	cityName?: string;
}

const OurServices: FC<Props> = ({ cityName }) => {
	return (
		<div className={style.ourServices}>
			<div className={style.ourServicesContainer}>
				<p className={style.ourServicesSubTitle}>Our Services</p>

				{cityName ? (
					<h2 className={clsx(style.special)}>
						{"Moving services in\n"}
						{cityName?.replace("movers", "").replace("Movers", "")}
					</h2>
				) : (
					<h2 className={style.ourServicesTitle}>Moving services</h2>
				)}

				<OurServicesList list={list} />
			</div>
		</div>
	);
};

export default OurServices;
