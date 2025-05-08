/* LOCAL MOVING SERVICE PAGE DATA */
import { StaticImageData } from "next/image";

import CargoTypes_1 from "@/../public/images/services/localMoving/CargoTypes_1.webp";
import CargoTypes_2 from "@/../public/images/services/localMoving/CargoTypes_2.webp";
import CargoTypes_3 from "@/../public/images/services/localMoving/CargoTypes_3.webp";
import CargoTypes_4 from "@/../public/images/services/localMoving/CargoTypes_4.webp";
import CargoTypes_5 from "@/../public/images/services/localMoving/CargoTypes_5.webp";
import CargoTypes_6 from "@/../public/images/services/localMoving/CargoTypes_6.webp";
import OurProcess_1 from "@/../public/images/services/localMoving/OurProcess_1.webp";
import OurProcess_2 from "@/../public/images/services/localMoving/OurProcess_2.webp";
import OurProcess_3 from "@/../public/images/services/localMoving/OurProcess_3.webp";
import GuaranteeIcon from "@/../public/images/services/longDistanceMoving/Guarantee-icon.png";
import MaterialsIcon from "@/../public/images/services/packaging/Materials-icon.png";
import SafetyIcon from "@/../public/images/services/packaging/Safety-icon.png";
import ServiceHeroImage from "@/../public/images/services/packaging/hero.jpg";
import ResponsiveHero from "@/../public/images/services/packaging/heroResponsive.jpg";
import PackagingMaterals_1 from "@/../public/images/services/packaging/packagingMaterials_1.webp";
import PackagingMaterals_2 from "@/../public/images/services/packaging/packagingMaterials_2.webp";
import PackagingMaterals_3 from "@/../public/images/services/packaging/packagingMaterials_3.webp";
import PackagingMaterals_4 from "@/../public/images/services/packaging/packagingMaterials_4.webp";
import PackagingMaterals_5 from "@/../public/images/services/packaging/packagingMaterials_5.webp";
import PackagingMaterals_6 from "@/../public/images/services/packaging/packagingMaterials_6.webp";
import PackagingMaterals_7 from "@/../public/images/services/packaging/packagingMaterials_7.webp";
import PackagingMaterals_8 from "@/../public/images/services/packaging/packagingMaterials_8.webp";
import PackagingMaterals_9 from "@/../public/images/services/packaging/packagingMaterials_9.webp";
import { ISEOCost } from "@/components/guides/seoCost";
import { IOurValues } from "@/components/ourValues";
import { ICargoTypes } from "@/components/services/cargoTypes";
import { IOurProcess } from "@/components/services/ourProcess";
import { IServiceHero } from "@/components/services/serviceHero";
import { IWhyWeAre } from "@/components/services/whyWeAre";

import CarIcon from "../../../public/images/services/car-image.webp";
import TickIcon from "../../../public/images/tick-icon.svg";

export interface IMaterials {
	label: string;
	title: string;
	points: {
		icon: StaticImageData;
		title: string;
		description: string;
	}[];
}

export const packagingHero: IServiceHero = {
	image: ServiceHeroImage,
	responsiveImage: ResponsiveHero,
	title: "Professional reliable <span> packaging <span>",

	description:
		"Looking for professional packers and movers near you? Look no further. Our pack and move services provide convenient solutions for your relocation needs. Whether you require movers to pack for you, pack and unpack services, or simply need assistance with packing, our experienced team is here to make your move a breeze. Trust us to handle every aspect of your packing and moving process with efficiency and care.",
	points: [
		{
			icon: GuaranteeIcon,
			title:
				"The safety of the move and the safety of your belongings - in the first place for us.",
		},
		{
			icon: SafetyIcon,
			title:
				"100% guarantee of safety of things - it's properly chosen and executed packaging!",
		},
		{
			icon: MaterialsIcon,
			title:
				"Our movers bring 15 types of packing materials and use the most appropriate packaging for each item",
		},
	],
};

export const packagingMaterials: IMaterials = {
	label: "The best insurance is the right packaging",
	title: "What materials do we use for packaging?",
	points: [
		{
			icon: PackagingMaterals_1,
			title: "Shrink wrap",
			description:
				"Normal transparent film, which is used to protect things from liquid, dust, dirt, mechanical damage. It is very flexible, so it can be used to protect items of any shape. We use this film for both large and small items (e.g. bottles, tubes, etc.).",
		},
		{
			icon: PackagingMaterals_2,
			title: "Air bubble wrap",
			description:
				"This is everyone's favorite bubble wrap. It protects your most fragile and precious things - crystal vases, grandma's service, plasma panel inside the box, mirrors and glass objects - chandeliers, shelves, figurines. Its flexibility allows you to securely pack appliances, tableware and decorative items.",
		},
		{
			icon: PackagingMaterals_3,
			title: "Standard boxes",
			description:
				"These are classic 1.3×2×1.3 feet cardboard boxes. Such a box takes 3.5 cubic feet. The bottom is glued with tape, and the boxes themselves are marked with a personal barcode, if you give things to us for storage. It is guaranteed to avoid confusion and loss of things.",
		},
		{
			icon: PackagingMaterals_4,
			title: "Book boxes",
			description:
				"These are especially thick cardboard boxes - they are specially designed to carry heavy stacks of books. Movers know exactly how many books fit in these boxes, so they don't get damaged in the process of moving or storing them in the warehouse.",
		},
		{
			icon: PackagingMaterals_5,
			title: "Wardrobe",
			description:
				"We use special closet boxes to ship delicate clothes, ensuring they remain unwrinkled and undamaged. These boxes serve as both a transportation solution and a temporary closet for moving or storage purposes..",
		},
		{
			icon: PackagingMaterals_6,
			title: "Foam & cardboard corners",
			description:
				"Our special closet boxes protect delicate clothes during shipping, serving as a dual-purpose solution for transportation and temporary storage.",
		},
		{
			icon: PackagingMaterals_7,
			title: "Mattress pads",
			description:
				"In order to prevent your mattress from unnecessary dust, dirt or accidental rain during storage or moving, our movers use special packing for the careful transportation of mattresses - mattress pads.",
		},
		{
			icon: PackagingMaterals_8,
			title: "Blankets",
			description:
				"Furniture is the largest and almost always the heaviest items when moving. To protect it from falling and accidental scratches, we use blankets inside the back of the truck. They help to place the furniture in the back of the truck without damage, as well as keep the furniture safe during the moving process.",
		},
		{
			icon: PackagingMaterals_9,
			title: "Tape",
			description:
				'Here it\'s simple: we tape the boxes together and secure the bubble wrap. The bottom of each box is additionally double-stitched. And in addition to the usual tape, we use brightly colored tape with the word "Fragile" on it, so that important and fragile things movers load with special care.',
		},
	],
};

export const packagingCargoTypes: ICargoTypes = {
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
			icon: CargoTypes_3,
			title: "Food products",
			description:
				"Save time and money on complex transportation of unit, liquid, loose and special temperature mode cargo",
		},
		{
			icon: CargoTypes_4,
			title: "Equipment",
			description:
				"We move pianos, pool tables, gym items, kitchen equipment, and other types of technical equipment",
		},
		{
			icon: CargoTypes_5,
			title: "Oversized cargo",
			description:
				"Steel beams, pipes, tanks, railroad rails, transformers, generators, forklifts and large machines",
		},
		{
			icon: CargoTypes_6,
			title: "Dimensional cargo",
			description:
				"Cars, yachts, boats, agricultural machinery, construction equipment, beams, metal structures, amusement rides and relocatable buildings",
		},
	],
};

export const packagingOurProcess: IOurProcess = {
	title: "A simple but <span> powerful <span> and efficient process",
	description:
		"We offer comprehensive local moving services for all types of cargo for your convenience",
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

export const packagingValues: IOurValues = {
	title: "Why StarVanlines?",
	values: [
		{
			icon: CarIcon,
			title: "Relocation in one click",
			description:
				"Leave an application. StarVanlines will do the rest. We'll come, pack and move. You do not need to prepare anything.",
		},
		{
			icon: CarIcon,
			title: "With care for your belongings",
			description:
				"We use 15 types of packing materials to guarantee the safety of your belongings.",
		},
		{
			icon: CarIcon,
			title: "Moving with a smile",
			description:
				"Our movers are nice guys. They'll pack the china, take apart the couch, do the final estimate, and lose nothing.",
		},
		{
			icon: CarIcon,
			title: "Don't worry about storage",
			description:
				"If moving out doesn't coincide with the day you move into your new place, we can leave your belongings in storage.",
		},
	],
};

export const packagingWhyWeAre: IWhyWeAre = {
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

export const packagingTabsWithContent: ISEOCost = {
	id: 1,
	title: "Efficient Packing Services",
	tab: [
		{
			tabTitle: "Professional Crew",
			tabContent:
				"Our professional packing crew ensures meticulous attention to detail. Experience a stress-free move with our efficient packing services designed to safeguard your belongings during transit. With a focus on professionalism and care, we handle the packing process with precision to ensure the safe arrival of your items at your new destination., we prioritize precision to safeguard your treasured art pieces during the entire moving process.",
		},
		{
			tabTitle: "Quality Materials",
			tabContent:
				"Trust us for quality packing materials that ensure the secure transportation of your items. We use industry-standard materials to protect your belongings throughout the moving process. Our commitment to quality packing materials is a testament to our dedication to the safety of your possessions.",
		},
		{
			tabTitle: "Unpacking Services",
			tabContent:
				"Unpack with ease using our efficient unpacking services. Our team will unpack and organize your items in your new space, allowing you to settle in quickly and seamlessly. With a focus on efficiency and organization, our unpacking services make the transition to your new home or office a smooth and hassle-free experience.",
		},
	],
};
