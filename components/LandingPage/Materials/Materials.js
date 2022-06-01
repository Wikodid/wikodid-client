import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import styles from "@/components/LandingPage/Materials/Materials.module.css";

// const materials = [
// 	{
// 		id: "wooden-cube",
// 		index: 0,
// 		details: {
// 			name: "Wooden Cube",
// 			price: "17.00",
// 		},
// 		texture: {
// 			src: "https://w7.pngwing.com/pngs/166/632/png-transparent-hardwood-wood-flooring-warm-wood-texture-background-texture-brown-wall-texture-thumbnail.png",
// 			alt: "Wood thumbnail",
// 		},
// 		assetImg: {
// 			src: "https://www.transparentpng.com/thumb/cube/AIm3i3-cube-png-picture.png",
// 			alt: "Wood Asset Image",
// 		},
// 	},
// 	{
// 		id: "wooden-plaque",
// 		index: 2,
// 		details: {
// 			name: "Wooden Plaque",
// 			price: "11.00",
// 		},
// 		texture: {
// 			src: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s117-ak-0199-01_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b0528c65cfdc381feee893efec9677f1",
// 			alt: "Wooden Plaque thumbnail",
// 		},
// 		assetImg: {
// 			src: "https://www.transparentpng.com/thumb/cube/AIm3i3-cube-png-picture.png",
// 			alt: "Wooden Plaque Asset Image",
// 		},
// 	},
// 	{
// 		id: "marble-plaque",
// 		index: 2,
// 		details: {
// 			name: "Marble Plaque",
// 			price: "13.00",
// 		},
// 		texture: {
// 			src: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s117-ak-0199-01_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b0528c65cfdc381feee893efec9677f1",
// 			alt: "Marble Plaque thumbnail",
// 		},
// 		assetImg: {
// 			src: "https://www.transparentpng.com/thumb/cube/AIm3i3-cube-png-picture.png",
// 			alt: "Marble Plaque Asset Image",
// 		},
// 	},
// 	{
// 		id: "plexiglass-cube",
// 		index: 1,
// 		details: {
// 			name: "Plexiglass Cube",
// 			price: "23.00",
// 		},
// 		texture: {
// 			src: "https://wallpapercave.com/wp/wp3269345.png",
// 			alt: "Plexiglass thumbnail",
// 		},
// 		assetImg: {
// 			src: "https://www.transparentpng.com/thumb/cube/AIm3i3-cube-png-picture.png",
// 			alt: "Plexiglass Asset Image",
// 		},
// 	},
// 	{
// 		id: "plexiglass-plaque",
// 		index: 2,
// 		details: {
// 			name: "Plexiglass Plaque",
// 			price: "13.00",
// 		},
// 		texture: {
// 			src: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s117-ak-0199-01_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b0528c65cfdc381feee893efec9677f1",
// 			alt: "Plexiglass Plaque thumbnail",
// 		},
// 		assetImg: {
// 			src: "https://www.transparentpng.com/thumb/cube/AIm3i3-cube-png-picture.png",
// 			alt: "Plexiglass Plaque Asset Image",
// 		},
// 	},
// ];

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
	const currentSwatch = useRef();
	const materialContainer = useRef();
	const materialCoordinates = [];

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
		const containerLeft = document
			.querySelector(`.${styles["materials-asset-container"]}`)
			.getBoundingClientRect().left;

		document
			.querySelectorAll(`.${styles["material-asset"]}`)
			.forEach(
				(material, index) =>
					(materialCoordinates[index] =
						material.getBoundingClientRect().left - containerLeft)
			);
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
