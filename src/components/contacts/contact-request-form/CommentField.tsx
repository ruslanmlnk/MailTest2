import React from "react";

import { onInputActive } from "@/helpers/inputMask";
import formsStore from "@/store/formsStore";
import style from "@/styles/css/contacts/contactWrapperFields.module.css";

const CommentField = () => {
	return (
		<div className={style.field}>
			<label htmlFor="comment">Comment</label>
			<textarea
				name="comment"
				onInput={(e) => {
					formsStore.ContactRequestData.Comment = e.currentTarget.value;
				}}
				onFocus={(e) => onInputActive(e)}
				placeholder="Write your message here..."
				required
			/>
		</div>
	);
};

export default CommentField;
