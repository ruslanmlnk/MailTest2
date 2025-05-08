import clsx from "clsx";
import parse from "html-react-parser";
import Link from "next/link";

import { parseMarkdown } from "../guides/seoCost";
import styles from "./AdditionSources.module.scss";

const WikiLogo = () => (
	<svg
		width="70"
		height="70"
		viewBox="0 0 70 70"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="70" height="70" rx="10" fill="white" />
		<path
			d="M41.534 50.99L35.902 37.4389C33.658 41.911 31.194 46.6078 29.082 50.99C29.06 51.0125 28.048 50.99 28.048 50.99C24.814 43.2369 21.47 35.5961 18.214 27.9104C17.466 26.0226 14.826 23.0113 13 23.0113V22H24.132V23.0113C22.812 23.0113 20.568 23.9102 21.14 25.3709C22.724 28.8318 28.268 42.2481 29.786 45.6639C30.82 43.5515 33.746 37.9782 35 35.6186C34.01 33.6409 30.886 26.2249 29.962 24.3821C29.258 23.1686 27.476 23.0113 26.112 23.0113C26.112 22.6742 26.134 22.4495 26.112 22.0225L35.924 22.0449V22.9439C34.582 23.0113 33.328 23.4832 33.9 24.7866C35.22 27.5733 35.99 29.5734 37.2 32.1577C37.574 31.3937 39.554 27.2362 40.5 25.0563C41.072 23.5956 40.214 23.0113 37.838 23.0113C37.86 22.7416 37.86 22.2697 37.86 22.0449C40.918 22.0225 45.516 22.0225 46.33 22V22.9439C44.768 23.0113 43.162 23.8652 42.326 25.1687L38.3 33.7983C38.696 34.9444 42.612 43.8212 43.03 44.81L51.5 24.9664C50.84 23.3484 48.948 23.0113 48.2 23.0113V22L57 22.0674V23.0113C55.064 23.0113 53.854 24.1349 53.15 25.8204C51.39 29.843 46 42.6526 42.48 50.99H41.534Z"
			fill="black"
		/>
	</svg>
);

const YouTubeLogo = () => (
	<svg
		width="70"
		height="70"
		viewBox="0 0 70 70"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="70" height="70" rx="10" fill="white" />
		<path
			d="M56.0293 24.5411C55.7769 23.6633 55.2845 22.8631 54.6012 22.2201C53.918 21.5771 53.0676 21.1138 52.1349 20.8763C48.72 20 34.9778 20 34.9778 20C34.9778 20 21.235 20.0266 17.8207 20.9029C16.888 21.1404 16.0377 21.6038 15.3545 22.2467C14.6713 22.8897 14.1789 23.6899 13.9265 24.5677C12.8937 30.2776 12.493 38.9777 13.9548 44.4589C14.2072 45.3366 14.6995 46.1369 15.3827 46.7799C16.066 47.4228 16.9163 47.8862 17.8489 48.1237C21.2635 49 35.006 49 35.006 49C35.006 49 48.7486 49 52.1631 48.1237C53.0958 47.8862 53.9461 47.4228 54.6293 46.7799C55.3126 46.1369 55.8049 45.3366 56.0573 44.4589C57.1464 38.7411 57.4823 30.0464 56.029 24.5414"
			fill="#FF0000"
		/>
		<path d="M31 41L42 34.5001L31 28V41Z" fill="white" />
	</svg>
);

const FacebookLogo = () => (
	<svg
		width="70"
		height="70"
		viewBox="0 0 70 70"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="70" height="70" rx="10" fill="white" />
		<path
			d="M54.5723 13H15.4277C14.0869 13 13 14.0869 13 15.4277V54.5723C13 55.9131 14.0869 57 15.4277 57H54.5723C55.9131 57 57 55.9131 57 54.5723V15.4277C57 14.0869 55.9131 13 54.5723 13Z"
			fill="#1877F2"
		/>
		<path
			d="M43.3316 57V39.6664H48.9329L49.7706 32.9114H43.3316V28.5998C43.3316 26.6444 43.856 25.3093 46.5547 25.3093H50V19.2578C48.3317 19.0776 46.6551 18.9917 44.9778 19.0006C40.0174 19.0006 36.6013 22.1398 36.6013 27.9303V32.9114H31V39.6664H36.6013V57H43.3316Z"
			fill="white"
		/>
	</svg>
);

const GlobalLogo = () => (
	<svg
		width="70"
		height="70"
		viewBox="0 0 70 70"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="70" height="70" rx="10" fill="white" />
		<path
			d="M24.0018 54.0524C28.2252 56.4905 33.1388 57.4568 37.971 56.7998C42.8032 56.1427 47.2803 53.8995 50.6994 50.4222M24.0018 54.0524C19.7786 51.6138 16.4849 47.8417 14.6378 43.3284C12.7908 38.8151 12.4949 33.8161 13.7968 29.1164M24.0018 54.0524C29.2624 57.0896 38.4536 51.0211 44.528 40.4998C50.6025 29.9786 51.2624 18.9845 46.0018 15.9473M24.0018 54.0524C18.7412 51.0152 19.4011 40.0211 25.4755 29.4998C31.5499 18.9786 40.7412 12.91 46.0018 15.9473M50.6994 50.4222C51.9711 49.1241 53.1034 47.6468 54.0543 45.9998C55.9513 42.726 56.9678 39.0165 57.0048 35.233M50.6994 50.4222C43.2467 50.2944 35.9501 48.2649 29.5018 44.5261C23.0397 40.8111 17.6338 35.5068 13.7968 29.1164M13.7968 29.1164C14.2954 27.3269 15.0186 25.6076 15.9492 23.9998C17.9109 20.6021 20.6431 17.9231 23.7983 16.0613M46.0018 15.9473C49.3812 17.8974 52.1813 20.7112 54.1148 24.1002C56.0483 27.4892 57.0457 31.3315 57.0048 35.233M46.0018 15.9473C42.6232 13.9956 38.7863 12.9776 34.8846 12.9977C30.9829 13.0177 27.1567 14.075 23.7983 16.0613M57.0048 35.233C50.0905 36.5649 42.9278 35.3544 36.8351 31.8244C30.4885 28.1602 26.0283 22.4802 23.7983 16.0613"
			stroke="#436AE5"
			strokeWidth="5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

interface SocialLinkProps {
	logo: React.ReactNode;
	href: string;
}

const SocialLink = ({ logo, href }: SocialLinkProps) => (
	<Link href={href}>{logo}</Link>
);

export interface Socials {
	YouTube: string;
	Wiki: string;
	Facebook: string;
	Global: string;
}

export interface Props {
	text: string;
	socials: Socials;
	isFirst?: boolean;
	isDynamic?: boolean;
}

export const AdditionlSources = ({
	text,
	socials,
	isFirst,
	isDynamic,
}: Props) => {
	return (
		<div
			style={isFirst ? { marginTop: "0px" } : {}}
			className={styles.extraWrapper}
		>
			<div className={clsx(styles.wrapper, isDynamic && styles.dynamic)}>
				<div className={styles.info}>
					<h3>Additionl sources</h3>
					{parse(parseMarkdown(text) ?? "")}
				</div>
				<ul className={styles.socials}>
					<SocialLink logo={<WikiLogo />} href={socials.Wiki} />
					<SocialLink logo={<YouTubeLogo />} href={socials.YouTube} />
					<SocialLink logo={<FacebookLogo />} href={socials.Facebook} />
					<SocialLink logo={<GlobalLogo />} href={socials.Global} />
				</ul>
			</div>
		</div>
	);
};
