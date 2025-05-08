import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useMobile } from "@/lib/useMobile";
import style from "@/styles/css/blog/textBlog.module.css";

import TextBlogImage from "../../../public/images/blog/textblog.svg";
import ButtonArrow from "../../../public/images/mainPage/button-arrow.svg";

const TextBlog = () => {
	const [showAdditionalText, setShowAdditionalText] = useState(false);

	const isMobile = useMobile();

	const handleSeeAllClick = () => {
		setShowAdditionalText(!showAdditionalText);
	};

	return (
		<section>
			<div className="block-container">
				<div className={style.blog}>
					<Image src={TextBlogImage} alt="" className={style.image} />
					<div className={style.textBlog}>
						<h2>Welcome to the Star Van Lines blog</h2>
						<h4>
							{isMobile &&
								"Star Van Lines blog — your go-to resource for all things related to moving and storage."}
						</h4>
						{(isMobile && showAdditionalText) || !isMobile ? (
							<>
								{!isMobile && (
									<h4>
										Star Van Lines blog — your go-to resource for all things
										related to moving and storage.
										<br />
										<br />
									</h4>
								)}
								{isMobile && (
									<>
										<br />
										<br />
									</>
								)}
								<h4>
									Our primary mission is to ensure that your moves are fast,
									convenient, and, above all, safe. We understand that the
									process of relocating can be overwhelming, which is why we're
									here to assist you every step of the way. Our blog is designed
									to provide you with valuable information and answers to the
									questions you may have about moving.
									<br />
									<br />
									Whether you're seeking advice on packing tips, finding the
									right moving company, or understanding storage options, our
									articles are tailored to address your concerns and help you
									make informed decisions. Trust us to be your reliable source
									of guidance as you embark on your relocation journey.
								</h4>
							</>
						) : null}

						{isMobile ? (
							<button
								className={`main ${style.button}`}
								onClick={handleSeeAllClick}
							>
								{showAdditionalText ? "Read Less" : "Read More"}
								<Image src={ButtonArrow} alt="" />
							</button>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextBlog;
