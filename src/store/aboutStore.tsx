import Image from "next/image";

import { IHero } from "@/components/about/hero";

import HeroMobile from "../../public/images/about/bg-mobile.webp";
import HeroDesktop from "../../public/images/about/bg.webp";

const HeroBackgroundDesktop = ({ className }: { className?: string }) => {
	return (
		<Image
			quality={100}
			src={HeroDesktop}
			alt="Star Van Lines Movers"
			className={className}
			priority
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
			priority
			loading="eager"
		/>
	);
};

export const aboutHero: IHero = {
	background: [HeroBackgroundDesktop, HeroBackgroundMobile],
	title: "About our company",
	navTag: "About us",
	description: "",
	url: "/about",
	pageTitle: "About us",
};
