import clsx from "clsx";
import Image from "next/image";
import React from "react";

import pointA from "../../../../../public/images/mainPage/serviceMap/pointA-icon.svg";
import pointB from "../../../../../public/images/mainPage/serviceMap/pointB-icon.svg";
import usePostReview from "../../Hooks/usePostReview";
import { FormProps, Review, handleFileInput, handleInput } from "../../types";
import { onError, onSuccess } from "../../utils";
import { FileUploader } from "../FileUploader/FileUploader";
import { BtnIcon } from "../Icons";
import { StarsRating } from "../StarsRating/StarsRating";
import styles from "./Form.module.scss";

const initialState: Review = {
	from: "",
	to: "",
	name: "",
	starsRating: 5,
	fileUrl: "",
	commentBody: "",
};

export const Form = ({ closeModal }: FormProps) => {
	const [review, setReview] = React.useState<Review>(initialState);
	const { postReview, loading } = usePostReview();

	const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await postReview(review, onSuccess(closeModal), onError);
	};

	const handleInput: handleInput = (e, inptType) => {
		switch (inptType) {
			case "name":
				setReview((old) => ({ ...old, name: e.target.value }));
				break;
			case "from":
				setReview((old) => ({ ...old, from: e.target.value }));
				break;
			case "to":
				setReview((old) => ({ ...old, to: e.target.value }));
				break;
			case "comment":
				setReview((old) => ({ ...old, commentBody: e.target.value }));
				break;
		}
	};

	const handleInputFile: handleFileInput = (file) => {
		setReview((old) => ({ ...old, fileUrl: file }));
	};

	const handleRating = (rate: number) => {
		setReview((old) => ({ ...old, starsRating: rate }));
	};

	return (
		<form onSubmit={handlePostSubmit} action="" className={styles.form}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<div className={styles.modalHead}>
						<h3 className={styles.DialogTitle}>{"Leave a review"}</h3>
						<StarsRating handleRating={handleRating} />
					</div>

					<div className={clsx(styles.inptWrapp, styles.name)}>
						<label htmlFor="">Your full name</label>
						<input
							disabled={loading}
							onChange={(e) => handleInput(e, "name")}
							required
							type="text"
							placeholder="Mr. Smith"
							minLength={6}
						/>
					</div>

					<div className={styles.topForm}>
						<div className={styles.inptWrapp}>
							<label htmlFor="">Landing adress</label>
							<input
								disabled={loading}
								onChange={(e) => handleInput(e, "from")}
								required
								pattern="[0-9]+"
								maxLength={5}
								type="text"
								placeholder="Enter the ZIP code"
							/>
							<Image className={styles.icon} src={pointA} alt={"pointA-icon"} />
						</div>
						<div className={styles.inptWrapp}>
							<label htmlFor="">Wheare are we going?</label>
							<input
								disabled={loading}
								required
								pattern="[0-9]+"
								maxLength={5}
								onChange={(e) => handleInput(e, "to")}
								type="text"
								placeholder="Enter the ZIP code"
							/>
							<Image className={styles.icon} src={pointB} alt={"pointA-icon"} />
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.inptWrapp}>
						<label htmlFor="">Attach a photo or video</label>
						<FileUploader loading={loading} handleChange={handleInputFile} />
					</div>

					<div className={styles.bottomForm}>
						<div className={styles.inptWrapp}>
							<label htmlFor="">Review comment</label>
							<textarea
								required
								disabled={loading}
								onChange={(e) => handleInput(e, "comment")}
								name=""
								id=""
								minLength={15}
								placeholder="Write your honest review about the company..."
							></textarea>
						</div>
					</div>
				</div>
			</div>

			<button
				disabled={loading}
				type="submit"
				className={clsx(
					styles.reviewBtn,
					styles.full,
					loading ? styles.disabled : "",
				)}
			>
				{loading ? "Loading..." : "Post a review"}
				{loading ? null : <BtnIcon />}
			</button>
		</form>
	);
};
