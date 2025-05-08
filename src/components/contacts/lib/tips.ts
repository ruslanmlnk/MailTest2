import EmailIcon from "@/../public/images/mainPage/emailOrange-icon.png";
import PhoneIcon from "@/../public/images/mainPage/phoneOrange-icon.png";

import { TipContactProps } from "../contact-request-form/TipContact";

export const tips: TipContactProps[] = [
	{
		title: "Send us an email",
		description: `Email us with questions or suggestions and we'll answerthem!`,
		contact: "info@starvanlinesmovers.com",
		href: "mailto:info@starvanlinesmovers.com",
		image: { src: EmailIcon, alt: "email-icon" },
	},
	{
		title: "Give us a call",
		description: "Call us for details about transportation, storage and costs",
		contact: "(855) 822-2722",
		href: "tel:8558222722",
		image: { src: PhoneIcon, alt: "phone-icon" },
	},
];
