/* LOCAL MOVING SERVICE PAGE DATA */
import Benefit_1 from "@/../public/images/services/benefits/1_Benefit.webp";
import Benefit_2 from "@/../public/images/services/benefits/2_Benefit.webp";
import Benefit_3 from "@/../public/images/services/benefits/3_Benefit.webp";
import Benefit_4 from "@/../public/images/services/benefits/4_Benefit.webp";
import CargoTypes_1 from "@/../public/images/services/commercialRelocation/CargoTypes_1_Docs.webp";
import CargoTypes_2 from "@/../public/images/services/commercialRelocation/CargoTypes_2_Office.webp";
import CargoTypes_3 from "@/../public/images/services/commercialRelocation/CargoTypes_3_Interior_Items.webp";
import CargoTypes_4 from "@/../public/images/services/commercialRelocation/CargoTypes_4_Equipment.webp";
import CargoTypes_5 from "@/../public/images/services/commercialRelocation/CargoTypes_5_Personal_Belongings.webp";
import CargoTypes_6 from "@/../public/images/services/commercialRelocation/CargoTypes_6_Tableware.webp";
import ResponsiveHero from "@/../public/images/services/commercialRelocation/heroResponsive.jpg";
import OurProcess_1 from "@/../public/images/services/localMoving/OurProcess_1.webp";
import OurProcess_2 from "@/../public/images/services/localMoving/OurProcess_2.webp";
import OurProcess_3 from "@/../public/images/services/localMoving/OurProcess_3.webp";
import ClockIcon from "@/../public/images/services/longDistanceMoving/Clock-icon.png";
import GuaranteeIcon from "@/../public/images/services/longDistanceMoving/Guarantee-icon.png";
import { ISEOCost } from "@/components/guides/seoCost";
import { IOurValues } from "@/components/ourValues";
import { ICargoTypes } from "@/components/services/cargoTypes";
import { IOurProcess } from "@/components/services/ourProcess";
import { IServiceHero } from "@/components/services/serviceHero";
import { IWhyWeAre } from "@/components/services/whyWeAre";

import ServiceHeroImage from "../../../public/images/services/commercialRelocation/hero.jpg";
import TickIcon from "../../../public/images/tick-icon.svg";

export const CommercialRelocationHero: IServiceHero = {
	image: ServiceHeroImage,
	responsiveImage: ResponsiveHero,
	title: "<span> Secure <span> fixed-cost commercial moves. ",

	description:
		"Are you in need of office relocation services? Look no further. Our professional office movers are here to ensure a smooth transition for your business. From packing and moving office equipment to coordinating logistics, we handle it all with precision and professionalism. Trust us to minimize downtime and make your office relocation a seamless experience.",
	points: [
		{
			icon: ClockIcon,
			title: "Moving without loss of time",
			description:
				"Our company is not just a shipping and delivery service. We do turnkey office relocation: we take even the most complex order, pack everything ourselves and help with furniture.",
		},
		{
			icon: GuaranteeIcon,
			title: "Guarantee the safety of cargo",
			description:
				"For more than 10 years we have been working according to our company's standards, so we pack each shipment individually to keep it intact.",
		},
	],
};

export const CommercialRelocationCargoTypes: ICargoTypes = {
	title: "We transport everything you need:",
	types: [
		{
			icon: CargoTypes_1,
			title: "Accounting Documents",
			description:
				"Accurately box up all documents without disturbing the order",
		},
		{
			icon: CargoTypes_2,
			title: "Furniture",
			description: "Tables, chairs and other office furniture",
		},
		{
			icon: CargoTypes_3,
			title: "Interior items",
			description:
				"All plants and pictures carefully packed and delivered without risk of damage.",
		},
		{
			icon: CargoTypes_4,
			title: "Equipment",
			description:
				"Printers, MFPs, coffee machines and other equipment we will transport with maximum care.",
		},
		{
			icon: CargoTypes_5,
			title: "Personal items of employees",
			description:
				"If necessary, we will move all personal belongings of the employees from each workplace.",
		},
		{
			icon: CargoTypes_6,
			title: "Cookware",
			description:
				"Kitchen utensils will be packed in heavy-duty cases for fragile items",
		},
	],
};

export const CommercialRelocationOurProcess: IOurProcess = {
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

export const CommercialRelocationValues: IOurValues = {
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

export const CommercialRelocationWhyWeAre: IWhyWeAre = {
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

export const commercialRelocationTabsWithContent: ISEOCost = {
	id: 1,
	title: "Business Transition Solutions",
	tab: [
		{
			tabTitle: "Office Moves",
			tabContent:
				"Trust us with your office move for a seamless transition. Our commercial relocation services minimize downtime and ensure a smooth transfer of your business operations to a new location. We specialize in efficient planning and execution to make your office move hassle-free and successful.",
		},
		{
			tabTitle: "IT Handling",
			tabContent:
				"Rely on our expertise in handling complex IT infrastructure during commercial moves. We prioritize the safe and efficient relocation of your technology assets, minimizing the risk of disruption to your business operations. Our specialized approach ensures the secure handling of your IT infrastructure.",
		},
		{
			tabTitle: "Business Solutions",
			tabContent:
				"Explore tailored solutions for your industry. We understand the unique challenges of business relocations and provide customized services to address specific requirements. Our goal is to deliver business transition solutions that align with your industry's needs and goals.",
		},
	],
};
