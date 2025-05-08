import Image from "next/image";
import React from "react";

import ButtonArrow from "@/../public/images/mainPage/button-arrow.svg";
import formsStore from "@/store/formsStore";
import style from "@/styles/css/contacts/contactWrapperFields.module.css";

const SubmitButton = () => {
	return (
		<button
			type="submit"
			className={`main ${formsStore.loadingRequest && "loading"} ${style.submitButton}`}
		>
			{formsStore.loadingRequest ? (
				<p>Please wait...</p>
			) : (
				<>
					Send message <Image src={ButtonArrow} alt="arrow-icon" />
				</>
			)}
		</button>
	);
};

export default SubmitButton;
