import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import styles from "@/components/LandingPage/Materials/Materials.module.css";

const materials = [
	{
		id: "wooden-cube",
		index: 0,
		details: {
			name: "Wooden Cube",
			price: "17.00",
		},
		texture: {
			src: "/images/materials/textures/wood-cube.jpg",
			alt: "Wooden Cube thumbnail",
		},
		assetImg: {
			src: "/images/materials/wooden-cube.png",
			alt: "Wooden Cube Asset Image",
		},
	},
	{
		id: "wooden-plaque",
		index: 2,
		details: {
			name: "Wooden Plaque",
			price: "11.00",
		},
		texture: {
			src: "/images/materials/textures/wood-plaque.jpg",
			alt: "Wooden Plaque thumbnail",
		},
		assetImg: {
			src: "/images/materials/wooden-plaque.png",
			alt: "Wooden Plaque Asset Image",
		},
	},
	{
		id: "white-marble-plaque",
		index: 2,
		details: {
			name: "White Marble Plaque",
			price: "13.00",
		},
		texture: {
			src: "/images/materials/textures/marble-white.jfif",
			alt: "White Marble Plaque thumbnail",
		},
		assetImg: {
			src: "/images/materials/marble-white-plaque.png",
			alt: "White Marble Plaque Asset Image",
		},
	},
	{
		id: "black-marble-plaque",
		index: 2,
		details: {
			name: "Black Marble Plaque",
			price: "13.00",
		},
		texture: {
			src: "/images/materials/textures/marble-black.jfif",
			alt: "Black Marble Plaque thumbnail",
		},
		assetImg: {
			src: "/images/materials/marble-black-plaque.png",
			alt: "Black Marble Plaque Asset Image",
		},
	},
	{
		id: "plexiglass-cube",
		index: 1,
		details: {
			name: "Coloured Plexiglass Cube",
			price: "23.00",
		},
		texture: {
			src: "/images/materials/textures/plexiglass-cube.png",
			alt: "Plexiglass Cube thumbnail",
		},
		assetImg: {
			src: "/images/materials/plexiglass-cube.png",
			alt: "Plexiglass Cube Asset Image",
		},
	},
	// {
	// 	id: "plexiglass-plaque",
	// 	index: 2,
	// 	details: {
	// 		name: "Plexiglass Plaque",
	// 		price: "13.00",
	// 	},
	// 	texture: {
	// 		src: "/images/materials/textures/plexiglass-plaque.png",
	// 		alt: "Plexiglass Plaque thumbnail",
	// 	},
	// 	assetImg: {
	// 		src: "/images/materials/plexiglass-plaque.png",
	// 		alt: "Plexiglass Plaque Asset Image",
	// 	},
	// },
];

const Materials = () => {
	const [materialCoordinates, setMaterialCoordinates] = useState([]);

	const currentSwatch = useRef();
	const materialContainer = useRef();

	const handleClick = (e) => {
		if (currentSwatch.current === e.target) return;

		currentSwatch.current.classList.toggle(styles.active);

		currentSwatch.current = e.target;
		currentSwatch.current.classList.toggle(styles.active);

		let index = findMaterialAsset(currentSwatch.current.getAttribute("swatch"));

		gsap.to(`.${styles["material-asset"]}`, {
			x: `-${materialCoordinates[index]}px`,
			duration: 1,
			ease: "back.out(1)",
		});
	};

	const findMaterialAsset = (swatch) => {
		for (let i = 0; i < materials.length; i++) {
			if (materials[i].id === swatch) return i;
		}
	};

	useEffect(() => {
		let containerLeft = document
			.querySelector(`.${styles["materials-asset-container"]}`)
			.getBoundingClientRect().left;

		const tempMaterials = [];

		document
			.querySelectorAll(`.${styles["material-asset"]}`)
			.forEach(
				(material, index) =>
					(tempMaterials[index] =
						material.getBoundingClientRect().left - containerLeft)
			);

		setMaterialCoordinates(tempMaterials);
	}, []);

	return (
		<section className={styles.materials} id='services'>
			<div className={styles.content}>
				<h1 className={styles.title}>Materials</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
					sapiente iusto.
				</p>

				<div className={styles["material-swatches"]}>
					{materials.map((material, index) => (
						<div key={material.id} className={styles.swatch}>
							{index === 0 ? (
								<img
									src={material.texture.src}
									alt={material.texture.alt}
									title={material.details.name}
									swatch={material.id}
									ref={currentSwatch}
									onClick={handleClick}
									className={styles.active}
								/>
							) : (
								<img
									src={material.texture.src}
									alt={material.texture.alt}
									title={material.details.name}
									swatch={material.id}
									onClick={handleClick}
									className=''
								/>
							)}
						</div>
					))}
				</div>
			</div>

			<div className={styles["materials-container"]}>
				<div
					className={styles["materials-asset-container"]}
					ref={materialContainer}>
					{materials.map((material) => (
						<article
							key={material.id}
							id={material.id}
							className={styles["material-asset"]}>
							<img
								src={material.assetImg.src}
								alt={material.assetImg.alt}
								className={styles["material-asset-img"]}
							/>

							<div className={styles["material-asset-description"]}>
								<p className={styles["material-asset-name"]}>
									{material.details.name}
								</p>
								<p className={styles["material-asset-price"]}>
									{material.details.price}€ / piece
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Materials;
