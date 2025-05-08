import { link } from "fs";
import { icon } from "leaflet";
import { StaticImageData } from "next/image";

import InstagramIcon from "@/../public/images/blog/article/instagram-icon.svg";
import TelegramIcon from "@/../public/images/blog/article/telegram-icon.svg";
import ViberIcon from "@/../public/images/blog/article/viber-icon.svg";
import WhatsappIcon from "@/../public/images/blog/article/whatsapp-icon.svg";
import LinkedInIcon from "@/../public/images/blog/linkedin-icon.png";
import User1 from "@/../public/images/store/users/user1.jpg";
import User2 from "@/../public/images/store/users/user2.jpg";
import User3 from "@/../public/images/store/users/user3.jpg";
import User4 from "@/../public/images/store/users/user4.webp";

export interface IUsers {
	uid: number;
	avatar: StaticImageData | string;
	name: string;
	role: string;
	description: string;
	socials?: any[];
}

export const users: IUsers[] = [
	{
		uid: 1,
		avatar: User4,
		name: "Artur Shakhnazarov",
		role: "PR Manager",
		description: "Love Doing PR for my Company",
		socials: [
			{
				icon: LinkedInIcon,
				socialNetwork: "linkedin",
				link: "https://www.linkedin.com/in/artur-shakhnazarov-22a157271",
			},
		],
	},
	{
		uid: 2,
		avatar: User1,
		name: "Daria Golovaneva",
		role: "Customer Support",
		description:
			"My job is to inform you about the status of your move. I will also be happy to answer any of your questions: the time of arrival of the team, payment methods, questions about the storage of your belongings, delivery time, and others. Feel free to contact me and I will help you with any question! ",
		socials: [
			// { icon: TelegramIcon, link: "https://t.me/Chatgpturbobot" },
			// { icon: WhatsappIcon, link: "https://wa.me/+447440352635" },
			// { icon: InstagramIcon, link: "https://www.instagram.com/lkshntl/" },
			// { icon: ViberIcon, link: "viber://chat?number=%2B79649746430" },
		],
	},

	{
		uid: 3,
		avatar: User2,
		name: "Dmitry Bochonok",
		role: "driver",
		description:
			"Eget lorem dolor sed viverra ipsum nunc aliquet dolor bibendum felis donec et odio pellentesque diam sit volutpat commodo sed egestas aliquam.",
		socials: [
			{ icon: TelegramIcon, link: "https://t.me/Chatgpturbobot" },
			{ icon: InstagramIcon, link: "https://www.instagram.com/lkshntl/" },
		],
	},
	{
		uid: 4,
		avatar: User3,
		name: "Leonid Agutin",
		role: "manager",
		description:
			"Eget lorem dolor sed viverra ipsum nunc aliquet dolor bibendum felis donec et odio pellentesque diam sit volutpat commodo sed egestas aliquam.",
		socials: [
			{ icon: TelegramIcon, link: "https://t.me/Chatgpturbobot" },
			{ icon: WhatsappIcon, link: "https://wa.me/+447440352635" },
		],
	},
];
