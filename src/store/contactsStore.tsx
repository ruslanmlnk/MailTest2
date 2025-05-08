import dynamic from "next/dynamic";
import Image from "next/image";

import { IHero } from "@/components/about/hero";

import HeroMobile from "../../public/images/contacts/bg-mobile.webp";
import HeroDesktop from "../../public/images/contacts/bg.webp";

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

export const contactsHero: IHero = {
	background: [HeroBackgroundDesktop, HeroBackgroundMobile],
	title: "Contact us today",
	navTag: "Get in touch",
	description: (
		<p style={{ color: "#fff", textAlign: "center" }}>
			Contact us with any questions about relocating to your state or any other
			state <br /> in the United States. Our experts will answer all your
			questions
		</p>
	),
	url: "/contacts",
	pageTitle: "Get in touch",
};
