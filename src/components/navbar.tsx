import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "react-toastify/dist/ReactToastify.css";

import EmailIconLarge from "@/../public/images/email-icon-lg.svg";
import EmailIcon from "@/../public/images/emailIcon-menu.png";
import GeoIcon from "@/../public/images/geoIcon-menu.png";
import Location from "@/../public/images/location.svg";
// assets
import Logo from "@/../public/images/logoR.svg";
import MenuArrow from "@/../public/images/menu-arrow.svg";
import PhoneIcon from "@/../public/images/phoneIcon-menu.png";
import Smartphone from "@/../public/images/smartphone.svg";
import BBB from "@/../public/images/social-icons/bbb.svg";
import ConsumerAffairs from "@/../public/images/social-icons/consumerAffairsOrange.svg";
import Facebook from "@/../public/images/social-icons/facebookIcon-orange.png";
import Instagram from "@/../public/images/social-icons/instagramIcon-orange.png";
import LinkedIn from "@/../public/images/social-icons/linkedIn.svg";
import Pinterest from "@/../public/images/social-icons/pinterest.svg";
import Sitejabber from "@/../public/images/social-icons/sitejabber.svg";
import ThumbTack from "@/../public/images/social-icons/thumbtack.svg";
import Trustpilot from "@/../public/images/social-icons/trustpilotIcon-orange.png";
import X from "@/../public/images/social-icons/x.svg";
import YellowPages from "@/../public/images/social-icons/yp.svg";
import { useMobile } from "@/lib/useMobile";
import popupsStore from "@/store/popupsStore";
import style from "@/styles/css/navbar.module.css";

// components
import GetAQuoteNavbarPopup from "./getAQuoteNavbarPopup";

const Navbar = () => {
	const [address, setAddress] = useState<any>({
		city: "Washington",
		region: "Columbia",
	});

	useEffect(() => {
		fetch("https://ipapi.co/json/")
			.then((response) => response.json())
			.then((data) => setAddress(data));
	}, []);

	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
	const [isWorkingHoursMenuOpened, setIsWorkingHoursMenuOpened] =
		useState<boolean>(false);
	const isMobile = useMobile();

	useEffect(() => {
		if (isMenuOpened && isMobile) {
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "auto";
			document.documentElement.style.paddingRight = "0px";
			document.querySelector("nav")!.style.paddingRight = "5.5vw";
		}
	});

	const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);

	const phoneRef = useRef<HTMLAnchorElement>(null);

	const handleCopyPhone = (phoneNumber: string) => {
		navigator.clipboard.writeText(phoneNumber);
		popupsStore.toastAlert("success", "Phone number copied", 3000);
	};

	return (
		<>
			<GetAQuoteNavbarPopup
				isOpened={isPopupOpened}
				setIsOpened={setIsPopupOpened}
				text={"Free consultation"}
				display={false}
			/>
			<nav className={style.nav}>
				<div className={style.nav_container}>
					<div className={style.left}>
						<Link href="/" onClick={() => setIsMenuOpened(false)}>
							<Image src={Logo} alt="SVL-logo" />
						</Link>
						<div>
							<div className={style.divider} />
							<div
								className={style.menu}
								onMouseEnter={() => setIsMenuOpened(true)}
								onMouseLeave={() => setIsMenuOpened(false)}
							>
								<p>Menu</p>
								<Image src={MenuArrow} alt="arrow-icon" />
							</div>
						</div>
					</div>
					<div className={style.right}>
						<div className={style.location}>
							<div className={style.locationMap}>
								<Image src={Location} alt="location-dot-icon" />

								<Link href="/locations">{`${address?.city}, ${address?.region}`}</Link>
							</div>

							<div>
								<Image
									className={style.emailIcon}
									src={EmailIconLarge}
									alt="email-icon"
								/>
								<a href="mailto:info@starvanlinesmovers.com">
									info@starvanlinesmovers.com
								</a>
							</div>
						</div>
						<div
							className={style.phone}
							onClick={() =>
								handleCopyPhone("+1 " + phoneRef.current?.textContent || "")
							}
						>
							<Image src={Smartphone} alt="phone-icon" />
							<a href="tel:8558222722" ref={phoneRef} suppressHydrationWarning>
								(855) 822-2722
							</a>
						</div>
						<div className={style.quote}>
							<button
								onClick={() => setIsPopupOpened(true)}
								className={style.quote_button}
							>
								Free quote
							</button>
						</div>
						<div
							className={`${style.burgerIcon} ${isMenuOpened && style.opened}`}
							onClick={() => setIsMenuOpened(isMenuOpened ? false : true)}
						>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>

				<div
					className={`${style.modal} ${isMenuOpened && style.opened}`}
					onMouseEnter={() => setIsMenuOpened(true)}
					onMouseLeave={() => setIsMenuOpened(false)}
				>
					<div>
						<div>
							<p className={style.title}>Main</p>
							<div className={style.links}>
								<Link
									href="/calculator-page"
									onClick={() => setIsMenuOpened(false)}
								>
									Calculator
								</Link>
								<Link href="/locations" onClick={() => setIsMenuOpened(false)}>
									Locations
								</Link>
								<Link href="/international" onClick={() => setIsMenuOpened(false)}>
									International
								</Link>
								<Link href="/about" onClick={() => setIsMenuOpened(false)}>
									About us
								</Link>
								<Link href="/blog" onClick={() => setIsMenuOpened(false)}>
									Blog
								</Link>
								<Link href="/contacts" onClick={() => setIsMenuOpened(false)}>
									Contact
								</Link>
								<Link href="/reviews" onClick={() => setIsMenuOpened(false)}>
									Reviews
								</Link>
							</div>
						</div>
						<div>
							<p className={style.title}>Services</p>
							<div className={style.links}>
								<Link
									href="/long-distance-moving"
									onClick={() => setIsMenuOpened(false)}
								>
									Long distance moving
								</Link>
								<Link
									href="/local-moving"
									onClick={() => setIsMenuOpened(false)}
								>
									Local moving
								</Link>
								<Link
									href="/commercial-relocation"
									onClick={() => setIsMenuOpened(false)}
								>
									Commercial relocation
								</Link>
								<Link
									href="/special-move"
									onClick={() => setIsMenuOpened(false)}
								>
									Special moving
								</Link>
								<Link href="/storage" onClick={() => setIsMenuOpened(false)}>
									Storage
								</Link>
								<Link
									href="/packing-and-unpacking"
									onClick={() => setIsMenuOpened(false)}
								>
									Packing and unpacking
								</Link>
							</div>
						</div>
						<div className={style.contactContainer}>
							<p className={style.title}>Contact</p>
							<div className={style.contact}>
								<div>
									<Image src={PhoneIcon} alt="phone-icon" />
									<a suppressHydrationWarning href="tel:8558222722">
										(855) 822-2722
									</a>
								</div>
								<div>
									<Image src={EmailIcon} alt="email-icon" />
									<a href="mailto:info@starvanlinesmovers.com">
										info@starvanlinesmovers.com
									</a>
								</div>
								{/* <div>
									<Image src={GeoIcon} alt="geoposition-icon" />
									<p>
										2101 E 51st St Vernon,
										<br /> CA 90058
									</p>
								</div> */}
								<div className={style.socials}>
									<a
										target="_blank"
										href="https://www.trustpilot.com/review/starvanlinesmovers.com"
									>
										<Image src={Trustpilot} alt="trustpilot-icon" />
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
										href="https://www.bbb.org/us/ca/vernon/profile/moving-services/star-van-lines-1216-1000025323"
									>
										<Image src={BBB} alt="bbb-icon" />
									</a>
									<a target="_blank" href="https://pin.it/1aMoWu375">
										<Image src={Pinterest} alt="pinterest-icon" />
									</a>
									<a
										target="_blank"
										href="https://www.linkedin.com/company/star-van-lines/"
									>
										<Image src={LinkedIn} alt="linkedIn-icon" />
									</a>
									<a
										target="_blank"
										href="https://www.consumeraffairs.com/movers/star-van-lines.html"
									>
										<Image src={ConsumerAffairs} alt="consumerAffairs-icon" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
