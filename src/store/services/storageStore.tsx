/* LOCAL MOVING SERVICE PAGE DATA */
import CargoTypes_1 from "@/../public/images/services/localMoving/CargoTypes_1.webp";
import CargoTypes_2 from "@/../public/images/services/localMoving/CargoTypes_2.webp";
import CargoTypes_4 from "@/../public/images/services/localMoving/CargoTypes_4.webp";
import OurProcess_1 from "@/../public/images/services/localMoving/OurProcess_1.webp";
import OurProcess_2 from "@/../public/images/services/localMoving/OurProcess_2.webp";
import OurProcess_3 from "@/../public/images/services/localMoving/OurProcess_3.webp";
import GuaranteeIcon from "@/../public/images/services/longDistanceMoving/Guarantee-icon.png";
import Benefit_1 from "@/../public/images/services/storage/Benefit_1.webp";
import Benefit_2 from "@/../public/images/services/storage/Benefit_2.webp";
import Benefit_3 from "@/../public/images/services/storage/Benefit_3.webp";
import Benefit_4 from "@/../public/images/services/storage/Benefit_4.webp";
import Benefit_5 from "@/../public/images/services/storage/Benefit_5.webp";
import Benefit_6 from "@/../public/images/services/storage/Benefit_6.webp";
import ClimateIcon from "@/../public/images/services/storage/Climate-icon.png";
import ServiceHeroImage from "@/../public/images/services/storage/hero.jpg";
import ResponsiveHero from "@/../public/images/services/storage/heroResponsive.jpg";
import TickIcon from "@/../public/images/tick-icon.svg";
import { FAQCardProps } from "@/components/faq";
import { ISEOCost } from "@/components/guides/seoCost";
import { IOurValues } from "@/components/ourValues";
import { ICargoTypes } from "@/components/services/cargoTypes";
import { IOurProcess } from "@/components/services/ourProcess";
import { IServiceHero } from "@/components/services/serviceHero";
import { IWhyWeAre } from "@/components/services/whyWeAre";

export const StorageHero: IServiceHero = {
	image: ServiceHeroImage,
	responsiveImage: ResponsiveHero,
	title: "<span> Storing <span> items during the move",

	description:
		"Are you in need of moving and storage services? Look no further. Finding reputable moving and storage companies near you is essential for a seamless and convenient relocation experience. At Star Van Lines, we specialize in providing reliable moving and storage solutions tailored to your specific needs.",
	points: [
		{
			icon: ClimateIcon,
			title: "Ideal storage microclimate",
			description:
				"The boxes are clean, dry, warm, and have an effective ventilation system. Your belongings will not suffer from dampness, mold or rodents.",
		},
		{
			icon: GuaranteeIcon,
			title: "100% safe storage guarantee",
			description:
				"Reliable protection against unauthorized entry and theft provides a system of video surveillance, motion detectors and a security guard permanently on the premises.",
		},
	],
};

export const StorageCargoTypes: ICargoTypes = {
	title: "Keep your favorite things safe",
	types: [
		{
			icon: CargoTypes_1,
			title: "Any kind of goods",
			description:
				"Save time on delivery of newly purchased goods to the final point. We can help you deliver any type of cargo just in time",
		},
		{
			icon: CargoTypes_2,
			title: "Furniture",
			description:
				"Refrigerators, large cabinets, kitchen tables, double beds and chairs. We have extensive experience in disassembly, assembly and transportation of any furniture",
		},
		{
			icon: CargoTypes_4,
			title: "Equipment",
			description:
				"We move pianos, pool tables, gym items, kitchen equipment, and other types of technical equipment",
		},
	],
};

export const StorageOurProcess: IOurProcess = {
	title: "A simple but <span> powerful <span> and efficient process",
	description:
		"We offer comprehensive moving and storage services for all types of cargo for your convenience",
	cards: [
		{
			icon: OurProcess_1,
			title: "Easy and accurate calculation",
			description:
				"Submit the form, get a calculation in 30 minutes. Or use the website calculator for a self-calculation.",
		},
		{
			icon: OurProcess_2,
			title: "All our packing and handling",
			description:
				"Moving made easy: Take essentials, we handle the rest. Our movers unpack, pack professionally, and store your belongings. ",
		},
		{
			icon: OurProcess_3,
			title: "Everything is in place with one call!",
			description:
				"We'll return items upon request at any time: just call and we'll bring them to the new address.",
		},
	],
};

export const StorageValues: IOurValues = {
	title: "Why are we trusted to store things?",
	values: [
		{
			icon: Benefit_1,
			title: "Secure warehouses",
			description:
				"Round-the-clock security and permit regime on the territory.",
		},
		{
			icon: Benefit_2,
			title: "24/7 video surveillance",
			description:
				"Constant video surveillance without blind spots - 24 cameras in the warehouse.",
		},
		{
			icon: Benefit_3,
			title: "Correct temperature regime",
			description:
				"Controlled temperature and humidity, regular cleaning - class A warehouse.",
		},
		{
			icon: Benefit_4,
			title: "Personal storage",
			description:
				"Personal storage for customers' belongings on individual pallets, with separate sections for item types.",
		},
		{
			icon: Benefit_5,
			title: "Sophisticated tracking",
			description:
				"Barcoding system for all items in the warehouse - nothing gets lost.",
		},
		{
			icon: Benefit_6,
			title: "Easy to use",
			description:
				"Easy item management - you can take or return items with just one click.",
		},
	],
};

export const StorageWhyWeAre: IWhyWeAre = {
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
			text: "Delivery to the warehouse",
		},
	],
};

export const storageTabsWithContent: ISEOCost = {
	id: 1,
	title: "Secure Storage Solutions",
	tab: [
		{
			tabTitle: "Climate-Control",
			tabContent:
				"Secure your belongings in our climate-controlled storage units. Our facilities provide a controlled environment to protect your items from temperature fluctuations, ensuring their longevity. We prioritize the safety and condition of your possessions with our state-of-the-art climate-controlled storage solutions., we prioritize precision to safeguard your treasured art pieces during the entire moving process.",
		},
		{
			tabTitle: "Flexible Options",
			tabContent:
				"Choose from a range of flexible storage options to suit your needs. Our solutions cater to both short-term and long-term storage requirements, providing the flexibility you need. Whether you require temporary storage during a move or a long-term solution, we have the options to accommodate your specific storage needs.",
		},
		{
			tabTitle: "24/7 Monitoring",
			tabContent:
				"Rest easy knowing your items are under 24/7 security monitoring. Our storage facilities prioritize the safety of your possessions with constant surveillance and advanced security measures. With our commitment to security, your belongings are in safe hands throughout their time in storage., we ensure that your valuables reach their destination in pristine condition.",
		},
	],
};

export const storageFAQCards: FAQCardProps[] = [
	{
		title: "Do your facilities have climate controlled storage units?",
		content:
			"Yes, they do! A place that can protect your things from extreme temperatures keeps them safe. They will move into your new home in perfect condition. ",
	},
	{
		title: "Do you provide portable storage?",
		content:
			"Yes, we do. A good option for moving and storing your belongings during a home renovation or when you're in between homes. Also you can save money by loading portable storage by yourself. ",
	},
	{
		title: "What size of a unit do I need?",
		content:
			"Our manager can determine the size of a unit according to the list of your belongings. Good stacking of your goods can save you space and you will be able to locate your load in a cheap storage. ",
	},
	{
		title: "Is your storage near me?",
		content:
			"We have multiple warehouses in the US. This allows us to locate a unit near your pick up or delivery address based on your request. ",
	},
];
