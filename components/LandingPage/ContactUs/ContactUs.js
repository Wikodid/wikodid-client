import { useState, useRef } from "react";
import Link from "next/link";

import styles from "@/components/LandingPage/ContactUs/ContactUs.module.css";

// Controllable inputs
const inputs = [
	{
		type: "text",
		name: "firstName",
		label: "Όνομα",
		placeholder: "John",
		required: "required",
	},
	{
		type: "text",
		name: "lastName",
		label: "Επώνυμο",
		placeholder: "Doe",
		required: "required",
	},
	{
		type: "email",
		name: "email",
		label: "Email",
		placeholder: "youremail@gmail.com",
		required: "required",
	},
	{
		type: "tel",
		name: "phoneNumber",
		label: "Αριθμός τηλεφώνου",
		placeholder: "+306926589122",
		required: "required",
	},
];

// Controllable inputs - English
const inputsEN = [
	{
		type: "text",
		name: "firstName",
		label: "First Name",
		placeholder: "John",
		required: "required",
	},
	{
		type: "text",
		name: "lastName",
		label: "Last Name",
		placeholder: "Doe",
		required: "required",
	},
	{
		type: "email",
		name: "email",
		label: "Email",
		placeholder: "youremail@gmail.com",
		required: "required",
	},
	{
		type: "tel",
		name: "phoneNumber",
		label: "Phone Number",
		placeholder: "+306926589122",
		required: "required",
	},
];

// Social Links
const socialLinks = [
	{
		url: "#",
		d: "M22.68 7.98004H25.5V3.21004C24.1346 3.06807 22.7627 2.99797 21.39 3.00004C17.31 3.00004 14.52 5.49004 14.52 10.05V13.98H9.91498V19.32H14.52V33H20.04V19.32H24.63L25.32 13.98H20.04V10.575C20.04 9.00005 20.46 7.98004 22.68 7.98004Z",
	},
	{
		url: "#",
		d: "M18 10.5C16.5166 10.5 15.0666 10.9399 13.8332 11.764C12.5999 12.5881 11.6386 13.7594 11.0709 15.1299C10.5032 16.5003 10.3547 18.0083 10.6441 19.4632C10.9335 20.918 11.6478 22.2544 12.6967 23.3033C13.7456 24.3522 15.082 25.0665 16.5368 25.3559C17.9917 25.6453 19.4997 25.4968 20.8701 24.9291C22.2406 24.3614 23.4119 23.4001 24.236 22.1668C25.0601 20.9334 25.5 19.4834 25.5 18C25.5 16.0109 24.7098 14.1032 23.3033 12.6967C21.8968 11.2902 19.9891 10.5 18 10.5ZM18 22.5C17.11 22.5 16.24 22.2361 15.4999 21.7416C14.7599 21.2471 14.1831 20.5443 13.8425 19.7221C13.5019 18.8998 13.4128 17.995 13.5865 17.1221C13.7601 16.2492 14.1887 15.4474 14.818 14.818C15.4474 14.1887 16.2492 13.7601 17.1221 13.5865C17.995 13.4128 18.8998 13.5019 19.7221 13.8425C20.5443 14.1831 21.2471 14.7599 21.7416 15.4999C22.2361 16.24 22.5 17.11 22.5 18C22.5 19.1935 22.0259 20.3381 21.182 21.182C20.3381 22.0259 19.1935 22.5 18 22.5ZM25.5 9C25.2033 9 24.9133 9.08797 24.6666 9.2528C24.42 9.41762 24.2277 9.65189 24.1142 9.92597C24.0006 10.2001 23.9709 10.5017 24.0288 10.7926C24.0867 11.0836 24.2296 11.3509 24.4393 11.5607C24.6491 11.7704 24.9164 11.9133 25.2074 11.9712C25.4983 12.0291 25.7999 11.9994 26.074 11.8858C26.3481 11.7723 26.5824 11.58 26.7472 11.3334C26.912 11.0867 27 10.7967 27 10.5C27 10.1022 26.842 9.72064 26.5607 9.43934C26.2794 9.15804 25.8978 9 25.5 9ZM32.91 12.36C32.8851 11.0781 32.6416 9.80992 32.19 8.61C31.7712 7.5181 31.1274 6.52649 30.3005 5.69955C29.4735 4.87261 28.4819 4.22882 27.39 3.81C26.1901 3.35835 24.9219 3.11485 23.64 3.09C22.185 3 21.705 3 18 3C14.295 3 13.815 3 12.36 3.09C11.0781 3.11485 9.80992 3.35835 8.61 3.81C7.5181 4.22882 6.52649 4.87261 5.69955 5.69955C4.87261 6.52649 4.22882 7.5181 3.81 8.61C3.35835 9.80992 3.11485 11.0781 3.09 12.36C3 13.83 3 14.31 3 18C3 21.69 3 22.17 3.09 23.64C3.11485 24.9219 3.35835 26.1901 3.81 27.39C4.22882 28.4819 4.87261 29.4735 5.69955 30.3005C6.52649 31.1274 7.5181 31.7712 8.61 32.19C9.80992 32.6416 11.0781 32.8851 12.36 32.91C13.86 32.91 14.295 33 18 33C21.705 33 22.185 33 23.64 32.91C24.9219 32.8851 26.1901 32.6416 27.39 32.19C28.4819 31.7712 29.4735 31.1274 30.3005 30.3005C31.1274 29.4735 31.7712 28.4819 32.19 27.39C32.6416 26.1901 32.8851 24.9219 32.91 23.64C32.91 22.14 33 21.69 33 18C33 14.31 33 13.83 32.91 12.36ZM29.91 23.505C29.8837 24.4569 29.7065 25.3986 29.385 26.295C29.1192 27.0035 28.699 27.644 28.155 28.17C27.6321 28.7143 26.9904 29.1301 26.28 29.385C25.3815 29.7197 24.4335 29.9022 23.475 29.925C22.065 29.925 21.63 30 17.985 30C14.34 30 13.92 30 12.51 30C11.553 29.9753 10.6061 29.7981 9.705 29.475C8.99649 29.2092 8.35601 28.789 7.83 28.245C7.28573 27.7221 6.86988 27.0804 6.615 26.37C6.28171 25.4763 6.09922 24.5335 6.075 23.58C6.075 22.08 6.075 21.705 6.075 18.075C6.075 14.445 6.075 14.01 6.075 12.57C6.10086 11.6118 6.28326 10.6643 6.615 9.765C6.87384 9.06095 7.2893 8.42493 7.83 7.905C8.35286 7.36073 8.99461 6.94488 9.705 6.69C10.6035 6.35534 11.5515 6.17284 12.51 6.15C13.92 6 14.355 6 18 6C21.645 6 22.08 6 23.49 6C24.4532 6.02449 25.4059 6.20692 26.31 6.54C27.0141 6.79884 27.6501 7.2143 28.17 7.755C28.7143 8.27786 29.1301 8.91961 29.385 9.63C29.7522 10.5428 29.9602 11.5119 30 12.495C30 13.995 30.075 14.37 30.075 18C30.075 21.63 30 22.065 30 23.505H29.91Z",
	},
	{
		url: "#",
		d: "M33 8.69983C31.8725 9.18897 30.6801 9.51232 29.46 9.65983C30.7473 8.89081 31.7119 7.681 32.175 6.25483C30.9653 6.97492 29.6411 7.48227 28.26 7.75483C27.3368 6.75368 26.1075 6.08727 24.7647 5.8601C23.422 5.63294 22.0418 5.85786 20.8407 6.49961C19.6396 7.14136 18.6854 8.16362 18.1279 9.40608C17.5703 10.6485 17.4409 12.0409 17.76 13.3648C15.3141 13.2411 12.9217 12.6043 10.738 11.4956C8.5543 10.387 6.62827 8.83137 5.085 6.92983C4.54371 7.87508 4.25928 8.94556 4.26 10.0348C4.25808 11.0464 4.50633 12.0428 4.98263 12.9352C5.45894 13.8276 6.14853 14.5884 6.99 15.1498C6.01197 15.1232 5.05483 14.8608 4.2 14.3848V14.4598C4.20733 15.8772 4.70399 17.2485 5.60597 18.3418C6.50795 19.4351 7.75988 20.1833 9.15 20.4598C8.61488 20.6227 8.05931 20.7085 7.5 20.7148C7.11284 20.7103 6.72663 20.6752 6.345 20.6098C6.74086 21.829 7.50693 22.8945 8.53661 23.6581C9.56629 24.4216 10.8084 24.8452 12.09 24.8698C9.9258 26.5727 7.25383 27.5021 4.5 27.5098C3.9986 27.5115 3.4976 27.4814 3 27.4198C5.81164 29.2352 9.08822 30.1989 12.435 30.1948C14.7445 30.2188 17.0357 29.7824 19.1747 28.9109C21.3136 28.0395 23.2575 26.7507 24.8928 25.1196C26.5281 23.4885 27.8219 21.5479 28.6988 19.4112C29.5757 17.2745 30.0181 14.9844 30 12.6748C30 12.4198 30 12.1498 30 11.8798C31.177 11.002 32.1922 9.92596 33 8.69983Z",
	},
];

// Quick Actions
const quickActions = [
	{
		content: "+30 698 647 9274",
		url: "tel:+306986479274",
		svg: {
			width: "36",
			height: "36",
			viewBox: "0 0 36 36",
			d: "M29.16 19.5C28.83 19.5 28.485 19.395 28.155 19.32C27.4868 19.1728 26.83 18.9773 26.19 18.735C25.4942 18.4819 24.7292 18.495 24.0425 18.772C23.3557 19.0489 22.7957 19.57 22.47 20.235L22.14 20.91C20.679 20.0973 19.3365 19.0879 18.15 17.91C16.9722 16.7236 15.9628 15.381 15.15 13.92L15.78 13.5C16.4451 13.1744 16.9662 12.6143 17.2431 11.9276C17.52 11.2408 17.5332 10.4759 17.28 9.78005C17.0419 9.13868 16.8464 8.48224 16.695 7.81505C16.62 7.48505 16.56 7.14005 16.515 6.79505C16.3329 5.73848 15.7795 4.78166 14.9545 4.09691C14.1295 3.41215 13.0871 3.04446 12.015 3.06005H7.51503C6.86858 3.05398 6.2284 3.18727 5.63809 3.45084C5.04778 3.71442 4.52119 4.10209 4.09417 4.58747C3.66716 5.07285 3.34973 5.64454 3.16351 6.26362C2.97729 6.8827 2.92665 7.53463 3.01503 8.17505C3.81414 14.4591 6.68407 20.2979 11.1715 24.769C15.6589 29.2401 21.5081 32.0888 27.795 32.865H28.365C29.4711 32.8667 30.5391 32.4608 31.365 31.725C31.8396 31.3006 32.2187 30.7803 32.4772 30.1985C32.7358 29.6167 32.868 28.9867 32.865 28.35V23.85C32.8467 22.8081 32.4672 21.8049 31.7915 21.0115C31.1158 20.2182 30.1858 19.684 29.16 19.5V19.5ZM29.91 28.5C29.9098 28.713 29.8641 28.9235 29.7762 29.1175C29.6883 29.3115 29.56 29.4845 29.4 29.625C29.2329 29.7706 29.037 29.8792 28.825 29.9438C28.6131 30.0084 28.3899 30.0276 28.17 30C22.5524 29.2798 17.3344 26.7098 13.3391 22.6955C9.34382 18.6812 6.79864 13.4511 6.10503 7.83005C6.08116 7.61032 6.10208 7.38804 6.16653 7.17663C6.23099 6.96522 6.33763 6.76908 6.48003 6.60005C6.62059 6.44004 6.79362 6.31181 6.9876 6.22387C7.18157 6.13594 7.39205 6.09032 7.60503 6.09005H12.105C12.4538 6.08228 12.7945 6.19637 13.0682 6.41265C13.342 6.62894 13.5318 6.9339 13.605 7.27505C13.665 7.68505 13.74 8.09005 13.83 8.49005C14.0033 9.28076 14.2339 10.0578 14.52 10.815L12.42 11.79C12.2405 11.8724 12.079 11.9895 11.9448 12.1344C11.8106 12.2794 11.7063 12.4495 11.638 12.6348C11.5697 12.8202 11.5387 13.0172 11.5468 13.2146C11.5549 13.412 11.6018 13.6059 11.685 13.785C13.8438 18.4092 17.5609 22.1262 22.185 24.285C22.5502 24.4351 22.9598 24.4351 23.325 24.285C23.5121 24.2181 23.684 24.1147 23.8308 23.9808C23.9776 23.8469 24.0963 23.6852 24.18 23.505L25.11 21.405C25.8855 21.6824 26.6769 21.9128 27.48 22.095C27.88 22.185 28.285 22.26 28.695 22.32C29.0362 22.3932 29.3411 22.583 29.5574 22.8568C29.7737 23.1306 29.8878 23.4712 29.88 23.82L29.91 28.5Z",
		},
	},
	{
		content: "info@wikodid.gr",
		url: "mailto:info@wikodid.gr",
		svg: {
			width: "30",
			height: "24",
			viewBox: "0 0 30 24",
			d: "M25.5 0H4.5C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5V19.5C0 20.6935 0.474106 21.8381 1.31802 22.682C2.16193 23.5259 3.30653 24 4.5 24H25.5C26.6935 24 27.8381 23.5259 28.682 22.682C29.5259 21.8381 30 20.6935 30 19.5V4.5C30 3.30653 29.5259 2.16193 28.682 1.31802C27.8381 0.474106 26.6935 0 25.5 0ZM24.885 3L16.065 11.82C15.9256 11.9606 15.7597 12.0722 15.5769 12.1483C15.3941 12.2245 15.198 12.2637 15 12.2637C14.802 12.2637 14.6059 12.2245 14.4231 12.1483C14.2403 12.0722 14.0744 11.9606 13.935 11.82L5.115 3H24.885ZM27 19.5C27 19.8978 26.842 20.2794 26.5607 20.5607C26.2794 20.842 25.8978 21 25.5 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V5.115L11.82 13.935C12.6638 14.7777 13.8075 15.251 15 15.251C16.1925 15.251 17.3362 14.7777 18.18 13.935L27 5.115V19.5Z",
		},
	},
];

const ContactUs = () => {
	/** Could be ommited if I turn form data into an array and check it directly */
	const [ready, setReady] = useState({
		firstName: false,
		lastName: false,
		email: false,
		phoneNumber: false,
	});

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		message: "",
	});

	const popup = useRef();
	const errorSpans = [];
	for (let i = 0; i < inputs.length; i++) errorSpans.push(useRef());

	// Form Handlers

	const handleSubmit = (e) => {
		e.preventDefault();

		// Checking Validity of all inputs
		const readyArray = Object.entries(ready);

		const invalidEntries = readyArray.filter((input) => {
			if (!input[1]) return input;
		});

		const success = !invalidEntries.length;

		// Display popup for invalid inputs
		if (!success) {
			popupConfig(
				success,
				"Υπήρξε κάποιο πρόβλημα με την αποστολή του μηνύματός σας... Παρακαλούμε δοκιμάστε πάλι σε λίγο"
				// "There was an error while submitting your form... Please wait and try again later"
			);
			return;
		}

		// Send email and update the success variable.
		// Then have a ternary expression to show the correct popup.
		popupConfig(success, "Επιτυχία! Το μήνυμα έχει σταλεί");
		// popupConfig(success, "Hooray! Your message has been sent successfully");

		// Clear the form
		e.target.reset();
	};

	const popupConfig = (success, message) => {
		popup.current.textContent = message;

		success
			? popup.current.classList.add(styles.success)
			: popup.current.classList.add(styles.fail);

		popup.current.classList.add(styles.visible);

		setTimeout(() => {
			popup.current.classList.remove(styles.visible);
			popup.current.classList.remove(styles.success);
			popup.current.classList.remove(styles.fail);
		}, 4000);
	};

	// Input Handlers

	const handleChange = (e) => {
		if (e.target.localName === "textarea") {
			setFormData((prevFormData) => {
				return { ...prevFormData, [e.target.name]: e.target.value };
			});
			return;
		}

		let valid = isValid(e.target, e.target.value);

		setReady((prevReady) => {
			return { ...prevReady, [e.target.name]: valid };
		});

		if (!valid) return;

		let index = findIndex(e.target.name);
		setErrorMessage(errorSpans[index].current, "");

		setFormData((prevFormData) => {
			return { ...prevFormData, [e.target.name]: e.target.value };
		});
	};

	const isValid = (input, value) => {
		let message;

		if (!validateRequired(value)) {
			message = "Το πεδίο αυτό είναι υποχρεωτικό";
			// message = "This field is required";

			let index = findIndex(input.name);

			setErrorMessage(errorSpans[index].current, message);

			return false;
		}

		switch (input.type) {
			case "text":
				if (!validateName(value)) {
					message = "Το πεδίο αυτό πρέπει να έχει τουλάχιστον 2 χαρακτήρες";
					// message = "This field must be at least two characters long";

					let index = findIndex(input.name);

					setErrorMessage(errorSpans[index].current, message);

					return false;
				}

				break;

			case "email":
				if (!validateEmail(value)) {
					message = "Η διεύθυνση email δεν είναι έγκυρη";
					// message = "This is not a valid email address";

					let index = findIndex(input.name);

					setErrorMessage(errorSpans[index].current, message);

					return false;
				}
				break;

			case "tel":
				if (!validatePhone(value)) {
					message = "Ο αριθμός τηλεφώνου δεν είναι έγκυρος";
					// message = "This is not a valid phone number";

					let index = findIndex(input.name);

					setErrorMessage(errorSpans[index].current, message);

					return false;
				}
				break;

			default:
				break;
		}

		return true;
	};

	// Validation Helper Functions

	const validateRequired = (value) => !!value;

	const validateName = (name) => {
		return name.length >= 2;
	};

	const validateEmail = (email) => {
		let re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	const validatePhone = (phone) => {
		let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		return re.test(phone);
	};

	// Error Span Finding Helper Function

	const findIndex = (name) => {
		let index;

		errorSpans.map((span, i) => {
			if (span.current.getAttribute("isfor") === name) index = i;
		});

		return index;
	};

	// Validation Error Handling Helper Function

	const setErrorMessage = (span, message) => (span.textContent = message);

	return (
		<>
			<section className={styles.contact} id='contact'>
				<div className={styles.left}>
					<div>
						<h1>Get in touch</h1>
						<p>
							Are you ready? Send us a message telling us which materials and
							style suit your business and let’s get started! Do you have a
							question instead? We are here to fill in any details, so make sure
							to reach out to us.
						</p>
					</div>

					<div className={styles.social}>
						{socialLinks.map((link, index) => (
							<Link key={index} href={link.url}>
								<a
									className={styles["social-icon"]}
									target='_blank'
									rel='noopener,noreferrer'>
									<svg
										width='36'
										height='36'
										viewBox='0 0 36 36'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path d={link.d} fill='white' />
									</svg>
								</a>
							</Link>
						))}
					</div>

					<div className={styles["quick-actions"]}>
						{quickActions.map((action) => (
							<Link key={action.content} href={action.url}>
								<a className={styles.action}>
									<svg
										width={action.svg.width}
										height={action.svg.height}
										viewBox={action.svg.viewBox}
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path d={action.svg.d} fill='white' />
									</svg>

									<p>{action.content}</p>
								</a>
							</Link>
						))}
					</div>
				</div>

				<div className={styles.right}>
					<form onSubmit={handleSubmit} className={styles.form}>
						<div className={styles["all-inputs"]}>
							{inputs.map((input, index) => (
								<div key={index} className={styles["input-container"]}>
									{input.required === "required" ? (
										<label htmlFor={input.name} className={styles.required}>
											{input.label}
										</label>
									) : (
										<label htmlFor={input.name}>{input.placeholder}</label>
									)}
									<input
										type={input.type}
										onChange={handleChange}
										name={input.name}
										isreq={input.required}
									/>
									<span
										className={styles.error}
										ref={errorSpans[index]}
										isfor={input.name}></span>
								</div>
							))}

							<div
								className={`${styles["input-container"]} ${styles.textarea}`}>
								<label htmlFor='message'>Μήνυμα</label>
								{/* <label htmlFor='message'>Message</label> */}
								<textarea
									onChange={handleChange}
									name='message'
									cols='10'
									rows='6'
								/>
							</div>
						</div>

						<button className={styles.submit}>Αποστολή</button>

						<p className={styles.small}>Συνήθως απαντούμε εντός μίας ημέρας</p>
					</form>
				</div>
			</section>

			<div className={styles.popup} ref={popup}>
				Επιτυχία! Το μήνυμα έχει σταλεί και θα επικοινωνήσουμε μαζί σας σε λίγο
			</div>
		</>
	);
};

export default ContactUs;
