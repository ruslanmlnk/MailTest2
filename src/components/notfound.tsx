import Image from "next/image";
import Link from "next/link";

import Image404 from "../../public/images/404.webp";
import Arrow from "../../public/images/mainPage/button-arrow.svg";
import style from "../styles/css/404.module.css";

const Notfound = () => {
	return (
		<section className={style.section}>
			<div className={style.text}>
				<h1>
					Oops! There <br /> is no such page
				</h1>
				<p>It was deleted or did not exist on the site at all</p>
				<Link href={"/"}>
					<button className="main">
						Go back home <Image src={Arrow} alt="arrow-icon" />
					</button>
				</Link>
			</div>
			<div className={style.image}>
				<Image src={Image404} alt="Oops! There is no such page - image" />
			</div>
		</section>
	);
};

export default Notfound;
