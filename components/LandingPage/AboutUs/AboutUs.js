import styles from "@/components/LandingPage/AboutUs/AboutUs.module.css";

const values = [
	{
		name: "Paper-free",
		img: "/images/about/values/paper-free.svg",
		description: "Δεν χρειαζόμαστε χαρτί - το ίδιο κι εσύ!",
	},
	{
		name: "Speed",
		img: "/images/about/values/speed.svg",
		description: "Εκτιμούμε τον χρόνο σου, είμαστε γρήγοροι",
	},
	{
		name: "Details Matter",
		img: "/images/about/values/details.svg",
		description: "Δίνουμε σημασία στην κάθε λεπτομέρεια",
	},
	{
		name: "Support",
		img: "/images/about/values/support.svg",
		description: "Σε στηρίζουμε",
	},
];

const AboutUs = () => {
	return (
		<section className={styles.about} id='about'>
			<div className={styles.text}>
				<h1>QR code ή NFC κατάλογος</h1>

				<p>
					Απαλλαγή από τα κόστη των έντυπων καταλόγων τώρα! <br />
					Αλλαγές στα μενού σας χωρίς κόστη επανεκτύπωσης
				</p>
				{/* <p>
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
				</p> */}
			</div>

			<div className={styles["values-container"]}>
				{values.map((value) => (
					<div className={styles.value} key={value.name}>
						<img src={value.img} alt={value.name} />
						<div className={styles.text}>
							<h2>{value.name}</h2>
							<p>{value.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default AboutUs;
