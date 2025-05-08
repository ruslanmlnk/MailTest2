import { observer } from "mobx-react-lite";
import Image from "next/image";

import Arrow from "@/../public/images/mainPage/button-arrow.svg";
import Phone from "@/../public/images/mainPage/present/phone.webp";
import formsStore from "@/store/formsStore";
import style from "@/styles/css/mainPage/present.module.css";

const Present = () => {
	return (
		<section id="checklist" className={style.section}>
			<div className={`block-container ${style.container}`}>
				<p className={style.title}>present</p>
				<h2>
					<span>Checklist: 10</span> steps <br />
					to Perfect Packing
				</h2>
				<p>
					We have prepared a checklist, how to pack your things with care and
					quality. Download the checklist - write your phone number on which to
					send you a link to download
				</p>
				<form
					onSubmit={(e) => {
						formsStore.sendQuote(
							"https://api.starvanlinesmovers.com/Checklist/Send",
							formsStore.ChecklistData,
							"checklistForm",
							e,
						);
					}}
					id="checklistForm"
					className={style.input}
				>
					<div>
						<label htmlFor="checklistEmail">Your email</label>
						<input
							required
							type="phone"
							name="checklistEmail"
							id="checklistEmail"
							placeholder="example@email.com"
							onChange={(e) => {
								formsStore.ChecklistData.EmailAddress = e.currentTarget.value;
							}}
						/>
					</div>
					<button
						className={`${style.main} main ${
							formsStore.loadingRequest && "loading"
						}`}
					>
						{formsStore.loadingRequest ? (
							<p>Please wait...</p>
						) : (
							<>
								Download <Image src={Arrow} alt="download arrow" />
							</>
						)}
					</button>
				</form>
			</div>
			<Image className={style.phone} src={Phone} alt="phone image icon" />
		</section>
	);
};

export default observer(Present);
