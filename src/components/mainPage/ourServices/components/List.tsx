import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import style from "@/styles/css/mainPage/ourServices.module.css";
import type { OurServicesListType } from "@/types/OurServices";

import OurServicesProposalList from "./ProposalList";

const ArrowIcon = () => {
	return (
		<svg
			width="11"
			height="18"
			viewBox="0 0 11 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width="2.41885"
				height="12.9005"
				rx="1.20943"
				transform="matrix(-0.718039 -0.696003 0.718039 -0.696003 1.73828 18)"
				fill="#272727"
			/>
			<rect
				width="2.41885"
				height="12.9005"
				rx="1.20943"
				transform="matrix(0.718039 -0.696003 -0.718039 -0.696003 9.26367 10.6621)"
				fill="#272727"
			/>
		</svg>
	);
};

const OurServicesList: FC<OurServicesListType> = ({ list }) => {
	return (
		<ul className={style.ourServicesList}>
			{list.map((item) => (
				<li key={item.title} className={style.ourServicesListItem}>
					<Link className={style.newLink} href={`/${item.slug}`}>
						<div className={style.ourServicesListItemImg}>
							<Image
								src={`${item.images}`}
								alt={item.title}
								width={60}
								height={60}
							/>
						</div>

						<div className={style.ourServicesListItemContent}>
							<div className={style.titleWrapp}>
								<p className={style.ourServicesListItemTitle}>{item.title}</p>
								<ArrowIcon />
							</div>

							<OurServicesProposalList proposal={item.proposal} />

							{/* <Link
							href={`/${item.slug}`}
							className={style.ourServicesListItemLink}
						>
							Read more
						</Link> */}
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default OurServicesList;
