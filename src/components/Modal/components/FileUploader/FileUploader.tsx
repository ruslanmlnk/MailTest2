import clsx from "clsx";
import React from "react";
import { toast } from "react-toastify";

import { handleFileInput } from "../../types";
import { FileIcon, UploadIcon } from "../Icons";
import styles from "./FileUploader.module.scss";

interface FileUploaderProps {
	handleChange: handleFileInput;
	loading: boolean;
}

export const FileUploader = ({ handleChange, loading }: FileUploaderProps) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [file, setFile] = React.useState<File | null>(null);
	const [dragActive, setDragActive] = React.useState(false);

	const handleClick = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleDrag = function (e: React.DragEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			let file = e.target.files[0];

			if (!file.type.startsWith("image") && !file.type.startsWith("video")) {
				toast.error("Invalid file format", { position: "bottom-right" });
				return;
			}
			setFile(file);
			handleChange(file);
		}
	};

	const handleDrop = function (e: React.DragEvent<HTMLButtonElement>) {
		e.preventDefault();

		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			let file = e.dataTransfer.files[0];
			if (!file.type.startsWith("image") && !file.type.startsWith("video")) {
				toast.error("Invalid file format", { position: "bottom-right" });
				return;
			}
			if (inputRef.current) {
				inputRef.current.files = e.dataTransfer.files;
			}
			setFile(file);
			handleChange(file);
		}
	};

	return (
		<button
			type="button"
			disabled={loading}
			onClick={handleClick}
			className={clsx(
				styles.fileInptWrapper,
				file || dragActive ? styles.uploaded : "",
			)}
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDragOver={handleDrag}
			onDrop={handleDrop}
		>
			<div className={styles.placeholder}>
				{!file ? (
					<>
						<FileIcon />
						{"Drop here"}
					</>
				) : (
					<>
						<UploadIcon />
						{file.name}
					</>
				)}
			</div>
			<input
				onChange={handleInput}
				className={styles.fileInput}
				ref={inputRef}
				type="file"
				required
			/>
		</button>
	);
};
