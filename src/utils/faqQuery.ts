const qs = require("qs");
export default function getFAQQuery() {
	return qs.stringify({
		populate: {
			faq: {
				populate: {
					faqElement: {
						fields: ["question", "answer"],
					},
				},
			},
		},
	});
}
