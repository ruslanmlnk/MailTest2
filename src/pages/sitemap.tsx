import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";

import styles from "../styles/sitemap.module.scss";

const qs = require("qs");

export const statesQuery = qs.stringify({
	fields: ["slug", "stateName"],
});

export const cityPathQuery = qs.stringify({
	populate: {
		guide: {
			fields: ["stateName"],
		},
	},
	fields: ["cityName", "guide"],
	pagination: {
		page: 1,
		pageSize: 1000,
	},
});

export const cityRoutePathQuery = qs.stringify({
	populate: {
		movingFrom: {
			fields: ["cityName"],
		},
		movingTo: {
			fields: ["cityName"],
		},
		states: {
			fields: ["stateName"],
		},
	},
	fields: ["movingFrom", "movingTo"],
	pagination: {
		page: 1,
		pageSize: 1000,
	},
});

export const movingRoutePathQuery = qs.stringify({
	populate: {
		movingFrom: {
			fields: ["stateName"],
		},
		movingTo: {
			fields: ["stateName"],
		},
	},
	fields: ["movingFrom", "movingTo"],
	pagination: {
		page: 1,
		pageSize: 1000,
	},
});

export const articlesQuery = qs.stringify({
	fields: ["title", "slug"],
	pagination: {
		page: 1,
		pageSize: 1000,
	},
});

const zipCodePathQuery = qs.stringify({
	fields: ["zipCode"],
	populate: {
		guide: {
			fields: ["stateName"],
		},
	},
	pagination: {
		page: 1,
		pageSize: 1000,
	},
});

const transformStates = (statesArr: any[]) => {
	return statesArr.map((el) => ({
		title: el.attributes.stateName,
		href: `/locations/${el.attributes.slug}`,
	}));
};

const transformCities = (citiesArr: any[]) => {
	return citiesArr.map((el) => ({
		title: el.attributes.cityName,
		href: `/locations/${el.attributes.guide.data.attributes.stateName
			.toLowerCase()
			.split(" ")
			.filter((el: string) => (el ? true : false))
			.join("-")}/
			${el.attributes.cityName
				.split(" ")
				.filter((el: string) => (el ? true : false))
				.join("-")
				.toLowerCase()
				.split(",")
				.join("")}`,
	}));
};

const transfromMovingRoutes = (routesArr: any[]) => {
	return routesArr.map((el) => {
		const title =
			el.attributes.movingFrom.data.attributes.stateName +
			" to " +
			el.attributes.movingTo.data.attributes.stateName;
		const slug =
			el.attributes.movingFrom.data.attributes.stateName
				.toLowerCase()
				.split(" ")
				.filter((el: string) => (el ? true : false))
				.join("-") +
			"-to-" +
			el.attributes.movingTo.data.attributes.stateName
				.toLowerCase()
				.split(" ")
				.filter((el: string) => (el ? true : false))
				.join("-");
		return {
			title: title,
			href: `/locations/${el.attributes.movingFrom.data.attributes.stateName
				.toLowerCase()
				.split(" ")
				.filter((el: string) => (el ? true : false))
				.join("-")}/${slug}`,
		};
	});
};

const transfromCityRoutes = (routesArr: any[]) => {
	return routesArr.map((el) => {
		const title = el.attributes.movingFrom + " to " + el.attributes.movingTo;
		const slug =
			el.attributes.movingFrom
				.toLowerCase()
				.split(" ")
				.filter((el: string) => (el ? true : false))
				.join("-") +
			"-to-" +
			el.attributes.movingTo.toLowerCase().split(" ").join("-") +
			"-move";
		const stateSLug = el.attributes.states.data[0].attributes.stateName
			.toLowerCase()
			.split(" ")
			.filter((el: string) => (el ? true : false))
			.join("-");
		return {
			title: title,
			href: `/locations/${stateSLug}/${slug}`,
		};
	});
};

const transformArticles = (articlesArr: any[]) => {
	return articlesArr.map((el) => ({
		title: el.attributes.title,
		href: `/blog/${el.attributes.slug}`,
	}));
};

export async function getServerSideProps() {
	const states = await fetch(
		`https://admin.starvanlinesmovers.com/api/guides?${statesQuery}`,
	).then((res) => res.json());

	const cities = await fetch(
		`https://admin.starvanlinesmovers.com/api/cities?${cityPathQuery}`,
	).then((res) => res.json());

	const movingRoutes = await fetch(
		`https://admin.starvanlinesmovers.com/api/moving-routes?${movingRoutePathQuery}`,
	).then((res) => res.json());

	const cityRoutes = await fetch(
		`https://admin.starvanlinesmovers.com/api/city-moving-routes?${cityRoutePathQuery}`,
	).then((res) => res.json());

	const articles = await fetch(
		`https://admin.starvanlinesmovers.com/api/articles?${articlesQuery}`,
	).then((res) => res.json());

	return {
		props: {
			states,
			cities,
			movingRoutes,
			cityRoutes,
			articles,
		},
	};
}

interface StiemapLink {
	title: string;
	href: string;
	extraLinks?: StiemapLink[];
}

const MAIN_LINKS: StiemapLink[] = [
	{
		title: "Calculator",
		href: "/calculator",
	},
	{
		title: "Locations",
		href: "/locations",
	},
	{
		title: "About us",
		href: "/about",
	},
	{
		title: "Blog",
		href: "/blog",
	},
	{
		title: "Contact",
		href: "/contacts",
	},
	{
		title: "Reviews",
		href: "/reviews",
	},
];

const SERVICES_LINKS: StiemapLink[] = [
	{
		title: "Long distance moving",
		href: "/long-distance-moving",
	},
	{
		title: "Local moving",
		href: "/local-moving",
	},
	{
		title: "Commercial relocation",
		href: "/commercial-relocation",
	},
	{
		title: "Special-moving",
		href: "/special-move",
		extraLinks: [
			{
				title: "Piano move",
				href: "/special-move/piano-move",
			},
			{
				title: "Pooltable move",
				href: "/special-move/pooltable-move",
			},
			{
				title: "Military move",
				href: "/special-move/military-move",
			},
			{
				title: "Car shipping",
				href: "/special-move/car-shipping",
			},
			{
				title: "Safe Movers",
				href: "/special-move/safe-movers",
			},
			{
				title: "Junk removal",
				href: "/special-move/Junk-removal",
			},
			{
				title: "Hot Tub Movers",
				href: "/special-move/hot-tub-movers",
			},
			{
				title: "Moving Labor",
				href: "/special-move/Moving-Labour",
			},
		],
	},
	{
		title: "Storage",
		href: "/storage",
	},
	{
		title: "Packing and unpacking",
		href: "/packing-and-unpacking",
	},
];

interface ILinksList {
	title: string;
	data: any;
	transfromFunc: (data: any) => StiemapLink[];
}

const LinksList = ({ data, title, transfromFunc }: ILinksList) => {
	return (
		<div className={styles.wrapper}>
			<h2>{title}</h2>
			<ul>
				{transfromFunc(data)
					.sort((el1, el2) => el1.title.localeCompare(el2.title))
					.map((el, i) => (
						<li key={i}>
							<Link href={el.href}>{el.title}</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

const BREADCRUMBS = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "Sitemap",
		url: "/sitemap",
	},
];

export default function Sitemap(props: any) {
	return (
		<>
			<Head>
				<title>Sitemap - Star Van Lines</title>
			</Head>
			<Breadcrumbs
				className={styles.breadcrumbs}
				isDark
				breadcrumbsArr={BREADCRUMBS}
			/>
			<main className={clsx("block-container", styles.main)}>
				<div className={styles.wrapper}>
					<h2>Main</h2>
					<ul className={styles.linksList}>
						{MAIN_LINKS.map((el, i) => (
							<li key={i}>{<Link href={el.href}>{el.title}</Link>}</li>
						))}
					</ul>
				</div>
				<div className={styles.wrapper}>
					<h2>Services</h2>
					<ul className={styles.linksList}>
						{SERVICES_LINKS.map((el, i) => (
							<li key={i}>
								{
									<>
										<Link href={el.href}>{el.title}</Link>
										{el.extraLinks && (
											<ul className={styles.extraList}>
												{el.extraLinks.map((els: StiemapLink, i) => (
													<li key={i}>
														{<Link href={els.href}>{els.title}</Link>}
													</li>
												))}
											</ul>
										)}
									</>
								}
							</li>
						))}
					</ul>
				</div>
				{props.states.data && (
					<LinksList
						data={props.states.data}
						title="States"
						transfromFunc={transformStates}
					/>
				)}
				{props.cities.data && (
					<LinksList
						data={props.cities.data}
						title="Cities"
						transfromFunc={transformCities}
					/>
				)}
				{props.movingRoutes.data && (
					<LinksList
						data={props.movingRoutes.data}
						title="Moving routes"
						transfromFunc={transfromMovingRoutes}
					/>
				)}
				{props.cityRoutes.data && (
					<LinksList
						data={props.cityRoutes.data}
						title="City moving routes"
						transfromFunc={transfromCityRoutes}
					/>
				)}
				{props.articles.data && (
					<LinksList
						data={props.articles.data}
						title="Blog"
						transfromFunc={transformArticles}
					/>
				)}
			</main>
		</>
	);
}
