import React from "react";

import { getUSCities } from "@/store/mapStore";

import { Review } from "../types";

const usePostReview = () => {
	const [loading, setLoading] = React.useState(false);
	let from = "";
	let to = "";

	const postReview = React.useCallback(
		async (
			review: Review,
			onSuccess: () => void,
			onError: (error: string) => void,
		) => {
			setLoading(true);
			const formData = new FormData();
			formData.append("files", review.fileUrl);
			await getUSCities()
				.then((cities) => {
					from = cities.find(
						(city: any) => city.zip_code === parseInt(review.from),
					)?.city;
					to = cities.find((city: any) => city.zip_code === parseInt(review.to))
						?.city;
					if (!from || !to) {
						throw Error("City not found");
					}
				})
				.then(async () => {
					await fetch("https://admin.starvanlinesmovers.com/api/upload", {
						method: "POST",

						body: formData,
					})
						.then(async (resp) => {
							if (resp.ok) {
								let data = await resp.json();
								return data[0].id;
							} else {
								throw Error("Couldn't load the image");
							}
						})
						.then(async (imageId: number) => {
							await fetch(
								"https://admin.starvanlinesmovers.com/api/reviews-pages",
								{
									method: "POST",
									headers: {
										"Content-Type": "application/json",
									},
									body: JSON.stringify({
										data: {
											user_name: review.name,
											user_comment: review.commentBody,
											stars_rating: review.starsRating,
											user_avatar: review.fileUrl.type.startsWith("image")
												? imageId
												: 7823,
											route: `${from}-${to}`,
											video: review.fileUrl.type.startsWith("video")
												? {
														user_video: imageId,
												  }
												: null,
											publishedAt: null,
										},
									}),
								},
							).then((resp) => {
								if (!resp.ok) {
									throw Error("Oops...something went wrong");
								}
								onSuccess();
							});
						});
				})
				.catch((err: Error) => {
					onError(err.message);
				})
				.finally(() => {
					setLoading(false);
				});
		},
		[setLoading],
	);
	return { postReview, loading };
};

export default usePostReview;
