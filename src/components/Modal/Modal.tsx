"use client";

import React from "react";

import * as Dialog from "@radix-ui/react-dialog";

import styles from "./Modal.module.scss";
import { Form, StarsRating } from "./components";
import { BtnIcon, CloseCross } from "./components/Icons";

3;

export const Modal = () => {
	const [open, setOpen] = React.useState(false);

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className={styles.reviewBtn}>
					{"Leave a review"}
					<BtnIcon />
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.DialogOverlay} />
				<Dialog.Content className={styles.DialogContent}>
					<div className={styles.content}>
						<Form closeModal={closeModal} />
					</div>

					<Dialog.Close asChild>
						<button className={styles["IconButton"]} aria-label="Close">
							<CloseCross />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
