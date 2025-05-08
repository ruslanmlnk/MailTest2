import Image from "next/image";
import { FC, useState } from "react";

import HomeIcon from "@/../public/images/blog/home-icon.svg";
import {
	IArticleComments,
	articleComments,
	categories,
} from "@/store/blogStore";
import style from "@/styles/css/blog/articles/articleComments.module.css";

interface IArticleCommentsProps {
	id: number;
}

const ArticleComments: FC<IArticleCommentsProps> = ({ id }) => {
	const articleCommentsData: IArticleComments | undefined =
		articleComments.find((item) => item.postId == id);

	const colors: string[] = [
		"#FFDC33",
		"#B32851",
		"#022027",
		"#997A8D",
		"#2A5C03",
		"#ACE1AF",
		"#FFD1DC",
	];

	const randomNumberInRange = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const [activeTag, setActiveTag] = useState<string>("");

	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.content}>
					<h2>
						Leave a review (
						{articleCommentsData ? articleCommentsData.comments.length : "0"})
					</h2>
					<p>
						Your email address will not be published. Required fields are marked
						*
					</p>
					<form action="">
						<div>
							<input type="text" name="username" placeholder="Name *" />
							<input type="email" name="email" placeholder="Email *" />
						</div>
						<textarea name="comment" placeholder="Comment *"></textarea>
						<input type="submit" value="Publish" />
					</form>
					<div className={style.comments}>
						{articleCommentsData
							? articleCommentsData.comments.map((item, index) => (
									<>
										<div className={style.comment} key={index}>
											<div
												className={style.avatar}
												style={{
													backgroundColor:
														colors[randomNumberInRange(0, colors.length - 1)],
												}}
											>
												<p>{item.username[0]}</p>
											</div>
											<div className={style.rightSide}>
												<div className={style.topBar}>
													<p className={style.username}>{item.username}</p>
													<p className={style.date}>
														{item.date.toLocaleDateString("en-us", {
															month: "numeric",
															day: "numeric",
															hour: "numeric",
															minute: "numeric",
														})}
													</p>
												</div>
												<p>{item.text}</p>
											</div>
										</div>

										{/* MOBILE LAYOUT OF COMMENT */}

										<div className={style.commentMobile}>
											<div className={style.user}>
												<div
													className={style.avatar}
													style={{
														backgroundColor:
															colors[randomNumberInRange(0, colors.length - 1)],
													}}
												>
													<p>{item.username[0]}</p>
												</div>
												<div className={style.username}>
													<p className={style.name}>{item.username}</p>
													<p className={style.date}>
														{item.date.toLocaleDateString("en-us", {
															month: "numeric",
															day: "numeric",
															hour: "numeric",
															minute: "numeric",
														})}
													</p>
												</div>
											</div>

											<div className={style.text}>
												<p>{item.text}</p>
											</div>
										</div>
									</>
								))
							: ""}
					</div>
				</div>
				<aside className={style.aside_content}>
					<div>
						<div className={style.subscribe}>
							<Image src={HomeIcon} alt="" />
							<h4>
								Subscribe <br /> to our Instagram
							</h4>
							<p>Follow our moving services, news, discounts. No spam</p>
							<button className="main">Subscribe</button>
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
};

export default ArticleComments;
