import { StaticImageData } from 'next/image';
import About1 from '@/../public/images/guides/map/Trusted-1-Partner.webp';
import About2 from '@/../public/images/guides/map/Trusted-2-Partner.webp';
import About3 from '@/../public/images/guides/map/Trusted-3-Partner.webp';

export interface ITrustedPartnerPoint {
	subtitle: string;
	image: StaticImageData;
	title: string;
	text: string;
}

export interface ITrustedPartner {
	title: string;
	description: string;
	points: ITrustedPartnerPoint[];
}

export const trustedPartner: ITrustedPartner = {
	title: 'Star Van Lines Movers: Your <span>Trusted Partner</span> for a Seamless Relocation Experience',
	description:
		'When it comes to moving, you deserve the best. At Star Van Lines Movers, we understand the importance of finding reliable moving companies near you that prioritize customer satisfaction. With our top-rated nationwide movers, you can rest assured that your move will be handled with professionalism, care, and efficiency.',
	points: [
		{
			subtitle: 'Exceptional Services',
			image: About1,
			title: 'Exceptional Services for Stress-Free Relocation',
			text: "At Star Van Lines Movers, we pride ourselves on being one of the best moving companies nationwide. Our team of experienced professionals is dedicated to providing you with a seamless and stress-free moving experience. Whether you're moving across town or across the country, our full-service moving options cater to your unique needs.",
		},
		{
			subtitle: 'Professionalism and Reliability',
			image: About2,
			title: 'Professionalism and Reliability at Your Doorstep',
			text: 'As one of the most reputable moving companies in the industry, Star Van Lines Movers goes above and beyond to exceed your expectations. We understand that every move is different, which is why we offer tailored solutions to meet your specific requirements. Our team of trained and skilled movers ensures the safe handling and transportation of your belongings, giving you peace of mind throughout the entire process.',
		},
		{
			subtitle: 'Trustworthy Nationwide Movers',
			image: About3,
			title: 'Trustworthy Nationwide Movers with a Commitment to Quality',
			text: 'Choosing the right moving company is crucial for a successful relocation. With Star Van Lines Movers, you can trust that your move is in capable hands. Our dedication to quality service has earned us a reputation as one of the best moving companies near you and nationwide. From packing and loading to transportation and unpacking, we handle every aspect of your move with utmost care and professionalism.		',
		},
	],
};
