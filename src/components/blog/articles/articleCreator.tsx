import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import Facebook from "@/../public/images/blog/fb-icon.png";
import Instagram from "@/../public/images/blog/insta-icon.png";
import LinkedIn from "@/../public/images/blog/linkedin-icon.png";
import Telegram from "@/../public/images/blog/tg-icon.png";
import Twitter from "@/../public/images/blog/x-icon.png";
import { IUsers } from "@/store/usersStore";
import style from "@/styles/css/blog/articles/articleCreator.module.css";

interface IArticleCreator {
	user: IUsers;
}

const ArticleCreator: FC<IArticleCreator> = ({ user: articleCreator }) => {
	if (articleCreator == undefined) {
		return <p>unavailable content</p>;
	}

	const renderSocialImage = (name: string) => {
		switch (name) {
			case "x":
				return (
					<Image src={Twitter} width={40} height={40} alt="twitter-icon" />
				);
			case "telegram":
				return (
					<Image src={Telegram} width={40} height={40} alt="telegram-icon" />
				);
			case "facebook":
				return (
					<Image src={Facebook} width={40} height={40} alt="facebook-icon" />
				);
			case "instagram":
				return (
					<Image src={Instagram} width={40} height={40} alt="instagram-icon" />
				);
			case "linkedin":
				return (
					<Image src={LinkedIn} width={40} height={40} alt="linkedIn-icon" />
				);
			default:
				return null;
		}
	};

	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.image}>
					<Image
						src={articleCreator.avatar}
						alt={"article author avatar SVL"}
						fill
					/>
				</div>
				<div>
					<h2>{articleCreator.name}</h2>
					<p className={style.role}>{articleCreator.role}</p>
					<p className={style.description}>{articleCreator.description}</p>
					<div className={style.socials}>
						{articleCreator?.socials?.map((item: any, index: number) => (
							<Link
								href={
									!item.link?.includes("https")
										? `https://${item.link}`
										: item.link
								}
								key={index}
								target="_blank"
							>
								{renderSocialImage(item.socialNetwork)}
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ArticleCreator;
