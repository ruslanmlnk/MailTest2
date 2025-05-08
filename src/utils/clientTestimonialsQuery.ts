const qs = require("qs");
export default function getClientTestimonialsQuery() {
	return qs.stringify({
		populate: {
			ClientTestimonials: {
				populate: {
					ClientTestimonials: {
						populate: {
							ClientTestimonialsItem: {
								fields: ["widget", "widgetMobile"],
							},
						},
					},
				},
			},
		},
	});
}
