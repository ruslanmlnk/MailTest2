import { GetServerSidePropsContext } from "next";
import { UAParser } from "ua-parser-js";

export const getIsMobileFromContext = (context: GetServerSidePropsContext) => {
	const parser = new UAParser();
	const userAgent = context.req.headers["user-agent"] || "";
	if (userAgent) {
		parser.setUA(userAgent);
		const type = parser.getDevice().type || "desktop";

		return type !== "desktop";
	}

	return false;
};
