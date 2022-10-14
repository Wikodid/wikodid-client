import Head from "next/head";
import Nav from "@/components/LandingPage/Nav/Nav";
import Hero from "@/components/LandingPage/Hero/Hero";
import AboutUs from "@/components/LandingPage/AboutUs/AboutUs";
import Materials from "@/components/LandingPage/Materials/Materials";
import Themes from "@/components/LandingPage/Themes/Themes";
import Pricing from "@/components/LandingPage/Pricing/Pricing";
import HowItWorks from "@/components/LandingPage/HowItWorks/HowItWorks";
import Testimonials from "@/components/LandingPage/Testimonials/Testimonials";
import ContactUs from "@/components/LandingPage/ContactUs/ContactUs";
import Footer from "@/components/LandingPage/Footer/Footer";

import styles from "@/styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Wikodid | Zero Waste Menus</title>
				<meta
					name='description'
					content='Ηλεκτρονικοί κατάλογοι με την μορφή QR κωδικού σε διάφορα υλικά και με personalized εμφλανιση. Τα μενού wikodid αποτελούν τον πλέον αυτοβιώσιμο, covid-free και φιλικό προς το περιβάλλον τρόπο για την παρουσίαση των προϊόντων της εταιρίας σου.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Nav />

			<main className={styles.main} dir='ltr'>
				<Hero />
				<AboutUs />
				<Materials />
				<Themes />
				<Pricing />
				<HowItWorks />
				<Testimonials />
				<ContactUs />
			</main>

			<Footer />
		</>
	);
}
