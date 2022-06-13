import { useRef } from "react";

import styles from "@/components/LandingPage/Themes/Themes.module.css";

const themesList = [
	{
		id: "plain",
		title: "Plain",
		webp: {
			src: "/images/demos/plain-demo.webp",
			alt: "Plain Demo",
		},
		previewImg: {
			src: "/images/demos/",
			alt: "Plain Preview Image",
		},
		previewLink: "/qr-menus/artemis",
	},
	{
		id: "styled",
		title: "Styled",
		webp: {
			src: "/images/demos/styled-demo.webp",
			alt: "Styled Demo",
		},
		previewImg: {
			src: "/images/demos/",
			alt: "Styled Preview Image",
		},
		previewLink: "/qr-menus/plomari",
	},
	{
		id: "detailed",
		title: "Detailed",
		webp: {
			src: "/images/demos/detailed-demo.webp",
			alt: "Detailed Demo",
		},
		previewImg: {
			src: "/images/demos/",
			alt: "Detailed Preview Image",
		},
		previewLink: "/qr-menus/tuktuk",
	},
];

const Themes = () => {
	const chosenSwatch = useRef();

	const previewImages = [];
	for (let i = 0; i < themesList.length; i++) previewImages.push(useRef());

	const handleClick = (e) => {
		if (chosenSwatch.current === e.target) return;

		chosenSwatch.current.classList.toggle(styles.chosen);

		chosenSwatch.current = e.target;
		chosenSwatch.current.classList.toggle(styles.chosen);

		let swatchAttr = chosenSwatch.current.getAttribute("swatch");

		previewImages.map((image) => {
			image?.current.getAttribute("id") === swatchAttr
				? image?.current.classList.add(styles.active)
				: image?.current.classList.remove(styles.active);
		});
	};

	return (
		<section className={styles.themes} id='themes'>
			<div className={styles["preview-img-container"]}>
				<img
					src='/images/demos/style-mockup.png'
					alt='Phone Mockup'
					className={styles.mockup}
				/>

				<div className={styles["preview-wrapper"]}>
					{themesList.map((theme, index) => (
						<img
							key={theme.id}
							src={theme.webp.src}
							ref={previewImages[index]}
							className={index === 0 ? styles.active : ""}
							alt={theme.webp.alt}
							id={theme.id}
						/>
					))}
				</div>
			</div>

			<div className={styles.container}>
				<h1 className={styles.title}>Προσαρμοσμένα στο γούστο σας</h1>

				<p className={styles.description}>
					Το στυλ και ο χαρακτήρας της επιχείρησής σας προσαρμοσμένα μέσα στον
					ηλεκτρονικό σας κατάλογο!
				</p>

				{/* <p className={styles.description}>
					Αν προτιμάτε μινιμαλιστικό look χωρίς πολλά πολλά, το Plain είναι το
					κατάλληλο theme για εσάς.
				</p>

				<p className={styles.description}>
					Για πιο στυλάτη εμφάνιση, το Styled σας δίνει την δυνατότητα να
					ενσωματώσετε μία φωτογραφία της επιλογής σας στο background του
					καταλόγου σας.
				</p>

				<p className={styles.description}>
					Και αν πάλι νομίζετε πως τίποτα από τα παραπάνω δεν είναι αρκετό, με
					το Detailed μπορείτε να ενσωματώσετε μία διαφορετική εικόνα για κάθε
					κατηγορία του καταλόγου σας!
				</p> */}

				<div className={styles["swatch-container"]}>
					{themesList.map((style) =>
						style.title === "Plain" ? (
							<div
								key={style.title}
								ref={chosenSwatch}
								className={`${styles.swatch} ${styles.chosen}`}
								onClick={handleClick}
								swatch={style.id}>
								<p>{style.title}</p>
							</div>
						) : (
							<div
								key={style.title}
								className={styles.swatch}
								onClick={handleClick}
								swatch={style.id}>
								<p>{style.title}</p>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Themes;
