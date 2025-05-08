import clsx from "clsx";
import Link from "next/link";

import styles from "./Breadcrumbs.module.scss";
import { IBreadCrumbsProps } from "./types";

const Divider = () => {
	return (
		<svg
			className={styles.svg}
			style={{ display: "block" }}
			viewBox="0 0 7 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width="1.57517"
				height="8.40093"
				rx="0.787587"
				transform="matrix(-0.701672 -0.7125 0.701672 -0.712501 1.10547 12.5)"
				fill="white"
			/>
			<rect
				width="1.57517"
				height="8.40093"
				rx="0.787587"
				transform="matrix(0.701672 -0.712501 -0.701672 -0.7125 5.89453 7.6084)"
				fill="white"
			/>
		</svg>
	);
};

export const Breadcrumbs = ({
	breadcrumbsArr,
	isDark = false,
	withPadding = false,
	truncate = false,
	className,
	isServicePage,
	extraPadding,
}: IBreadCrumbsProps) => {
	return (
		<div
			className={clsx(
				"block-container",
				styles.container,
				withPadding ? styles.pad : "",
				className ? className : "",
				isServicePage && styles.servicePage,
				extraPadding && styles.extraPadding,
			)}
		>
			{breadcrumbsArr?.map((el, index) => (
				<Link
					key={index}
					href={el.url}
					className={clsx(
						styles.link_wrap,
						isDark ? styles.dark : "",
						truncate && index === breadcrumbsArr.length - 1
							? styles.truncate
							: "",
					)}
				>
					{el.name}
					{index === breadcrumbsArr.length - 1 ? null : <Divider />}
				</Link>
			))}
		</div>
	);
};
