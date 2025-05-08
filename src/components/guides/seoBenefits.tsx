import Image from "next/image";
import React, { FC } from "react";

import { IStrapiImage, shimmer, toBase64 } from "@/lib/notion";

import Arrow from "../../../public/images/mainPage/whyWeAre/bg-image.svg";
import Tick from "../../../public/images/tick-icon.svg";
import style from "../../styles/css/guides/seoBenefits.module.css";

export interface ISEOBenefits {
	id: number;
	image: IStrapiImage;
	title: string;
	textList: {
		textListItem: string;
	}[];
}

interface Props {
	store: ISEOBenefits;
	placeName?: string;
	isFirst?: boolean;
}

const SeoBenefits = ({ store, placeName, isFirst }: Props) => {
	return (
		<section className={style.section}>
			<div
				style={isFirst ? { marginTop: "0px" } : {}}
				className={`block-container ${style.container}`}
			>
				<div className={style.text}>
					<p className={style.title}>Benefits</p>
					{/* <h2>{name ? `Benefits of moving to the ${name}` : store.title}</h2> */}
					{placeName ? (
						<h2>{`Benefits of moving to the ${placeName}`}</h2>
					) : null}
					<div className={style.points}>
						{store.textList.map((item, index) => (
							<div key={index}>
								<Image
									src={Tick}
									alt="Nationwide Moving Guides For Anywhere in America SVL"
								/>
								<p>{item.textListItem}</p>
							</div>
						))}
					</div>
					<div className={style.section_background} />
				</div>
				<div className={style.video}>
					<Image
						src={store.image.data.attributes.url}
						// width={580}
						// height={600}
						// width={490}
						// height={652}
						fill
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(670, 800),
						)}`}
						alt="Nationwide Moving Guides For Anywhere in America SVL"
					/>
					<Image src={Arrow} alt="arrow-icon" />
				</div>
			</div>
		</section>
	);
};

export default SeoBenefits;
