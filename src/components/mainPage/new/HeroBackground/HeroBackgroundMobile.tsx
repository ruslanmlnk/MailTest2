import Image from "next/image";

import BackgroundMobile from "@/../public/images/mainPage/hero_bg-mobile.webp";

const HeroBackgroundMobile = ({ className }: { className?: string }) => {
	return (
		<Image
			quality={100}
			src={BackgroundMobile}
			alt="Star Van Lines Movers"
			className={className}
			loading="eager"
		/>
	);
};

export default HeroBackgroundMobile;
