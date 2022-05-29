import styles from "@/components/LandingPage/AboutUs/AboutUs.module.css";

const AboutUs = () => {
	return (
		<section className={styles.about} id='about'>
			<div className={styles.text}>
				<h1>What is Wikodid?</h1>

				<p>
					It is a new way of approaching a business’s appearance, reach and
					management. It is now possible for businesses to utilize technology
					and the help of the digital medium to present their catalogues and be
					more accessible.
				</p>
				<p>
					It is a new way of approaching a business’s appearance, reach and
					management. It is now possible for businesses to utilize technology
					and the help of the digital medium to present their catalogues and be
					more accessible.
				</p>
				<p>
					It is a new way of approaching a business’s appearance, reach and
					management.
				</p>
			</div>

			<div className={styles["animation-container"]}>
				<video
					src='/videos/demo-video.mp4'
					autoPlay
					loop
					muted
					className={styles.animation}></video>
			</div>
		</section>
	);
};

export default AboutUs;
