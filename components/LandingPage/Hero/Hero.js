import Link from "next/link";
import styles from "@/components/LandingPage/Hero/Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.title}>Zero Waste Menus</h1>
			<p>
				Η Wikodid φέρνει την λύση στις επιχειρήσεις που θέλουν να παρουσιάζουν
				τα προϊόντα τους με εύκολα προσβάσιμο, covid-free και φιλικό προς το
				περιβάλλον τρόπο
			</p>

			<Link href='#about'>
				<a className={styles.button}>Μάθε περισσότερα</a>
			</Link>

			<div className={styles["img-container"]}>
				<img
					// src='/images/demos/hero-mockup.png'
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
