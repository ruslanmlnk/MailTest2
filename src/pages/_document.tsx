import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export interface SEOMovingCompany {
	title?: string;
	url?: string;
	description?: string;
}

export const addJsonLd_2 = ({ title, url, description }: SEOMovingCompany) => {
	return {
		__html: `{
			"@context": "https://schema.org",
			"@type": "MovingCompany",
			"name": "${title ?? "Star Van Lines"}",
			"image": "https://starvanlinesmovers.com/images/service1.jpg",
			"@id": "",
			"url": "${url ?? "https://starvanlinesmovers.com/"}",
			"description": "${description ?? ""}",
			"telephone": "+1 (855) 822-2722",
			"priceRange": "$$$",
			"paymentAccepted": "Visa, Cash, Mastercard, Amex, Credit Card",
			"email": "mailto:info@starvanlinesmovers.com",
			"brand": {
				"@type": "Brand",
				"name": "Star Van Lines"
			},
			"address": {
			  "@type": "PostalAddress",
			  "streetAddress": "51st St",
			  "addressLocality": "Vernon",
			  "addressRegion": "CA",
			  "postalCode": "90058",
			  "addressCountry": "US"
			},
			"geo": {
			  "@type": "GeoCoordinates",
			  "latitude": 33.9967203,
			  "longitude": -118.2342195
			},
			"openingHoursSpecification": [
			{
			  "@type": "OpeningHoursSpecification",
			  "dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			  ],
			  "opens": "07:00",
			  "closes": "19:30"
			},
			{
			  "@type": "OpeningHoursSpecification",
			  "dayOfWeek": "Saturday",
			  "opens": "07:00",
			  "closes": "16:00"
			},
			{
			  "@type": "OpeningHoursSpecification",
			  "dayOfWeek": "Sunday",
			  "opens": "07:00",
			  "closes": "13:00" 
			}]
		  }`,
	};
};

export const addJsonLdFAQ = (faqs: any[]) => {
	return {
		__html: `{
		"@context": "https://schema.org",
		  "@type": "FAQPage",
		  "mainEntity": ${JSON.stringify([...faqs])}
		}`,
	};
};

export interface SeoAddress {
	streetAddress: string;
	addressLocality: string;
	addressRegion: string;
	postalCode: string;
	addressCountry: string;
}

export const addJsonLDService = (
	type: string,
	name: string,
	stateName: string,
	description: string,
	addres?: SeoAddress,
) => {
	return {
		__html: `
				{
					"@context": "https://schema.org/",
					"@type": "Service",
					"serviceType": "${type}",
					"description": ${JSON.stringify(description)},
					"provider": {
						"@type": "LocalBusiness",
						"name": "${name}",
						"telephone": "+1(855) 822-2722",
						"priceRange": "$$$",
						"image": "https://starvanlinesmovers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-1-preview.560a70af.webp&w=1920&q=75",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "${addres?.streetAddress ?? "51st St"}",
							"addressLocality": "${addres?.addressLocality ?? "Vernon"}",
							"addressRegion": "${addres?.addressRegion ?? "CA"}",
							"postalCode": "${addres?.postalCode ?? "90058"}",
							"addressCountry": "${addres?.addressCountry ?? "US"}"
					}	
					},
					"areaServed": {
						"@type": "State",
						"name": "${stateName}"
					}
			}

		`,
	};
};

export default function Document() {
	function addJsonLd_1() {
		return {
			__html: `{
			"@context": "http://www.schema.org",
			"@type": "Organization",
			"name": "Star Van Lines",
			"url": "https://starvanlinesmovers.com/",
			"logo": "https://starvanlinesmovers.com/images/logo.jpg",
			  "alternateName": "SVL Movers",
					"sameAs": [
					"https://starvanlinesmovers.com",
					"https://www.facebook.com/profile.php?id=100090237278801",
					"https://www.instagram.com/starvanlinesllc/",
				"https://www.trustpilot.com/review/starvanlinesmovers.com",
				"https://www.yelp.com/biz/star-van-lines-vernon"],
			"image": "https://starvanlinesmovers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle-1-preview.560a70af.webp&w=1920&q=75",
			"areaServed": "US",
			"availableLanguage": "en",
			"description": "At Star Van Lines Movers, we take pride in being your trusted local house movers. With years of experience and a team of dedicated professionals, we are committed to providing top-notch moving services that cater to your specific needs.",
			"address": {
			  "@type": "PostalAddress",
			  "streetAddress": "51st St",
			  "addressLocality": "Vernon",
			  "addressRegion": "CA",
			  "postalCode": "90058",
			  "addressCountry": "US"
			},
			"contactPoint": {
			  "@type": "ContactPoint",
			  "telephone": "+1 (855) 822-2722",
			  "contactType": "Administrator"
			}
		  }`,
		};
	}

	// const addJsonLd_2 =() => {
	// 	return {
	// 		__html: `{
	// 			"@context": "https://schema.org",
	// 			"@type": "ProfessionalService",
	// 			"name": "Star Van Lines",
	// 			"image": "https://starvanlinesmovers.com/images/service1.jpg",
	// 			"@id": "",
	// 			"url": "https://starvanlinesmovers.com/",
	// 			"telephone": "+1(855) 822-2722",
	// 			"address": {
	// 			  "@type": "PostalAddress",
	// 			  "streetAddress": "51st St",
	// 			  "addressLocality": "Vernon",
	// 			  "addressRegion": "CA",
	// 			  "postalCode": "90058",
	// 			  "addressCountry": "US"
	// 			},
	// 			"geo": {
	// 			  "@type": "GeoCoordinates",
	// 			  "latitude": 33.9967203,
	// 			  "longitude": -118.2342195
	// 			},
	// 			"openingHoursSpecification": [
	// 			{
	// 			  "@type": "OpeningHoursSpecification",
	// 			  "dayOfWeek": [
	// 				"Monday",
	// 				"Tuesday",
	// 				"Wednesday",
	// 				"Thursday",
	// 				"Friday"
	// 			  ],
	// 			  "opens": "07:00",
	// 			  "closes": "19:30"
	// 			},
	// 			{
	// 			  "@type": "OpeningHoursSpecification",
	// 			  "dayOfWeek": "Saturday",
	// 			  "opens": "07:00",
	// 			  "closes": "16:00"
	// 			},
	// 			{
	// 			  "@type": "OpeningHoursSpecification",
	// 			  "dayOfWeek": "Sunday",
	// 			  "opens": "07:00",
	// 			  "closes": "13:00"
	// 			}]
	// 		  }`,
	// 	};
	// }

	// function addJsonLd_4() {
	// 	return {
	// 		__html: `{
	// 			"@context": "https://schema.org",
	// 			"@type": "ProfessionalService",
	// 			"name": "Star Van Lines",
	// 			"image": "https://starvanlinesmovers.com/images/service1.jpg",
	// 			"@id": "",
	// 			"url": "https://starvanlinesmovers.com/about",
	// 			"telephone": "+1(855) 822-2722",
	// 			"priceRange": "$250-$800",
	// 			"address": {
	// 			  "@type": "PostalAddress",
	// 			  "streetAddress": "51st St",
	// 			  "addressLocality": "Vernon",
	// 			  "addressRegion": "CA",
	// 			  "postalCode": "90058",
	// 			  "addressCountry": "US"
	// 			},
	// 			"geo": {
	// 			  "@type": "GeoCoordinates",
	// 			  "latitude": 33.9967203,
	// 			  "longitude": -118.2342195
	// 			},
	// 			"openingHoursSpecification": [
	// 			{
	// 			  "@type": "OpeningHoursSpecification",
	// 			  "dayOfWeek": [
	// 				"Monday",
	// 				"Tuesday",
	// 				"Wednesday",
	// 				"Thursday",
	// 				"Friday"
	// 			  ],
	// 			  "opens": "07:00",
	// 			  "closes": "19:30"
	// 			},
	// 			{
	// 			  "@type": "OpeningHoursSpecification",
	// 			  "dayOfWeek": "Saturday",
	// 			  "opens": "07:00",
	// 			  "closes": "16:00"
	// 			},
	// 			{
	// 			  "@type": "OpeningHoursSpecification",
	// 			  "dayOfWeek": "Sunday",
	// 			  "opens": "07:00",
	// 			  "closes": "13:00"
	// 			}]
	// 		  }`,
	// 	};
	// }

	// function addJsonLd_5() {
	// 	return {
	// 		__html: `{
	// 			"@context": "https://schema.org",
	// 			"@type": "ProfessionalService",
	// 			"name": "Star Van Lines",
	// 			"image": "https://starvanlinesmovers.com/images/service1.jpg",
	// 			"@id": "",
	// 			"url": "https://starvanlinesmovers.com/contacts",
	// 			"telephone": "+1(855) 822-2722",
	// 			"priceRange": "$250-$800",
	// 			"address": {
	// 			  "@type": "PostalAddress",
	// 			  "streetAddress": "51st St",
	// 			  "addressLocality": "Vernon",
	// 			  "addressRegion": "CA",
	// 			  "postalCode": "90058",
	// 			  "addressCountry": "US"
	// 			},
	// 			"geo": {
	// 			  "@type": "GeoCoordinates",
	// 			  "latitude": 33.9967203,
	// 			  "longitude": -118.2342195
	// 			},
	// 			"openingHoursSpecification": [
	// 			{
	// 			  "@type": "OpeningHoursSpecification",
	// 			  "dayOfWeek": [
	// 				"Monday",
	// 				"Tuesday",
	// 				"Wednesday",
	// 				"Thursday",
	// 				"Friday"
	// 			  ],
	// 			  "opens": "07:00",
	// 			  "closes": "19:30"
	// 			},
	// 			{
	// 			  "@type": "OpeningHoursSpecification",
	// 			  "dayOfWeek": "Saturday",
	// 			  "opens": "07:00",
	// 			  "closes": "16:00"
	// 			},
	// 			{
	// 			  "@type": "OpeningHoursSpecification",
	// 			  "dayOfWeek": "Sunday",
	// 			  "opens": "07:00",
	// 			  "closes": "13:00"
	// 			}]
	// 		  }`,
	// 	};
	// }

	function addJsonLd_3() {
		return {
			__html: ` 	{
				"@context": "https://schema.org/",
				"@type": "AggregateRating",
				"itemReviewed": {
				  "@type": "Organization",
				  "image": "https://starvanlinesmovers.com/favicon.ico",
				  "name": "Star Van Lines",
				  "telephone": "+1 (855) 822-2722",
				  "priceRange": "$$$",
				  "address": {
					"@type": "PostalAddress",
					"streetAddress": "51st St",
					"addressLocality": "Vernon",
					"addressRegion": "CA",
					"postalCode": "90058",
					"addressCountry": "US"
				  }
				},
				"ratingValue": "94",
				"bestRating": "100",
				"ratingCount": "213"
			  }`,
		};
	}

	function addJsonLd_4() {
		return {
			__html: `{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Star Van Lines",
            "url": "https://starvanlinesmovers.com/",
            "inLanguage": "en",
            "keywords": "moving, mover, movers, moving company, moving services, moving service"
        }`,
		};
	}

	function addJsonLd_5() {
		return {
			__html: `{
				"@context": "https://schema.org/", 
				"@type": "Product", 
				"name": "Moving Star Van Lines",
				"image": "https://starvanlinesmovers.com/_next/static/media/logo.0eb193e4.svg",
				"description": "Professional moving for local & long-distance relocations",
				"brand": {
					"@type": "Brand",
					"name": "Star Van Lines"
				}
			}`,
		};
	}

	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" type="image/x-icon" href="/favicon.ico" />
				<meta
					name="robots"
					content="index, follow, max-snippet:-1, max-image-preview:standard, max-video-preview:-1"
				/>
				<meta name="og:image" content="/opengraph-image.jpg" />

				{/* 
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_1()}
				/> */}
				{/* <script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_2()}
				/> */}
				{/* <script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_3()}
				/> */}
				<script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_4()}
				/>
				{/* <script
					async
					type="application/ld+json"
					dangerouslySetInnerHTML={addJsonLd_5()}
				/> */}
				<script
					type="text/javascript"
					src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
					async
				></script>

				{/* <meta
					name="description"
					content="Stress-free moving for local & long-distance relocations. Get a free quote & experience the Star Van Lines difference!"
				/> */}

				<meta property="og:url" content="https://starvanlinesmovers.com/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Trusted Van Movers for Your Relocation | Star Van Lines"
				/>
				<meta
					property="og:description"
					content="Stress-free moving for local & long-distance relocations. Get a free quote & experience the Star Van Lines difference!"
				/>
				<meta property="twitter:domain" content="starvanlinesmovers.com" />
				<meta
					property="twitter:url"
					content="https://starvanlinesmovers.com/"
				/>
				<meta
					name="twitter:title"
					content="Trusted Van Movers for Your Relocation | Star Van Lines"
				/>
				<meta
					name="twitter:description"
					content="Stress-free moving for local & long-distance relocations. Get a free quote & experience the Star Van Lines difference!"
				/>
				<meta name="twitter:image" content="/twitter-image.png" />
			</Head>
			<body>
				{/* <script
					async
					dangerouslySetInnerHTML={{
						__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XHNLZ2');`,
					}}
				></script>

				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-5XHNLZ2"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript> */}
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
