import { observer } from "mobx-react-lite";
import Image from "next/image";

import CompletedIcon from "@/../public/images/completed-icon.svg";
import popupsStore from "@/store/popupsStore";
import style from "@/styles/css/requestCompletePopup.module.css";

const RequestCompletePopup = () => {
	return (
		<div
			className={`${style.popup} ${
				popupsStore.requestCompletePopup && style.opened
			}`}
		>
			<div className={style.content} onClick={(e) => e.stopPropagation()}>
				<Image src={CompletedIcon} alt="" />
				<p className={style.title}>Thank you for your feedback!</p>
				<p>We will contact you shortly</p>
				<button
					className="main"
					onClick={() => (popupsStore.requestCompletePopup = false)}
				>
					Okay
				</button>
			</div>
		</div>
	);
};

export default observer(RequestCompletePopup);
