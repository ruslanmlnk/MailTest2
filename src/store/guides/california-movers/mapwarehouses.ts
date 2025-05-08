import { StaticImageData } from "next/image";

import Arizona from "@/../public/images/guides/arizona/mapwarehouses.svg";
import California from "@/../public/images/guides/california/mapwarehouses.svg";
import Colorado from "@/../public/images/guides/colorado/mapwarehouses.svg";
import Florida from "@/../public/images/guides/florida/mapwarehouses.svg";
import Idaho from "@/../public/images/guides/idaho/mapwarehouses.svg";
import illinois from "@/../public/images/guides/illinois/mapwarehouses.svg";
import Missouri from "@/../public/images/guides/missouri/mapwarehouses.svg";
import Montana from "@/../public/images/guides/montana/mapwarehouses.svg";
import Nevada from "@/../public/images/guides/nevada/mapwarehouses.svg";
import New_Jersye from "@/../public/images/guides/newJersey/mapwarehouses.svg";
import New_York from "@/../public/images/guides/newYork/mapwarehouses.svg";
import North_Carolina from "@/../public/images/guides/northCarolina/mapwarehouses.svg";
import Oregon from "@/../public/images/guides/oregon/mapwarehouses.svg";
import South_Carolina from "@/../public/images/guides/southCarolina/mapwarehouses.svg";
import Texas from "@/../public/images/guides/texas/mapwarehouses.svg";
import Utah from "@/../public/images/guides/utah/mapwarehouses.svg";
import Washington from "@/../public/images/guides/washington/mapwarehouses.svg";

export interface IWarehouseMap {
	address: string;
	state: string;
	url: string;
	phone: string;
	component: ITexasMapWarehouses[];
}
interface ITexasMapWarehouses {
	content: string;
	title: string;
	description: string;
	image: StaticImageData;
}

export const WarehousesMap: IWarehouseMap[] = [
	{
		address: "Alhambra Ave, Los Angeles 90032",
		state: "california",
		url: "",
		phone: "(855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of California",
				description:
					"Choose the most suitable storage address for your belongings",
				image: California,
			},
		],
	},
	{
		address: "Garden Ave, Glendale 90039",
		state: "california",
		url: "",
		phone: "(855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of California",
				description:
					"Choose the most suitable storage address for your belongings",
				image: California,
			},
		],
	},
	{
		address: "Pacific Center Blvd, San Diego 92121",
		state: "california",
		url: "",
		phone: "(855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of California",
				description:
					"Choose the most suitable storage address for your belongings",
				image: California,
			},
		],
	},
	{
		address: "N Lakewood Blvd, Long Beach 90806",
		state: "california",
		url: "",
		phone: "(855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state of \n California",
				description:
					"Choose the most suitable storage address for your belongings",
				image: California,
			},
		],
	},
	{
		address: "Calcite Cir, Newbury Park 91320",

		state: "california",
		url: "https://www.google.com/search?q=Star+Vanlines&stick=H4sIAAAAAAAA_-NgU1I1qLAwSLUwNrQwMLE0TEozsUizMqhISU4zsjQ2TDQwNDZLSjZLXMTKG1ySWKQQlpiXk5mXWgwAGKMtJDkAAAA&hl=en&mat=CSJuSp16mXTsElcBeenfiIjER7k7i4bsnOf8C6-09fHD3FMHgiviHhvWicgdAW6Jnkpnet2rALB7gHrXvqcbhK92pd6h84L7XP9E7M2TjBqTTB8bHzqKZTCuiZ8L0RhzJt8&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of California",
				description:
					"Choose the most suitable storage address for your belongings",
				image: California,
			},
		],
	},
	{
		address: "S Grand Ave, Santa Ana 92705",
		state: "california",
		url: "",
		phone: "(855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of California",
				description:
					"Choose the most suitable storage address for your belongings",
				image: California,
			},
		],
	},
	{
		address: "NW 54 St, Fort Lauderdale 33309",
		state: "florida",
		url: "",
		phone: "(855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Florida",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Florida,
			},
		],
	},
	{
		address: "N Howard St, Spokane 99201",
		state: "washington",
		url: "",
		phone: "(855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Washington",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Washington,
			},
		],
	},
	{
		address: "29th Ave SW, Tumwater 98512",
		state: "washington",
		url: "",
		phone: "(855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Washington",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Washington,
			},
		],
	},
	{
		address: "Oneida St Denver 80216",
		state: "colorado",
		url: "https://www.google.com/search?q=Star+Van+Lines+Colorado&stick=H4sIAAAAAAAA_-NgU1I1qLAwN0s2T0pOMzQwt0gySUqyAgolGhgZp1gkppqZmhgbmZssYhUPLkksUghLzFPwycxLLVZwzs_JL0pMyQcApF9RK0MAAAA&hl=en&mat=CUne-zqxAzrUElcBeenfiNP7jULNp5OjniAY-hALmRR4OyyotsUWH1KuDkka05EDDhr3VXX125z5zqrEPXhIm6Xu6hAbGuUhrkDZHE_vi-lwHg4Q_P2k3NQxVozMlmv9J0Y&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Colorado",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Colorado,
			},
		],
	},
	{
		address: "US-290 Austin 78736",
		state: "texas",
		url: "",
		phone: "(855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Texas",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Texas,
			},
		],
	},
	{
		address: "North Point St, San Francisco, CA 94133",
		state: "california",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwsDC1MEw2sEg0SjNMNLa0AgolGhsnGRmapVqYWFomGxstYuULLkksUghLzFPwycxLLQYAkEiv5ToAAAA&hl=en&mat=CVX7jdBDpepXElcBeenfiNqeUMdyASUtTKDxMdgbCl0V7vH5bxSO-wLDRbdFE85PmYSjIiovmYdP-Y38Kttw0GDLQxOyrZkkc0Dt4Ew0Torf729YIpMLxxXh6cSxq8hNyOE&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of California",
				description:
					"Choose the most suitable storage address for your belongings",
				image: California,
			},
		],
	},
	{
		address: "Raley Blvd, Sacramento, CA 95838",
		state: "california",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwsExMsTQ0MEi0NLUwNjS0MqhISzZJNjMzM0w0TDW2MDZOXcTKF1ySWKQQlpin4JOZl1oMAMrPBVk6AAAA&hl=en&mat=Cf2SHrGYJEqqElcBeenfiD5flcrlkYqenc3BrcypvWjnFzm6tcJafYOoxv9E7SVjwNHIQBG6Fc44xJG-loFEJKvqOG_TgymXIj3AtmGS3Hpm1v8ICq8kHauVr0r5rpbipA8&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of California",
				description:
					"Choose the most suitable storage address for your belongings",
				image: California,
			},
		],
	},
	{
		address: "S Dr. Martin Luther King Jr. Blvd, Bakersfield, CA 93307",
		state: "california",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwSE00S0pKTTIyTjVJSbW0MqhINTS3tEwxSTQxTTUzTDQ3XsTKF1ySWKQQlpin4JOZl1oMAL7dOrQ6AAAA&hl=en&mat=CejKJzEIfDdHElcBeenfiBhjN1RNPby0O6esBwDVDHs1HNvdPAEuvpxk-rS0T1HYbs3V-ZoTvaisEdrLCEm8SILfCUxY_P8VOolVdhVkSJAcSmNXltREcSINrFERBzBlotc&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of California",
				description:
					"Choose the most suitable storage address for your belongings",
				image: California,
			},
		],
	},
	{
		address: "10839 N Lombard St, Portland, OR 97203",
		state: "oregon",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qDA1sTRNtDQxNjQ0SzU0NEqzMqgwNDC1NDE1tTA1TDM3NU1JW8TKF1ySWKQQlpin4JOZl1oMAGS8NR86AAAA&hl=en&mat=CYO4QuUixNfqElcBeenfiEduxxcpug5Q1BkrmGI13gvhQMiAJ8HiV20MfsYmWgogMJ8OhLsDWXpF-JxzD0ttwLj0p8jnectRfGlCPMuZRNdliH4Zmj5MowhlqJmREQgm3Cs&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Oregon",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Oregon,
			},
		],
	},
	{
		address: "N 25th Ave, Phoenix, AZ 85023",
		state: "arizona",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwN0oyS0s2MjZPNQBS5lYGFYkpBiaGiaaGpmYGycaW5haLWPmCSxKLFMIS8xR8MvNSiwF3KICEOgAAAA&hl=en&mat=CfTh4RwDmvCrElcBeenfiDYWh_clnfmCR7wrwkXn-adzlfeoqvnNb--4Vev54T1wSMKRVG6vjSe0jsqN-xzz4tNKrcFbrzppn-1p-T1bUyDql_s9kvwZkJ87rGs5TsjoIqo&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Arizona",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Arizona,
			},
		],
	},
	{
		address: "N Oakes St, Helena, MT 59601",
		state: "montana",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qDA1NjE2NTU1srRISk01N7a0MqgwSjROtDAySjFOSzJKNUg0WMTKF1ySWKQQlpin4JOZl1oMAKDsoI86AAAA&hl=en&mat=CT2Y1KRb7-ZQElYBeenfiLVgRqLytVIFy8NV5_1MKwe5YyH83MuP2lRV-FJlNGX00CFyEUSydvoa0CH3KBXHqeWRi6GqnOLiI1izlBH_eFQPZ8yYcU4rk7gcqlk_NcwEoQ&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Montana",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Montana,
			},
		],
	},
	{
		address: "E Linden St, Boise, ID 83706",
		state: "idaho",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qDA1SUxNs7RMSQVCSzODJCuDCjMT0zTzFIMUQ5O0REtzc8tFrHzBJYlFCmGJeQo-mXmpxQBKjoeWOgAAAA&hl=en&mat=CW1NytCZ-3kSElYBeenfiOB0PJAPyUDOdqZ_M1t0XGc8XSEyrYluy2h_utBLgSTDrZtgqjwZ2DGBve_-05k9bptxu0_wOxzskJXy8I57quN7bYgUHkUTh-fiTLQvkT71Cw&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Idaho",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Idaho,
			},
		],
	},
	{
		address: "Cheney Dr, Twin Falls, ID 83301",
		state: "idaho",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qDA1SUxONDa1TEw0tjSwNDS2MqgACqSaJ1umJFkYGJiZGKUsYuULLkksUghLzFPwycxLLQYATAACqjoAAAA&hl=en&mat=CXGz6KX0qmsQElYBeenfiJEjxmuL8n7YUpJjNVPFXGdvWLpuMnNWLZ0AfVvH-8yv0GRZrtNlXAyohp-KvDGTCAuxgSpRdkRhG9BmC9Zsas_chTDjKgC_Kttr5ola2LkzNQ&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Idaho",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Idaho,
			},
		],
	},
	{
		address: "N Redwood Rd, Salt Lake City, UT 84116",
		state: "utah",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwNzVKMzU2M00xN0lNTba0MqhItUyxNDOyTEqxMEk0NExKXsTKF1ySWKQQlpin4JOZl1oMAKhBZXc6AAAA&hl=en&mat=CWdOyYlLJWY4ElcBeenfiH72PCa8_gLE87lNuPuuOu-xXy_BvsQOOQUZcSfxQiiy1pVZoD3XTs0o-offaa8DN-teqIxp3hxy4LGIaBYnl_fryQTHtI8Qb7KJdFfjcUAO-t0&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Utah",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Utah,
			},
		],
	},
	{
		address: "Monroe Dr, Dallas, TX 75229",
		state: "texas",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwM0m1TDE3TrMwN7AwSjK2MqgwS0syMjEytDQ1MLNIM7E0WcTKF1ySWKQQlpin4JOZl1oMAFZfY6Q6AAAA&hl=en&mat=Ca_ZXUJJkx2GElcBeenfiLRCgotcFf7279ObeU55aZ_unmVchdqsmib3Y6Lbyd4KaMBk_9a0UMjlnku8IMIVm2Mv97bHC_4MHyBXT8u09qbmSDfrI9KjMzlByjMcRqB8rx4&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Texas",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Texas,
			},
		],
	},
	{
		address: "Avenue B, Houston, TX 77011",
		state: "texas",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwMzFISjE0TDKwTDYyME2yMqgwNbI0MzJJNUtMNk01SDOwWMTKF1ySWKQQlpin4JOZl1oMAJHpwkQ6AAAA&hl=en&mat=Cd8YGSwpFS44ElYBeenfiDIxJNrVQDcJi7k5SSBJ7PRJDPVm76I03zf20qQFhUv3wThmFlHbSfVB2-MyGfNtLNpOX5sCsv5LE8FLYfBsvY2gEBk4f2rmcVrF-G1W8zDUkg&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Texas",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Texas,
			},
		],
	},
	{
		address: "Southside Rd, El Paso, TX 79927",
		state: "texas",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwSzU3MTYxTbZISjRLTDS0MqhISTRKMjA2szA3NEq1TEw2XcTKF1ySWKQQlpin4JOZl1oMALGPI_E6AAAA&hl=en&mat=CcjwFdVfeVM0ElcBeenfiHiEWbXFCR5j-cMrb_m1gWHMUidpHGD69UvYYum9cf0X8PK1v7ys2y0OvYk7x44C6SamsPOgDJ9QBJ0T3gHththKZbLak10ELpgjFww9rchojkI&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Texas",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Texas,
			},
		],
	},
	{
		address: "SW 31st Ave, Hallandale Beach, FL 33009",
		state: "florida",
		url: "https://www.google.com/search?q=Star+Vanlines&stick=H4sIAAAAAAAA_-NgU1I1qLCwSLFMTDI0MzNIMTcyMjG2MqgwM7VMMzc0TzQ0TDMzNTAxWMTKG1ySWKQQlpiXk5mXWgwAyQ2HYDkAAAA&hl=en&mat=CTWGsTucPeYVElcBeenfiBws3LDA54zgTplOuOV1BDf7F9Jn0aqyXJhMPwXX_Oc3AalfjPPy6Hb6muyaq3GJFFDG8VcPzkL96V3_n3tubP0VRiAgyPLgM7qcIeqr_uq60Tc&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Florida",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Florida,
			},
		],
	},
	{
		address: "Convent Ave, New York, NY 10027",
		state: "new-york",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLCwTDZKMzdMtjA2NUwyTkqyMqhINTexMDEwNDA0M7EwNkoxW8TKF1ySWKQQlpin4JOZl1oMAK7wyTo6AAAA&hl=en&mat=CU6LytvYja9YElYBeenfiCKvNZgcfUdlfLfrzS1oge3aNi_7jYxf97TSqfYR4tU9TI4isKoVuy3VaySzpVz8lECHDzZxCart5SuAFyz8aMxU_oWpSvjUxPpgBxbttQc_qg&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of New York",
				description:
					"Choose the most suitable storage address for your belongings",
				image: New_York,
			},
		],
	},
	{
		address: "Kentucky Ave, Atlantic City, NJ 08401",
		state: "new-jersey",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLCwTDZITbNMMjI2N7ZIsUyzMqhIMjA3MjeztDAyNDU3tzBOWsTKF1ySWKQQlpin4JOZl1oMAHwNXjg6AAAA&hl=en&mat=Cd0b6W0A5yyxElcBeenfiFywmPqaCTpcYl8w_fWitvQHjkUWZGHcIOZP-ZdEk5P98ix79f7Qw7D1t7IXSEJCxKx_Xyj7sdVPalqJNXbmopx91w7UZMsHIo-JMQJBkPV9iKQ&authuser=0",
		phone: "+1 (718)-208-4728",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of New Jersye",
				description:
					"Choose the most suitable storage address for your belongings",
				image: New_Jersye,
			},
		],
	},
	{
		address: "Sunset Blvd, West Columbia, SC 29169",
		state: "south-carolina",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLCwSLNISjE0t0g0NzU0NjW1AgqlWhqZGlgYGhgaJqVaGKUtYuULLkksUghLzFPwycxLLQYAouRUMToAAAA&hl=en&mat=CWVfqNDD__N0ElcBeenfiE6r3X8dkWzptAMgxTO3WNbPknPLB0XyXVcVIsptn-Lbi0aIEsTFjnkL2gxYtor_rUOiIWqRyZozOBeFBtsZVrF9MMxKWJzfY3ycSrWmvnNWQKo&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of South Carolina",
				description:
					"Choose the most suitable storage address for your belongings",
				image: South_Carolina,
			},
		],
	},
	{
		address: "S Elm St, Greensboro, NC 27406",
		state: "north-carolina",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLCwMDU2tDRLskg1SjawtDS3MqgwMUs0NjZKMrI0NzUxsLCwWMTKF1ySWKQQlpin4JOZl1oMAKlRRJk6AAAA&hl=en&mat=CVZcuf3RA2oeElcBeenfiPpGwy8C_S538NkbNs8JB1OPiJpV6Zlijc3gsa9Im4zwx_oWLyEozl7TuEPkD1icUhaAhfmYRiigvpB4ZrnYPnsKPuRV4LN9ZIhoJyixcHheHwQ&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of North Carolina",
				description:
					"Choose the most suitable storage address for your belongings",
				image: North_Carolina,
			},
		],
	},
	{
		address: "Signal Point Rd, Charleston, SC 29412",
		state: "south-carolina",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLCwSEs1tzRIskg1SLWwSDS1MqhINjA3M7c0NDRPM0s0sLRMWsTKF1ySWKQQlpin4JOZl1oMAOWbiQQ6AAAA&hl=en&mat=CcF8RhtTncKkElYBeenfiIMGcpCUGS8Gnucxfezr3nwIn1wvkq5NPKFA5_vTHRVnm-u8uFk9WtJanZKfFsGQXrt8Jrzyf23XAD-PGuU29tT_D7nMsUPqtvGKFpzF4sl3Hw&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of South Carolina",
				description:
					"Choose the most suitable storage address for your belongings",
				image: South_Carolina,
			},
		],
	},
	{
		address: "St Augustine Rd, Jacksonville, FL 32207",

		state: "florida",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLCwSDVNMk8zMzJONjczTkuzAgoBWamWJhapFhZJxhYWlotY-YJLEosUwhLzFHwy81KLAeloCs86AAAA&hl=en&mat=CRrcFHNHX0FkElYBeenfiPfEiumY-JWjN0A6fMT29PeqwiEYhfgs7V_5fgoaoKBKt5oGRIU3Y26VLk9NFVC7ZK8VHVTmh5NK9noLN8MNqebge6bI5sjgqwdG61T0K1zWfg&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Florida",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Texas,
			},
		],
	},
	{
		address: "22nd St, Orlando, FL 32805",

		state: "florida",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLCwSDU3TzIzT0tJskxKMTO0MqiwNDC2MDMxTTNKsTBNNEg2W8TKF1ySWKQQlpin4JOZl1oMAALqYdU6AAAA&hl=en&mat=CQEeMUvhGKVJElcBeenfiHrR4I6SQq5onWSUnT237CIn5LaNt59s8PWXhfThrhZnoG37Oy07IZvszNQ62I8Yce_tZkZQQFbM7tIRloKpgo8D7nQfNAxmCVxBmy5SBiynfOI&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Florida",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Florida,
			},
		],
	},
	{
		address: "Lazy Ln, Tampa, FL 33614",

		state: "Florida",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLCwSDZKNkwxM00yM0s2N02yMqhItDQ3NzAzMTUyMbVMS01OWsTKF1ySWKQQlpin4JOZl1oMAApVWJw6AAAA&hl=en&mat=CQ0sVc2xf_WXElcBeenfiOG5ICRO_fVssF0usuUE3ttP3MRjvAXaSB4zwjtw0fTA4GolfMhBol3dP7CC4evohhl65wuvp-wo_LU3b7LbydWPYODiLZejJES1zZ13hkBjO48&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Florida",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Florida,
			},
		],
	},
	{
		address: "N Northwest Hwy, Chicago, IL 60646",
		state: "illinois",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLCwMEhLtkwzSjMwTjU0SjW3MqgwTEoxM082STQzMUlOMkw2WcTKF1ySWKQQlpin4JOZl1oMANMXh046AAAA&hl=en&mat=Cc-s9qBp7G6uElcBeenfiGvJqYVHb98AG42x9SrwinKyuPNuIePf2prvz1E_KmySmgB1_zknPOi5k3SZr-WPRiOakzpiry9UtqF7V1V3oMrO12tkZmwzMG034vt-F3VHQ-c&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Illinois",
				description:
					"Choose the most suitable storage address for your belongings",
				image: illinois,
			},
		],
	},
	{
		address: "Arville St, Las Vegas, NV 89103",
		state: "nevada",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwSLZINrdMtUxMsUxNTU6xMqgwNLWwsEw0TTZKMbQwNEg2XsTKF1ySWKQQlpin4JOZl1oMABsuW8w6AAAA&hl=en&mat=CRSTJjWs47NcElcBeenfiBMRRIB0CKauC2giRq-Zd_CkCwtTsS62zEVsPkHtCPZajF0_bc9BMH1Dl-zBSdqgd9FhpQNLT0h2gAXefH_j4iSqp4ekacfxOzIbYySqm5_Qpto&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Nevada",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Nevada,
			},
		],
	},
	{
		address: "Prospect Ave, Kansas City, MO 64132",
		state: "missouri",
		url: "https://www.google.com/search?q=Star+Van+Lines&stick=H4sIAAAAAAAA_-NgU1I1qLAwTzZINbdMTDVKM0hNTTO1MqgwNzMxN0k2T04yNE5KTUo1XsTKF1ySWKQQlpin4JOZl1oMAJNKWnw6AAAA&hl=en&mat=CRtKZfUmnYNoElcBeenfiFChzpEWnNzvKd_LsotecUgqjaThH9LRJt_rTyWxJOjqPK51KPlsEMW0_vjPH8mz6bkZsdWnfMtocTJ87Azxbh_h8OtrrsRz5Bj9yU72CVvmhSM&authuser=0",
		phone: "+1 (855)-822-2722",
		component: [
			{
				content: "service map",
				title: "Our warehouses in a state \n of Missouri",
				description:
					"Choose the most suitable storage address for your belongings",
				image: Missouri,
			},
		],
	},
];
