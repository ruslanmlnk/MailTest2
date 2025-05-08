import { FAQCardProps } from "@/components/faq";

export default function transformFAQtoJSON(faqs: FAQCardProps[]) {
	return faqs.map((el) => ({
		"@type": "Question",
		name: el.title,
		acceptedAnswer: {
			"@type": "Answer",
			text: el.content,
		},
	}));
}
