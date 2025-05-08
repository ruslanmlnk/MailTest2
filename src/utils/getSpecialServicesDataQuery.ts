const qs = require("qs");
export default function getSpecialServicesDataQuery() {
	return qs.stringify({
		populate: {
			fields: ["slug"],
			preview: {
				populate: {
					fields: ["previewTitle"],
					previewImage: {
						fields: ["url", "alternativeText"],
					},
				},
			},
		},
		pagination: {
			page: 1,
			pageSize: 500,
		},
		sort: ["updatedAt:asc"],
	});
}

export const getSpecialServicePageData = (slug: string) => {
	return qs.stringify({
		populate: {
			fields: ["slug", "content"],
			hero: {
				populate: {
					fields: ["title"],
					image: {
						fields: ["url", "alternativeText"],
					},
				},
			},
			meta: {
				populate: {
					fields: ["title", "description"],
				},
			},
		},
		pagination: {
			page: 1,
			pageSize: 500,
		},
		filters: {
			slug: {
				$eqi: slug,
			},
		},
		sort: ["updatedAt:desc"],
	});
};
