import "leaflet/dist/leaflet.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Router, useRouter } from "next/router";
import React from "react";
import "swiper/css";import { GoogleTagManager } from '@next/third-parties/google'

import Layout from "@/components/layout";
import { useUtmCookiesHandler } from "@/helpers/utm/useUtmCookiesHandler";
import "@/styles/css/global.css";
import Script from "next/script";

const TTTravels = localFont({
	variable: "--font-tttravels",
	preload: true,
	src: [
		{
			path: "../../public/fonts/TTTravels-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/TTTravels-Medium.woff",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/TTTravels-DemiBold.woff",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/TTTravels-Bold.woff",
			weight: "700",
			style: "normal",
		},
	],
});

function FacebookPixel() {
	React.useEffect(() => {
		import("react-facebook-pixel")
			.then((x) => x.default)
			.then((ReactPixel) => {
				ReactPixel.init("1393754811224430");
				ReactPixel.pageView();

				Router.events.on("routeChangeComplete", () => {
					ReactPixel.pageView();
				});
			});
	});
	return null;
}

export default function App({ Component, pageProps }: AppProps) {
	const { query } = useRouter();

	useUtmCookiesHandler(query);
	return (
		<>
		{/* <Script
					async
					dangerouslySetInnerHTML={{
						__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XHNLZ2');`,
					}}
				></Script>

				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-5XHNLZ2"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript> */}
				 <GoogleTagManager gtmId="GTM-5XHNLZ2" />
			<FacebookPixel />
			<main className={TTTravels.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</>
	);
}
