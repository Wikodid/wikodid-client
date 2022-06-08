import Accordion from "@/components/Accordion/Accordion";

import styles from "@/components/LandingPage/HowItWorks/HowItWorks.module.css";

const steps = [
	{
		title: "Διάλεξε υλικά",
		details:
			"Διάλεξε το πού θα εκτυπωθεί το QR σου. Ξύλο, plexiglass ή μάρμαρο; Κύβος ή πλακίδιο; Η επιλογή είναι δική σου!",
	},
	{
		title: "Διάλεξε πακέτο",
		details: "Βρες το πακέτο που σου ταιριάζει και άσε τα υπόλοιπα επάνω μας!",
	},
	{
		title: "Στείλε μας τον κατάλογο",
		details:
			"Προώθησέ μας τον κατάλογο με τα προϊόντα της επιχείρισής σου σε μορφή pdf, png ή jpg και εμείς θα φροντίσουμε ο ηλεκτρονικός σου κατάλογος να είναι διαθέσιμος όσο το δυνατόν γρηγορότερα!",
	},
];

const HowItWorks = () => {
	return (
		<section className={styles["how-it-works"]}>
			<div className={styles.container}>
				<h1>Πώς ξεκινάω;</h1>
				<p className={styles.text}>
					{/* Γνωρίζουμε πως κάθε δευτερόλεπτο έχει αξία για την επιχείρισή σου.
					Γι’αυτό μπορείς να λάβεις τον ηλεκτρονικό σου κατάλογο ακολουθώντας
					μόνο τρία απλά βήματα. */}
					Οι χάρτινοι ή πλαστικοί μη φιλικοί προς το περιβάλλον κατάλογοι
					ανήκουν στο παρελθόν! Έλα σε επαφή με την ομάδα μας για να
					δημιουργήσουμε μαζί καταλόγους με μοναδική εμφάνιση σύμφωνα με τις
					ανάγκες και προτιμήσεις σου σε τρία μόνο βήματα.
				</p>
			</div>

			<Accordion data={steps} count />
		</section>
	);
};

export default HowItWorks;
