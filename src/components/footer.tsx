import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/../public/images/footer-logoR.svg";
import PostImage from "@/../public/images/footer-post-mobile.svg";
import ConsumerAffairs from "@/../public/images/social-icons/consumerAffairs.svg";
import Facebook from "@/../public/images/social-icons/facebookIcon-blue.png";
import Instagram from "@/../public/images/social-icons/instagram.svg";
import LinkedIn from "@/../public/images/social-icons/linkedInB.svg";
import Pinterest from "@/../public/images/social-icons/pinterestB.svg";
import Sitejabber from "@/../public/images/social-icons/sitejabber-blue.svg";
import ThumbTack from "@/../public/images/social-icons/thumbtackBlue.svg";
import Trustpilot from "@/../public/images/social-icons/trustpilotIcon-blue.png";
import X from "@/../public/images/social-icons/xBlue.svg";
import YellowPages from "@/../public/images/social-icons/ypBlue.svg";
import style from "@/styles/css/footer.module.css";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.background_2} />
			<div className={`block-container ${style.container}`}>
				<div className={style.top}>
					<div className={style.links}>
						<div>
							<p className={style.title}>Main</p>
							<Link href="/calculator-page">Calculator</Link>
							<Link href="/locations">Locations</Link>
							<Link href="/international">International</Link>
							<Link href="/about">About us</Link>
							<Link href="/blog">Blog</Link>
							<Link href="/contacts">Contact</Link>
							<Link href="/privacy-policy">Privacy & Terms</Link>
							<Link href="/sitemap">Sitemap</Link>
						</div>
						<div>
							<p className={style.title}>Services</p>
							<Link href="/long-distance-moving">Long distance moving</Link>
							<Link href="/local-moving">Local moving</Link>
							<Link href="/commercial-relocation">Commercial relocation</Link>
							<Link href="/special-move">Special moving</Link>
							<Link href="/storage">Storage</Link>
							<Link href="/packing-and-unpacking">Packing and unpacking</Link>
						</div>
					</div>
					<div className={style.form}>
						<p className={style.title}>Subscribe to Instagram</p>
						<p>Follow our moving services, news, discounts. No spam</p>
						<a
							target="_blank"
							href="https://www.instagram.com/starvanlinesllc/?igshid=YmMyMTA2M2Y="
						>
							<button className="add blue">Subscribe</button>
						</a>
						<Image src={PostImage} alt="footer-post-image" />
					</div>
					<div className={style.formMobile}>
						<p className={style.title}>Contact us</p>
						<p>Have a question? We're here to help.</p>
						<a href="/contacts">
							<button className="add blue">Contact us</button>
						</a>
					</div>
				</div>
				<div className={style.bottom}>
					<div className={style.leftSide}>
						<Link href="/">
							<Image src={Logo} alt="SVL-logo" />
						</Link>
						<div className={style.copyright}>
							<a>Copyright © 2025 STAR VAN LINES® All Rights Reserved</a>
							<span>Dot 4176875</span>
							<span> MC-1607491</span>
						</div>
					</div>
					<div className={style.socials}>
						<a target="_blank" href="https://pin.it/1aMoWu375">
							<Image src={Pinterest} alt="Pinterest-icon" />
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/company/star-van-lines/"
						>
							<Image src={LinkedIn} alt="linkedIn-icon" />
						</a>
						<a
							target="_blank"
							href="https://www.trustpilot.com/review/starvanlinesmovers.com"
						>
							<Image src={Trustpilot} alt="truspilot-icon" />
						</a>
						<a
							target="_blank"
							href="https://www.facebook.com/profile.php?id=100090237278801"
						>
							<Image src={Facebook} alt="facebook-icon" />
						</a>
						<a
							target="_blank"
							href="https://www.instagram.com/starvanlinesllc/?igshid=YmMyMTA2M2Y="
						>
							<Image src={Instagram} alt="instagram-icon" />
						</a>
						<a
							target="_blank"
							href="https://www.sitejabber.com/reviews/starvanlinesmovers.com"
						>
							<Image src={Sitejabber} alt="sitejabber-icon" />
						</a>
						<a
							target="_blank"
							href="https://www.yellowpages.com/los-angeles-ca/mip/star-van-lines-574543347"
						>
							<Image src={YellowPages} alt="yellowpages-icon" />
						</a>
						<a
							target="_blank"
							href="https://www.thumbtack.com/ca/los-angeles/long-distance-movers/star-van-lines/service/465942452744757269"
						>
							<Image src={ThumbTack} alt="thumbtack-icon" />
						</a>
						<a target="_blank" href="https://twitter.com/Star_Van_Lines">
							<Image src={X} alt="twitter-icon" />
						</a>
						<a
							target="_blank"
							href="https://www.consumeraffairs.com/movers/star-van-lines.html"
						>
							<Image src={ConsumerAffairs} alt="consumerAffairs-icon" />
						</a>
					</div>
					<div className={style.dotWrap}>
						<span className={style.dot}>Dot 4176875</span>
						<span className={style.dot}> MC-1607491</span>
					</div>
				</div>
				<div className={style.background_1} />
			</div>
		</footer>
	);
};

export default Footer;
