import { useState } from "react";

import styles from "@/components/LandingPage/Pricing/Pricing.module.css";

const pricingPlans = [
	{
		title: "Lite",
		description: "Ευέλικτο",
		price: {
			monthly: "2.99",
			yearly: "89.99",
			deal: {
				previous: {
					monthly: "4.99",
					yearly: "129.99",
				},
			},
		},
		features: [
			{
				id: 0,
				title: "Δημιουργία καταλόγου",
				tooltip:
					"Δημιουργούμε αυτόματα τον ηλεκτρονικό σου κατάλογο σύμφωνα με την τωρινή του μορφή",
			},
			{
				id: 1,
				title: "QR Code σε ηλεκτρονική μορφή",
				tooltip: "QR του καταλόγου σου σε μορφές .jpg, .png, .svg και .pdf",
			},
			{
				id: 2,
				title: "Hosting",
				tooltip:
					"Ο ηλεκτρονικός σου κατάλογος φιλοξενείται στους δικούς μας server και είναι διαθέσιμος 24/7",
			},
			{
				id: 3,
				title: "2 γλώσσες",
				tooltip: "Διαθέσιμος κατάλογος σε 2 γλώσσες της επιλογής σου",
			},
			{
				id: 4,
				title: "Διαθέσιμα Themes: Plain",
				tooltip: "Plain theme για την εμφάνιση του καταλόγου σου",
			},
		],
	},
	{
		title: "Standard",
		description: "Ευέλικτο και Εξατομικευμένο",
		tag: "popular",
		price: {
			monthly: "5.99",
			yearly: "99.99",
			deal: {
				previous: {
					monthly: "4.99",
					yearly: "149.99",
				},
			},
		},
		features: [
			{
				id: 0,
				title: "Δημιουργία καταλόγου",
				tooltip:
					"Δημιουργούμε αυτόματα τον ηλεκτρονικό σου κατάλογο σύμφωνα με την τωρινή του μορφή",
			},
			{
				id: 1,
				title: "QR Code σε ηλεκτρονική μορφή",
				tooltip: "QR του καταλόγου σου σε μορφές .jpg, .png, .svg και .pdf",
			},
			{
				id: 2,
				title: "Hosting",
				tooltip:
					"Ο ηλεκτρονικός σου κατάλογος φιλοξενείται στους δικούς μας server και είναι διαθέσιμος 24/7",
			},
			{
				id: 3,
				title: "2 γλώσσες",
				tooltip: "Διαθέσιμος κατάλογος σε 2 γλώσσες της επιλογής σου",
			},
			{
				id: 4,
				title: "4 διορθώσεις μενού / χρόνο",
				tooltip:
					"Αλλαγές σε τιμή, φωτογραφία ή περιγραφή προϊόντος έως και 4 φορές τον χρόνο",
			},
			{
				id: 5,
				title: "Διαθέσιμα Themes: Plain, Styled",
				tooltip:
					"Επιλογή Plain ή Styled theme για την εμφάνιση του καταλόγου σου",
			},
		],
	},
	{
		title: "Pro",
		description: "Λεπτομερές, Ευέλικτο και Εξατομικευμένο",
		price: {
			monthly: "12.99",
			yearly: "149.99",
			deal: {
				previous: {
					monthly: "4.99",
					yearly: "249.99",
				},
			},
		},
		features: [
			{
				id: 0,
				title: "Δημιουργία καταλόγου",
				tooltip:
					"Δημιουργούμε αυτόματα τον ηλεκτρονικό σου κατάλογο σύμφωνα με την τωρινή του μορφή",
			},
			{
				id: 1,
				title: "QR Code σε ηλεκτρονική μορφή",
				tooltip: "QR του καταλόγου σου σε μορφές .jpg, .png, .svg και .pdf",
			},
			{
				id: 2,
				title: "Hosting",
				tooltip:
					"Ο ηλεκτρονικός σου κατάλογος φιλοξενείται στους δικούς μας server και είναι διαθέσιμος 24/7",
			},
			{
				id: 3,
				title: "3 γλώσσες",
				tooltip: "Διαθέσιμος κατάλογος σε 3 γλώσσες της επιλογής σου",
			},
			{
				id: 4,
				title: "1 διόρθωση μενού / μήνα",
				tooltip:
					"Αλλαγές σε τιμή, φωτογραφία ή περιγραφή προϊόντος έως και 1 φορά το μήνα",
			},
			{
				id: 5,
				title: "1 ολική αλλαγή μενού / χρόνο",
				tooltip:
					"Ολοκληρωτική αλλαγή στον κατάλογό σου έως και 1 φορά το χρόνο",
			},
			{
				id: 6,
				title: "Διαθέσιμα Themes: Όλα",
				tooltip:
					"Επιλογή Plain, Styled ή Detailed theme για την εμφάνιση του καταλόγου σου",
			},
			{
				id: 7,
				title: "Συνεχής Υποστήριξη",
			},
		],
	},
];

const Pricing = () => {
	const [switchOn, setSwitchOn] = useState(false);

	const handleClick = (e) => {
		e.target.classList.toggle(styles["toggle-on"]);

		let on = e.target.classList.contains(styles["toggle-on"]);

		setSwitchOn(on);
	};

	return (
		<section className={styles.pricing} id='pricing'>
			<div className={styles.text}>
				<h1>Pricing</h1>
				<p>
					Επωφεληθείτε από τις προσφορές μας έως και τις 31/12/2022 <br /> και
					γίνετε σύμμαχος της wikodid!
				</p>
			</div>

			<div className={styles["switch-container"]} style={{ display: "none" }}>
				<div className={styles.switch} onClick={handleClick}>
					<div className={styles.toggle}></div>
				</div>
			</div>

			<div className={styles["pricing-plans-container"]}>
				{pricingPlans.map((plan) => (
					<div
						key={plan.title}
						className={
							plan.tag
								? `${styles.plan} ${styles["plan-highlighted"]}`
								: styles.plan
						}>
						{plan.tag && <div className={styles.tag}>{plan.tag}</div>}

						<h1>{plan.title}</h1>
						<p>{plan.description}</p>

						{plan.price.deal && (
							<span className={styles.deal}>
								<s>
									€
									{/* {switchOn
										? plan.price.deal.previous.yearly
										: plan.price.deal.previous.monthly} */}
									{plan.price.deal.previous.yearly}
								</s>
							</span>
						)}

						<div className={styles.price}>
							<span className={styles.amount}>
								<span>€</span>
								{/* {switchOn ? plan.price.yearly : plan.price.monthly} */}
								{plan.price.yearly}
							</span>
							{/* <span>/ {switchOn ? "year" : "month"}</span> */}
							<span>/ χρόνο</span>
						</div>

						<ul className={styles["feature-list"]}>
							{plan.features.map((feature) => (
								<li key={feature.id} className={styles.feature}>
									<svg
										className={styles.tick}
										width='15'
										height='11'
										viewBox='0 0 15 11'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12.129 0.430489C12.7196 -0.143496 13.6787 -0.143496 14.2694 0.430489C14.8601 1.00447 14.8601 1.93645 14.2694 2.51044L6.4033 10.1542C6.11928 10.4302 5.73441 10.5862 5.33308 10.5862C4.92969 10.5862 4.54688 10.4302 4.26286 10.1542L0.443008 6.44234C-0.147669 5.86635 -0.147669 4.93838 0.443008 4.36239C1.03574 3.78641 1.99277 3.78641 2.58344 4.36239L5.33308 7.03233L12.129 0.430489Z'
											fill='#9FD1AE'
										/>
									</svg>

									<p title={feature.tooltip}>{feature.title}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			{/* <Link href='/pricing'>
				<a className={styles.comparison}>Compare Plans</a>
			</Link> */}
		</section>
	);
};

export default Pricing;
