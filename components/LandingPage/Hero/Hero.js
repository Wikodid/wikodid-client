import Link from "next/link";
import styles from "@/components/LandingPage/Hero/Hero.module.css";

const menus = [
	{
		name: "Tuk Tuk",
		url: "https://wikodid.gr/tuktuk",
	},
	{
		name: "Hippy Hippo",
		url: "https://wikodid.gr/qr-menus/hippyhippo",
	},
	{
		name: "Συντριβάνι",
		url: "https://wikodid.gr/sintrivani",
	},
];

const Hero = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.title}>Zero Waste Digital Menus</h1>
			<p>
				Zero footprint ψηφιακά μενού με ξεχωριστό στυλ και απεριόριστες
				δυνατότητες
			</p>

			<div className={styles.dropdown}>
				<p> Δες τα μενού των πελατών μας </p>
				<ul>
					{menus.map((menu) => (
						<li key={menu.name}>
							<Link href={menu.url}>
								<a className={styles.menu} target='_blank'>
									{menu.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className={styles["img-container"]}>
				<img
					src='/images/hero/hero-banner.png'
					alt='Mockup'
					className={styles["img-mobile"]}
				/>
				<img
					src='/images/hero/hero-banner-transparent.png'
					alt='Mockup'
					className={styles["img-desktop"]}
				/>
			</div>
		</section>
	);
};

export default Hero;
