import Head from "next/head";
import Nav from "@/components/LandingPage/Nav/Nav";
import Hero from "@/components/LandingPage/Hero/Hero";
import AboutUs from "@/components/LandingPage/AboutUs/AboutUs";
import Materials from "@/components/LandingPage/Materials/Materials";
import Styles from "@/components/LandingPage/StylesSection/Styles";
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
				<title>Wikodid | Landing Page</title>
				<meta name='description' content='This is the official Wikodid site' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Nav />

			<main className={styles.main} dir='ltr'>
				<Hero />
				{/* <AboutUs /> */}
				<Materials />
				{/* <Styles />
				<Pricing />
				<HowItWorks />
				<Testimonials />
				<ContactUs /> */}
			</main>

			<Footer />
		</>
	);
}
