import Accordion from "@/components/Accordion/Accordion";

import styles from "@/components/LandingPage/HowItWorks/HowItWorks.module.css";

const steps = [
	{
		title: "Choose your materials",
		details:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae fugit sit. Odit eum nulla quidem suscipit temporibus minima dolorem reprehenderit?",
	},
	{
		title: "Choose your plan",
		details:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae fugit sit. Odit eum nulla quidem suscipit temporibus minima dolorem reprehenderit?",
	},
	{
		title: "Send us your catalogue",
		details:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae fugit sit. Odit eum nulla quidem suscipit temporibus minima dolorem reprehenderit?",
	},
];

const HowItWorks = () => {
	return (
		<section className={styles["how-it-works"]}>
			<div className={styles.container}>
				<h1>How It Works</h1>
				<p className={styles.text}>
					Γνωρίζουμε πως κάθε δευτερόλεπτο έχει αξία για την επιχείρισή σου.
					Γι’αυτό μπορείς να λάβεις τον ηλεκτρονικό σου κατάλογο ακολουθώντας
					μόνο τρία απλά βήματα.
				</p>
			</div>

			<Accordion data={steps} count />
		</section>
	);
};

export default HowItWorks;
