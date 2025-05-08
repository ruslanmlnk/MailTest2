import styles from "./ContactInfrormation.module.scss";

export const ContactInformation = () => {
	return (
		<section className={styles.calculator_contact_info}>
			<div className={styles.content_wrapper}>
				<h1>Enter your contact information</h1>
				<p>
					What email address and phone number can we use to report your request?
				</p>
				<form className={styles.form} action="#">
					<div>
						<input className={styles.form_input} type="text" name="user-name" />
						<label htmlFor="name">Your name</label>
					</div>
					<div>
						<input
							className={styles.form_input}
							type="phone"
							name="user-phone"
						/>
						<label htmlFor="phone">Phone</label>
					</div>
					<div>
						<input
							className={styles.form_input}
							type="email"
							name="user-email"
						/>
						<label htmlFor="email">Email</label>
					</div>
				</form>
			</div>
		</section>
	);
};
