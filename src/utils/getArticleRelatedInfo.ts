interface HelperProps {
	relatedArticles?: any;
	relatedMR?: any;
	relatedCR?: any;
	relatedStates?: any;
	relatedCities?: any;
}

export default function getArticleRelatedInfo({
	relatedArticles,
	relatedCR,
	relatedMR,
	relatedCities,
	relatedStates,
}: HelperProps) {
	const relatedArticless = relatedArticles?.data.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: item.attributes.tag,
			slug: item.attributes.slug,
		};
	});
	const relatedMovingRoutess = relatedMR?.data.map((item: any) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: "Routes",
			slug:
				item.attributes.movingFrom.data.attributes.stateName
					.split(" ")
					.join("-")
					.toLowerCase() +
				"/" +
				item.attributes.movingFrom.data.attributes.stateName
					.split(" ")
					.join("-")
					.toLowerCase() +
				"-to-" +
				item.attributes.movingTo.data.attributes.stateName
					.split(" ")
					.join("-")
					.toLowerCase(),
			needSlugify: true,
		};
	});
	const relatedCityRoutess = relatedCR?.data.map((item: any) => {
		const stateSlug = item.attributes.states.data[0].attributes.stateName
			.split(" ")
			.join("-")
			.toLowerCase();
		const routeSlug =
			item.attributes.movingFrom.split(" ").join("-").toLowerCase() +
			"-to-" +
			item.attributes.movingTo.split(" ").join("-").toLowerCase();
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: "Routes",
			slug: `${stateSlug}/${routeSlug}`,
			needSlugify: true,
		};
	});

	const relatedStatess = relatedStates?.data.map((item: any) => {
		return {
			title: item.attributes.Hero.title,
			description: item.attributes.Hero.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.stateFlag,
			tag: "Routes",
			slug: item.attributes.slug,
			needSlugify: true,
		};
	});

	const relatedCitiess = relatedCities?.data.map((item: any) => {
		return {
			title: item.attributes.Hero.title,
			description: item.attributes.Hero.description,
			date: item.attributes.updatedAt,
			coverImage: item.attributes.image,
			tag: "Routes",
			slug:
				item.attributes.guide.data.attributes.slug
					.split(" ")
					.join("-")
					.toLowerCase() +
				"/" +
				item.attributes.cityName.split(" ").join("-").toLowerCase(),
			needSlugify: true,
		};
	});

	return relatedArticless
		?.concat(
			relatedCityRoutess,
			relatedMovingRoutess,
			relatedStatess,
			relatedCitiess,
		)
		.filter((el: any) => el !== undefined);
}
