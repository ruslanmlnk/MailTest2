import Image from "next/image";

import HeroMobile from "@/../public/images/contacts/bg-mobile.webp";
import HeroDesktop from "@/../public/images/contacts/bg.webp";
import { IHero } from "@/components/about/hero";
import { IServicePage } from "@/pages/[slug]";

import {
	CommercialRelocationCargoTypes,
	CommercialRelocationHero,
	CommercialRelocationOurProcess,
	CommercialRelocationValues,
	CommercialRelocationWhyWeAre,
	commercialRelocationTabsWithContent,
} from "./commercialRelocationStore";
import {
	LOCAL_MOVING_FAQ,
	localMovingCargoTypes,
	localMovingHero,
	localMovingOurProcess,
	localMovingTabsWithContent,
	localMovingValues,
	localMovingWhyWeAre,
} from "./localMovingStore";
import {
	longDistanceMovingCargoTypes,
	longDistanceMovingHero,
	longDistanceMovingOurProcess,
	longDistanceMovingTabsWithContent,
	longDistanceMovingValues,
	longDistanceMovingWhyWeAre,
	longdistanceFAQCards,
} from "./longDistanceMovingStore";
import {
	packagingCargoTypes,
	packagingHero,
	packagingMaterials,
	packagingOurProcess,
	packagingTabsWithContent,
	packagingValues,
	packagingWhyWeAre,
} from "./packagingStore";
import {
	specialMoveCargoTypes,
	specialMoveHero,
	specialMoveOurProcess,
	specialMoveSeoType,
	specialMoveTabsWithContent,
	specialMoveValues,
	specialMoveWhyWeAre,
} from "./specialMoveStore";
import {
	StorageCargoTypes,
	StorageHero,
	StorageOurProcess,
	StorageValues,
	StorageWhyWeAre,
	storageFAQCards,
	storageTabsWithContent,
} from "./storageStore";

const HeroBackgroundDesktop = ({ className }: { className?: string }) => {
	return (
		<Image
			quality={100}
			src={HeroDesktop}
			alt="Star Van Lines Movers"
			className={className}
			priority={true}
			loading="eager"
		/>
	);
};

const HeroBackgroundMobile = ({ className }: { className?: string }) => {
	return (
		<Image
			quality={100}
			src={HeroMobile}
			alt="Star Van Lines Movers"
			className={className}
			priority={true}
			loading="eager"
		/>
	);
};

export const servicesHero: IHero = {
	background: [HeroBackgroundDesktop, HeroBackgroundMobile],
	title: "Our services",
	navTag: "Services",
	description: (
		<p>
			We provide a full range of services for relocating to your state or <br />{" "}
			any other state in the United States.
		</p>
	),
};

export const services: IServicePage[] = [
	{
		slug: "long-distance-moving",
		metaTitle:
			"Reliable Cross Country Movers Near Me | Professional Long-Distance Moving",
		metaDescription:
			"Experience a seamless and stress-free long distance move with our trusted team of movers.",
		hero: longDistanceMovingHero,
		cargoTypes: longDistanceMovingCargoTypes,
		ourProcess: longDistanceMovingOurProcess,
		ourValues: longDistanceMovingValues,
		whyWeAre: longDistanceMovingWhyWeAre,
		tabsWithContent: longDistanceMovingTabsWithContent,
		faq: longdistanceFAQCards,
		bName: "Long distance moves",
	},
	{
		slug: "local-moving",
		metaTitle: "Trusted Local Movers: Professional Assistance for Your Move",
		metaDescription:
			"Our trusted local movers will provide professional expertise to ensure a seamless moving process for your relocation needs.",
		hero: localMovingHero,
		cargoTypes: localMovingCargoTypes,
		ourProcess: localMovingOurProcess,
		ourValues: localMovingValues,
		whyWeAre: localMovingWhyWeAre,
		tabsWithContent: localMovingTabsWithContent,
		faq: LOCAL_MOVING_FAQ,
		bName: "Local moves",
	},
	{
		slug: "commercial-relocation",
		metaTitle:
			"Reliable Corporate Office Movers | Professional Business Relocation",
		metaDescription:
			"Trust our reliable corporate office movers for your business relocation needs. We provide professional services tailored to ensure a seamless transition for your corporate office. Contact us for efficient and stress-free business relocation solutions.",
		hero: CommercialRelocationHero,
		cargoTypes: CommercialRelocationCargoTypes,
		ourProcess: CommercialRelocationOurProcess,
		ourValues: CommercialRelocationValues,
		whyWeAre: CommercialRelocationWhyWeAre,
		tabsWithContent: commercialRelocationTabsWithContent,
		bName: "Commercial relocation",
	},
	{
		slug: "special-move",
		metaTitle: "Heavy & Bulky Item Moving Specialists - Star Van Lines",
		metaDescription:
			"Struggling with couches, pianos, or appliances? Star Van Lines expertly moves your heaviest items locally or long-distance. Get a free quote today!",
		hero: specialMoveHero,
		cargoTypes: specialMoveCargoTypes,
		// cargoType: specialMoveSeoType,
		ourProcess: specialMoveOurProcess,
		ourValues: specialMoveValues,
		whyWeAre: specialMoveWhyWeAre,
		tabsWithContent: specialMoveTabsWithContent,
		bName: "Special move",
	},
	{
		slug: "storage",
		metaTitle: "Professional Moving and Storage Services | Efficient Solutions",
		metaDescription:
			"Need efficient moving and storage solutions? Look no further. Discover professional services that offer seamless moving and secure storage options. From residential to commercial moves, these trusted moving and storage companies have got you covered.",
		hero: StorageHero,
		cargoTypes: StorageCargoTypes,
		ourProcess: StorageOurProcess,
		ourValues: StorageValues,
		whyWeAre: StorageWhyWeAre,
		tabsWithContent: storageTabsWithContent,
		faq: storageFAQCards,
		bName: "Storage",
	},
	{
		slug: "packing-and-unpacking",
		metaTitle: "Professional Packing Movers | Star Van Lines Movers",
		metaDescription:
			"Looking for reliable packing movers? Star Van Lines Movers offers top-notch pack and move services. Discover one of the best packing and moving companies near you. Contact us now!",
		hero: packagingHero,
		cargoTypes: packagingCargoTypes,
		ourProcess: packagingOurProcess,
		ourValues: packagingValues,
		whyWeAre: packagingWhyWeAre,
		packagingMaterials: packagingMaterials,
		tabsWithContent: packagingTabsWithContent,
		bName: "Packing and unpacking",
	},
];
