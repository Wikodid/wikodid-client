import styles from "@/components/LandingPage/AboutUs/AboutUs.module.css";

const AboutUs = () => {
	return (
		<section className={styles.about} id='about'>
			<div className={styles.text}>
				<h1>Τι είναι η wikodid;</h1>

				<p>
					Wikodid ονομάζεται ο ηλεκτρονικός κατάλογος μηδενικού ρύπου προς το
					περιβάλλον που κάθε καφετέρια, εστιατόριο, beach bar ή ξενοδοχείο
					χρειάζεται.
				</p>
				<p>
					Με την μορφή QR κωδικού σε κύβους από plexiglass ή ξύλο, μαρμάρινα
					πλακίδια και αυτοκόλλητα ποικίλων διαστάσεων, τα μενού wikodid
					αποτελούν τον πλέον αυτοβιώσιμο, covid-free και φιλικό προς το
					περιβάλλον τρόπο για την παρουσίαση της εταιρίας σου και των προϊόντων
					της.
				</p>
			</div>

			<div className={styles["animation-container"]}>
				<img
					src='/images/about/about-us-img.svg'
					alt='Workflow Illustration'
					className={styles.animation}
				/>

				{/* <video
					src='/videos/demo-video.mp4'
					autoPlay
					loop
					muted
					className={styles.animation}></video>
				 */}
			</div>
		</section>
	);
};

export default AboutUs;
