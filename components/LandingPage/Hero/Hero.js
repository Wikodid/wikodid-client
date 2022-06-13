import Link from "next/link";
import styles from "@/components/LandingPage/Hero/Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.title}>Zero Waste Digital Menus</h1>
			<p>
				Zero footprint ψηφιακά μενού με ξεχωριστό στυλ και απεριόριστες
				δυνατότητες
			</p>

			<Link href='#about'>
				<a className={styles.button}>Μάθετε περισσότερα</a>
			</Link>

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
