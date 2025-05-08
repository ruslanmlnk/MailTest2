import Image from "next/image";

import Background from "@/../public/images/mainPage/hero_bg_1.webp";

const HeroBackgroundDesktop = ({ className }: { className?: string }) => {
	return (
		<Image
			quality={100}
			src={Background}
			alt="Star Van Lines Movers"
			className={className}
			loading="eager"
		/>
	);
};

export default HeroBackgroundDesktop;
