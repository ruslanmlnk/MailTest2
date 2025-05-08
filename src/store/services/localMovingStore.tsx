/* LOCAL MOVING SERVICE PAGE DATA */
import ServiceHeroImage from "@/../public/images/mainPage/services/service2.webp";
import Benefit_1 from "@/../public/images/services/benefits/1_Benefit.webp";
import Benefit_2 from "@/../public/images/services/benefits/2_Benefit.webp";
import Benefit_3 from "@/../public/images/services/benefits/3_Benefit.webp";
import Benefit_4 from "@/../public/images/services/benefits/4_Benefit.webp";
import CargoTypes_1 from "@/../public/images/services/localMoving/CargoTypes_1.webp";
import CargoTypes_2 from "@/../public/images/services/localMoving/CargoTypes_2.webp";
import CargoTypes_4 from "@/../public/images/services/localMoving/CargoTypes_4.webp";
import OurProcess_1 from "@/../public/images/services/localMoving/OurProcess_1.webp";
import OurProcess_2 from "@/../public/images/services/localMoving/OurProcess_2.webp";
import OurProcess_3 from "@/../public/images/services/localMoving/OurProcess_3.webp";
import ResponsiveHero from "@/../public/images/services/localMoving/heroResponsive.jpg";
import ClockIcon from "@/../public/images/services/longDistanceMoving/Clock-icon.png";
import GuaranteeIcon from "@/../public/images/services/longDistanceMoving/Guarantee-icon.png";
import { FAQCardProps, FAQProps } from "@/components/faq";
import { ISEOCost } from "@/components/guides/seoCost";
import { IOurValues } from "@/components/ourValues";
import { ICargoTypes } from "@/components/services/cargoTypes";
import { IOurProcess } from "@/components/services/ourProcess";
import { IServiceHero } from "@/components/services/serviceHero";
import { IWhyWeAre } from "@/components/services/whyWeAre";

import TickIcon from "../../../public/images/tick-icon.svg";

export const localMovingHero: IServiceHero = {
	image: ServiceHeroImage,
	responsiveImage: ResponsiveHero,
	title: "Local Movers ",

	description:
		"Get a cost estimate from our full-service movers today. Whether you're concerned about movers cost or movers price, we've got you covered. Contact us now for a comprehensive quote tailored to your needs.",
	points: [
		{
			icon: ClockIcon,
			title: "Moving without loss of time",
			description:
				"We will perform the entire cycle of work: we will assemble and pack the cargo, deliver, unpack and set up in a new room.",
		},
		{
			icon: GuaranteeIcon,
			title: "Guarantee the safety of cargo",
			description:
				"For more than 10 years we have been working according to our company's standards, so we pack each shipment individually to keep it intact.",
		},
	],
};

export const localMovingCargoTypes: ICargoTypes = {
	title: "Transportation of all types of cargo",
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

export const localMovingOurProcess: IOurProcess = {
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

export const localMovingValues: IOurValues = {
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

export const localMovingWhyWeAre: IWhyWeAre = {
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

export const localMovingTabsWithContent: ISEOCost = {
	id: 1,
	title: "Neighborhood Relocation Services",
	tab: [
		{
			tabTitle: "Local Transitions",
			tabContent:
				"Streamline your local move with our efficient services. Our local expertise allows for a swift and organized transition, ensuring your belongings reach your new destination without a hitch. We focus on efficiency and attention to detail to make your local move a hassle-free experience.",
		},
		{
			tabTitle: "Professional Crew",
			tabContent:
				"Our professional moving crew is dedicated to providing reliable and timely service. With a keen understanding of the unique dynamics of local moves, we tailor our approach to meet your specific requirements. Trust us for a seamless and stress-free local moving experience.",
		},
		{
			tabTitle: "Customized Solutions",
			tabContent:
				"Experience flexibility with our customized solutions. We adapt to the nuances of local moving, providing personalized services that align with your needs and schedule. Our goal is to offer tailored solutions that make your local move efficient and tailored to your unique requirements.",
		},
	],
};

export const longdistanceFAQCards: FAQCardProps[] = [
	{
		title: "How much to tip movers long distance?",
		content:
			"When tipping long distance movers, it's important to consider a few factors. While tipping is not mandatory, it is a common practice to show appreciation for their hard work and professionalism. The number of moving tips can change based on service quality, move complexity, and your satisfaction. A general guideline is to tip around 5-10% of the total moving cost. If your move is difficult with heavy furniture, many stairs, or other challenges, you might want to tip more. If the moving services were not efficient or had issues, you can adjust the tip accordingly.",
	},
	{
		title:
			"How long does it take to move my household goods across United States?",
		content:
			"One of the main factors is the distance between your current location and your new destination. If you are moving from coast to coast, it generally takes longer compared to a shorter distance move within the same state. Another factor that affects the duration is the mode of transportation you choose. If you hire a professional moving company, they will provide you with an estimated time. We will estimate the time based on two factors: how far you are moving and the type of service you choose. Expedited delivery, the exact day delivery, fast shipping may increase the price of shipping cost.",
	},
	{
		title: "Can you provide expedited delivery of my household goods? ",
		content:
			"Absolutely! We know it's important to get your stuff quickly, so we're happy to offer fast delivery services. Moreover, we are able to provide exact day delivery. We can deliver your things fast, whether you have a set time or need them urgently because of unexpected situations. Our team will quickly deliver your goods to your door, using different shipping methods , keeping them safe and maintaining their quality.",
	},
	{
		title:
			"Is it better to hire movers near me or big interstate company for long distance move? ",
		content:
			"Hiring local movers near you can offer several benefits. They know the area well, which helps with driving and finding the best routes. Local movers offer better customer service and pay more attention to detail compared to others. They may also be more flexible with scheduling, accommodating any last-minute changes or specific requirements you may have. On the other hand, interstate moving companies of considerable size have their own advantages as well. One of the key benefits is their extensive experience in handling long distance moves. They have the necessary resources, equipment, and expertise to efficiently transport your belongings across state lines.",
	},
];

export const LOCAL_MOVING_FAQ: FAQCardProps[] = [
	{
		title: "Can I hire movers just to load a truck?",
		content:
			"Yes, you can. They can load your or rental truck. And it will help you to save money.",
	},
	{
		title: "How much are movers per hour near me?",
		content:
			"The price ranges between $89 to $139 per hour for 2 movers and a truck. It depends on a season, day of a week and some other reasons.",
	},
	{
		title: "Will movers go to a storage unit?",
		content:
			"Yes, sure! We can help you loading from a storage or unloading to the storage.",
	},
	{
		title: "How to hire movers?",
		content:
			"You can fill a form at website or contact our office (855) 822-2722",
	},
];
