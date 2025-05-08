const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"s3.us-west-2.amazonaws.com",
			"via.placeholder.com",
			"images.unsplash.com",
			"dwgyu36up6iuz.cloudfront.net",
			"avatars.githubusercontent.com",
			"media.giphy.com",
			"cdn.hashnode.com",
			"res.craft.do",
			"res.cloudinary.com",
			"iad.microlink.io",
		],
	},
};

module.exports = withBundleAnalyzer(nextConfig);
