import Link from "next/link";
import styles from "@/components/LandingPage/Hero/Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.title}>Technology meets Practicality</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
				sapiente iusto.
			</p>

			<Link href='#'>
				<a className={styles.button}>Learn more</a>
			</Link>

			<div className={styles["img-container"]}>
				<img
					src='/images/demos/hero-mockup.png'
					alt='Mockup'
					className={styles.img}
				/>
			</div>
		</section>
	);
};

export default Hero;
