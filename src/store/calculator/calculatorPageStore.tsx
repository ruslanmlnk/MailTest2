import { StaticImageData } from 'next/image';
import About1 from '@/../public/images/calculator/Trusted-1-Partner.svg';
import About2 from '@/../public/images/calculator/Trusted-2-Partner.svg';
import About3 from '@/../public/images/calculator/Trusted-3-Partner.svg';
import About4 from '@/../public/images/calculator/Trusted-4-Partner.svg';

export interface ITrustedPartner {
	title: string;
	description: string;
	points: ITrustedPartnerPoint[];
}

interface ITrustedPartnerPoint {
	subtitle: string;
	image: StaticImageData;
	title: string;
	text: string;
}

export interface IQuotePopup {
	text: string;
}

export interface ICalcPopup {
	text: string;
}

export const quotepopup: IQuotePopup = {
	text: 'Calculate moving costs in 1 minute',
};

export const calcpopup: ICalcPopup = {
	text: 'Calculate moving costs in 2 minutes',
};

export const trustedPartner: ITrustedPartner = {
	title: 'Star Van Lines Movers: Your Trusted Partner for Affordable and Reliable Moving Services',
	description:
		'Are you in search of reliable movers and packers near you at an affordable cost? Look no further than Star Van Lines Movers. We understand that estimating the cost of hiring movers can be a crucial factor in planning your move. As one of the leading moving companies, we offer competitive rates and transparent pricing to ensure a hassle-free experience.',
	points: [
		{
			subtitle: 'Transparent Pricing',
			image: About1,
			title: 'Transparent Pricing and Accurate Estimates',
			text: "At Star Van Lines Movers, we believe in providing our customers with accurate cost estimates for their moving needs. Whether you're considering full-service movers or just need assistance with packing, our team will provide you with a detailed breakdown of the costs involved. We understand that every move is unique, and our estimates are tailored to your specific requirements, ensuring transparency and no hidden surprises.",
		},
		{
			subtitle: 'Full Service Movers',
			image: About2,
			title: 'Full Service Movers: Quality Service at a Fair Price',
			text: 'When it comes to the cost of hiring professional movers, our full-service option offers exceptional value for your money. Our experienced team will not only handle the packing, loading, transportation, and unloading of your belongings but also provide unpacking services if needed. With Star Van Lines Movers, you can rest assured that your move will be executed efficiently and at a fair cost.',
		},
		{
			subtitle: 'Affordable Options',
			image: About3,
			title: 'Affordable Options for Movers and Packers',
			text: 'If you prefer to handle the packing yourself, we offer cost-effective options for hiring movers to pack for you. Our skilled packers will ensure that your belongings are securely packed and ready for transport, giving you peace of mind during your move. You can trust our team to handle your items with care, regardless of the size or complexity of the job.',
		},
		{
			subtitle: 'Accurate Pricing',
			image: About4,
			title: 'Accurate Pricing, Exceptional Service',
			text: 'At Star Van Lines Movers, we take pride in our professionalism and commitment to customer satisfaction. Our affordable prices, whether you need residential or commercial movers, reflect our dedication to providing top-quality service without breaking the bank. With our transparent estimates and fair pricing, you can confidently hire us as your trusted moving company.',
		},
	],
};
