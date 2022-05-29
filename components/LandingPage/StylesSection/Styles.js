import { useRef } from "react";

import styles from "@/components/LandingPage/StylesSection/Styles.module.css";

const stylesList = [
	{
		id: "plain",
		title: "Plain",
		gif: {
			src: "/images/demos/plain-demo.png",
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
		gif: {
			src: "/images/demos/styled-demo.png",
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
		gif: {
			src: "/images/demos/detailed-demo.png",
			alt: "Detailed Demo",
		},
		previewImg: {
			src: "/images/demos/",
			alt: "Detailed Preview Image",
		},
		previewLink: "/qr-menus/tuktuk",
	},
];

const Styles = () => {
	const chosenSwatch = useRef();

	const previewImages = [];
	for (let i = 0; i < stylesList.length; i++) previewImages.push(useRef());

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
		<section className={styles.styles}>
			<div className={styles["preview-img-container"]}>
				<img
					src='/images/demos/styles-mockup.png'
					alt='Phone Mockup'
					className={styles.mockup}
				/>
				{stylesList.map((style, index) =>
					index === 0 ? (
						<img
							key={style.id}
							src={style.gif.src}
							alt={style.gif.alt}
							id={style.id}
							ref={previewImages[index]}
							className={styles.active}
						/>
					) : (
						<img
							key={style.id}
							src={style.gif.src}
							alt={style.gif.alt}
							id={style.id}
							ref={previewImages[index]}
							className=''
						/>
					)
				)}
			</div>

			<div className={styles.container}>
				<h1 className={styles.title}>Styles</h1>

				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					velit hic nesciunt.
				</p>

				<div className={styles["swatch-container"]}>
					{stylesList.map((style) =>
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

export default Styles;
