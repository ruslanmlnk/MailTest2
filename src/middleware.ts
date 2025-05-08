import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

import { getIsNeedRedirectToCalifornia } from "./store/guides/california-redirected-links/getIsNeedRedirectToCalifornia";

export async function middleware(request: NextRequest) {
	const url = request.nextUrl.clone();
	if (url.pathname.includes("/guides")) {
		return NextResponse.redirect(
			url.origin + url.pathname.replace("/guides", "/locations"),
			{
				status: 301,
			},
		);
	}

	if (url.pathname.includes("%20")) {
		return NextResponse.redirect(url.origin);
	}

	if (
		url.pathname ===
		"/blog/articles/all-professional-moving-service-what-you-need-to-know"
	) {
		return NextResponse.redirect(
			url.origin + "/blog/all-professional-moving-service-by-expert-movers",
		);
	}

	if (
		(url.pathname.includes(",") ||
			url.pathname.includes(":") ||
			url.pathname.includes("'")) &&
		url.pathname.includes("/blog")
	) {
		const newPathname = slugify(url.pathname, {
			lower: true,
			remove: /[*+'~.()"!:@]/g,
		});

		return NextResponse.redirect(url.origin + newPathname);
	}

	if (url.pathname.includes("[slug]")) {
		return NextResponse.redirect(
			url.origin + url.pathname.replace("[slug]", ""),
		);
	}

	if (url.pathname === "/about-us") {
		return NextResponse.redirect(url.origin + "/about");
	}

	if (url.pathname === "/packaging") {
		return NextResponse.redirect(url.origin + "/packing-and-unpacking");
	}

	if (url.pathname.includes("routes")) {
		const parts = url.pathname.split("/");
		const state = parts[3];
		const destination = parts[4];

		const newPathname = `/locations/${state}/${state}-to-${destination}`;
		if (newPathname.includes("-to-undefined")) {
			return NextResponse.redirect(url.origin + "/locations/" + state, {
				status: 301,
			});
		}

		return NextResponse.redirect(url.origin + newPathname, { status: 301 });
	}

	if (url.pathname.includes("/articles") && /\d/.test(url.pathname)) {
		return NextResponse.redirect(url.origin + "/blog");
	}

	if (url.pathname.includes("/location/[state]/[slug]")) {
		return NextResponse.redirect(url.origin + "/location");
	}

	if (url.pathname.includes("/blog/page/[page-number]")) {
		return NextResponse.redirect(url.origin + "/blog");
	}

	if (url.pathname.includes("/location/routes/[state]")) {
		return NextResponse.redirect(url.origin + "/location/[slug]");
	}

	// if (url.pathname.includes("-to-undefined")) {
	// 	return NextResponse.redirect(
	// 		url.origin + "/locations/" + url.href.split("/")[4],
	// 	);
	// }

	const isNeedRedirectToCalifornia = getIsNeedRedirectToCalifornia(
		url.pathname,
	);
	if (isNeedRedirectToCalifornia) {
		return NextResponse.redirect(url.origin + "/locations/california");
	}

	if (
		// url.pathname.includes("/locations/california/concord") ||
		url.pathname.includes("/locations/california/fontana")
		// url.pathname.includes('/california-movers') ||
		// url.pathname.includes('/locations/california/rosemead-to-los-angeles-move')
	) {
		return NextResponse.redirect(url.origin + "/locations/california");
	}

	if (url.pathname.includes("/california-movers"))
		return NextResponse.redirect(url.origin + "/locations/california");

	if (url.pathname.includes("/locations/north-carolina/high-point"))
		return NextResponse.redirect(
			url.origin + "/locations/north-carolina/greensboro",
		);

	if (
		url.pathname.includes(
			"/blog/how-to-handle-specialty-items-pianos-antiques-and-more",
		)
	)
		return NextResponse.redirect(url.origin + "/blog");

	if (url.pathname.includes("/locations/california/stanton-to-cerritos-move"))
		return NextResponse.redirect(url.origin + "/locations/california");

	if (url.pathname.includes("/locations/south-carolina/29223"))
		return NextResponse.redirect(url.origin + "/locations/south-carolina");
	if (url.pathname.includes("/locations/Ohio/Ohio-to-New-York")) {
		return NextResponse.redirect(
			url.origin + "/locations/ohio/ohio-to-new-york",
		);
	}

	// if(url.pathname.includes('/locations/colorado/golden')) return NextResponse.redirect(url.origin + '/locations/colorado');
	// if(url.pathname.includes('/locations/nevada/rochester')) return NextResponse.redirect(url.origin + "/locations/nevada");
	// if(url.pathname.includes('/locations/nevada/rochester')) return NextResponse.redirect(url.origin + "/locations/nevada");

	// if(
	// 	url.pathname.includes('/blog/articles/experience-a-stress-free-state-to-state-moving-process-with-star-van-lines-movers') ||
	// 	url.pathname.includes('/blog/simplify-your-antique-furniture-move-with') ||
	// 	url.pathname.includes('/blog/articles/how-to-find-the-least-expensive-movers-for-your-next-move') ||
	// 	url.pathname.includes('/blog/streamline-your-move-for-effortless-transition')
	// ) {
	// 	return NextResponse.redirect(url.origin + '/blog');
	// }

	// if(url.pathname.includes('/locations/new-york/-new-york-city')) return NextResponse.redirect(url.origin + '/locations/new-york/new-york-city')
}
