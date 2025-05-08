/* LOCAL MOVING SERVICE PAGE DATA */
import Benefit_1 from "@/../public/images/services/benefits/1_Benefit.webp";
import Benefit_2 from "@/../public/images/services/benefits/2_Benefit.webp";
import Benefit_3 from "@/../public/images/services/benefits/3_Benefit.webp";
import Benefit_4 from "@/../public/images/services/benefits/4_Benefit.webp";
import OurProcess_1 from "@/../public/images/services/localMoving/OurProcess_1.webp";
import OurProcess_2 from "@/../public/images/services/localMoving/OurProcess_2.webp";
import OurProcess_3 from "@/../public/images/services/localMoving/OurProcess_3.webp";
import ClockIcon from "@/../public/images/services/longDistanceMoving/Clock-icon.png";
import GuaranteeIcon from "@/../public/images/services/longDistanceMoving/Guarantee-icon.png";
import CargoTypes_1 from "@/../public/images/services/specialMove/CargoTypes_1_Fragile.webp";
import CargoTypes_2 from "@/../public/images/services/specialMove/CargoTypes_2_Technic.webp";
import CargoTypes_3 from "@/../public/images/services/specialMove/CargoTypes_3_Transport.webp";
import CargoTypes_4 from "@/../public/images/services/specialMove/CargoTypes_7.webp";
import CargoTypes_5 from "@/../public/images/services/specialMove/CargoTypes_8.webp";
import CargoTypes_6 from "@/../public/images/services/specialMove/CargoTypes_9.webp";
import ResponsiveHero from "@/../public/images/services/specialMove/heroResponsive.jpg";
import { ISEOCost } from "@/components/guides/seoCost";
import { IOurValues } from "@/components/ourValues";
import { ICargoType, ICargoTypes } from "@/components/services/cargoTypes";
import { IOurProcess } from "@/components/services/ourProcess";
import { IServiceHero } from "@/components/services/serviceHero";
import { IWhyWeAre } from "@/components/services/whyWeAre";

import ServiceHeroImage from "../../../public/images/mainPage/services/service6.webp";
import TickIcon from "../../../public/images/tick-icon.svg";

export const specialMoveHero: IServiceHero = {
	image: ServiceHeroImage,
	responsiveImage: ResponsiveHero,
	title: "Heavy and bulky items movers",

	description:
		"Stop struggling with bulky furniture and appliances! Star Van Lines offers expert heavy and bulky item moving services for your local or nationwide relocation. Our experienced crews ensure the safe transport of pianos, gun safes, washers, dryers, and more – anywhere in the country. We even provide secure storage solutions if needed. Get a free quote today and experience a stress-free heavy item move with Star Van Lines, your trusted moving partner!",
	points: [
		{
			icon: ClockIcon,
			title: "Moving without loss of time",
			description:
				"We will calculate the price in advance, we will come, we will pack, we will carefully transport and put in the right place without damage.",
		},
		{
			icon: GuaranteeIcon,
			title: "Guarantee the safety of cargo",
			description:
				"For more than 10 years we have been working according to our company's standards, so we pack each shipment individually to keep it intact.",
		},
	],
};

export const specialMoveCargoTypes: ICargoTypes = {
	title: "Transportation of all types of cargo",
	types: [
		{
			icon: CargoTypes_1,
			title: "Fragile items",
			description: "Aquariums, mirrors, glassware",
		},
		{
			icon: CargoTypes_2,
			title: "Music, household and office equipment",
			description:
				"Pianos, grand pianos, guitars, computers, refrigerators, washing machines",
		},
		{
			icon: CargoTypes_3,
			title: "Transportation and sports equipment",
			description: "Motorcycles, ATVs, jet skis, snowboards, etc.",
		},
	],
};

export const specialMoveSeoType: ICargoType = {
	typelink: [
		{
			icon: CargoTypes_5,
			title: "Pooltable move",
			description: "/special-move/pooltable-move",
		},
		{
			icon: CargoTypes_4,
			title: "Piano move",
			description: "/special-move/piano-move",
		},
		{
			icon: CargoTypes_6,
			title: "Military move",
			description: "/special-move/military-move",
		},
	],
};

export const specialMoveOurProcess: IOurProcess = {
	title: "A simple but <span> powerful <span> and efficient process",
	description:
		"We offer comprehensive moving and storage services for all types of cargo for your convenience",
	cards: [
		{
			icon: OurProcess_1,
			title: "Describe or take pictures of items",
			description:
				"Contact us — our specialists will calculate the cost by volume",
		},
		{
			icon: OurProcess_2,
			title: "We'll tell you the exact cost",
			description:
				"It will not change in the process. Packing, work and transportation are already included in the price",
		},
		{
			icon: OurProcess_3,
			title: "Focus on your own matters",
			description:
				"Our specialists will do everything themselves: pack, load in the truck, transport and put in place",
		},
	],
};

export const specialMoveValues: IOurValues = {
	title: "Why Star Van Lines?",
	values: [
		{
			icon: Benefit_1,
			title: "Relocation in one click",
			description:
				"Leave an application. Star Van Lines handles everything. No preparation needed.",
		},
		{
			icon: Benefit_2,
			title: "With care for your belongings",
			description:
				"We use 15 types of packing materials to guarantee the safety of your belongings.",
		},
		{
			icon: Benefit_3,
			title: "Moving with a smile",
			description:
				"Our friendly movers handle it all: china packing, couch disassembly, accurate estimates, and zero losses.",
		},
		{
			icon: Benefit_4,
			title: "Don't worry about storage",
			description:
				"If your move-out date doesn't align with your new place, we can store your belongings for you.",
		},
	],
};

export const specialMoveWhyWeAre: IWhyWeAre = {
	points: [
		{
			icon: TickIcon,
			text: "Packaging materials (excluding boxes)",
		},
		{
			icon: TickIcon,
			text: "Packing items",
		},
		{
			icon: TickIcon,
			text: "Furniture disassembly",
		},
		{
			icon: TickIcon,
			text: "Taking out and loading items, furniture and household appliances into the truck",
		},
		{
			icon: TickIcon,
			text: "Shipping",
		},
		{
			icon: TickIcon,
			text: "Unloading and lifting items, furniture and appliances to the floor",
		},
		{
			icon: TickIcon,
			text: "Help with on-site accommodations if needed",
		},
	],
};

export const specialMoveTabsWithContent: ISEOCost = {
	id: 1,
	title: "Specialized Transportation Services",
	tab: [
		{
			tabTitle: "Expert Handling",
			tabContent:
				"Entrust us with the secure relocation of your fine art pieces. Our specialized transportation services ensure the safe and careful handling of valuable artworks. From packing to transport, we prioritize precision to safeguard your treasured art pieces during the entire moving process.",
		},
		{
			tabTitle: "Piano Moving",
			tabContent:
				" Our team specializes in the careful relocation of pianos. Whether it's an upright or grand piano, we handle these delicate instruments with precision and care. Trust us for specialized piano moving services that prioritize the safety of your musical investments.",
		},
		{
			tabTitle: "Antiques and Fragile",
			tabContent:
				"Ensure the preservation of your antiques and fragile items during relocation. Our team employs precision and care to safeguard your special belongings throughout the moving process. With meticulous attention to detail, we ensure that your valuables reach their destination in pristine condition.",
		},
	],
};
