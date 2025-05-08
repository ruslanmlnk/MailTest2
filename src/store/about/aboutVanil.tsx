import { StaticImageData } from 'next/image';
import About1 from '@/../public/images/blog/article-1-preview.webp';

export interface AboutVanils {
	image: StaticImageData;
	label: string;
	title: string;
	text1: string;
	text2: string;
	text3: string;
}
export const trustedPartner: AboutVanils = {
	image: About1,
	label: 'Who we are',
	title: 'Star Vanlines today',
	text1: 'At Star Van Lines Movers, we take pride in being your trusted local house movers. With years of experience and a team of dedicated professionals, we are committed to providing top-notch moving services that cater to your specific needs.   ',
	text2: "Whether you're moving within the same neighborhood or across the country, our reliable and efficient house movers are here to make your relocation a stress-free experience. We understand the complexities of out-of-state and nationwide moves, which is why we offer comprehensive services to ensure a smooth transition to your new home. As one of the leading long distance moving and storage companies, we provide secure storage solutions for your belongings during the moving process.   ",
	text3: 'Our team of professional long distance movers is experienced in handling all aspects of your move, including packing, loading, transportation, and unloading. We strive to make your move as affordable as possible, offering competitive rates and flexible packages that suit your budget. When you choose Star Van Lines Movers, you can trust that your move will be handled with utmost care and professionalism.',
};
