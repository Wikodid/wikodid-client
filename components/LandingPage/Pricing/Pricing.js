import { useState } from "react";
// import Link from "next/link";

import styles from "@/components/LandingPage/Pricing/Pricing.module.css";

const pricingPlans = [
	{
		title: "Lite",
		description: "Perfect for Beginners",
		price: {
			monthly: "2.99",
			yearly: "19.99",
			deal: {
				previous: {
					monthly: "4.99",
					yearly: "34.99",
				},
			},
		},
		features: [
			{
				id: 0,
				title: "24h Support",
				tooltip: "Premium support agent available at all times",
			},
			{
				id: 1,
				title: "24h Support",
				tooltip: "Premium support agent available at all times",
			},
			{
				id: 2,
				title: "24h Support",
				tooltip: "Premium support agent available at all times",
			},
		],
	},
	{
		title: "Standard",
		description: "Best for professionals",
		tag: "popular",
		price: {
			monthly: "5.99",
			yearly: "59.99",
		},
		features: [
			{
				id: 0,
				title: "24h Support",
				tooltip: "Premium support agent available at all times",
			},
			{
				id: 1,
				title: "24h Support",
				tooltip: "Premium support agent available at all times",
			},
			{
				id: 2,
				title: "24h Support",
				tooltip: "Premium support agent available at all times",
			},
		],
	},
	{
		title: "Pro",
		description: "For serious businesses",
		price: {
			monthly: "12.99",
			yearly: "124.99",
		},
		features: [
			{
				id: 0,
				title: "24h Support",
				tooltip: "Premium support agent available at all times",
			},
			{
				id: 1,
				title: "24h Support",
				tooltip: "Premium support agent available at all times",
			},
			{
				id: 2,
				title: "24h Support",
				tooltip: "Premium support agent available at all times",
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
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit magni
					quam porro.
				</p>
			</div>

			<div className={styles["switch-container"]}>
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
									$
									{switchOn
										? plan.price.deal.previous.yearly
										: plan.price.deal.previous.monthly}
								</s>
							</span>
						)}

						<div className={styles.price}>
							<span className={styles.amount}>
								<span>$</span>
								{switchOn ? plan.price.yearly : plan.price.monthly}
							</span>
							<span>/ {switchOn ? "year" : "month"}</span>
						</div>

						<ul className={styles["feature-list"]}>
							{plan.features.map((feature) => (
								<li key={feature.id}>
									<svg
										className={styles.tick}
										width='15'
										height='11'
										viewBox='0 0 15 11'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12.129 0.430489C12.7196 -0.143496 13.6787 -0.143496 14.2694 0.430489C14.8601 1.00447 14.8601 1.93645 14.2694 2.51044L6.4033 10.1542C6.11928 10.4302 5.73441 10.5862 5.33308 10.5862C4.92969 10.5862 4.54688 10.4302 4.26286 10.1542L0.443008 6.44234C-0.147669 5.86635 -0.147669 4.93838 0.443008 4.36239C1.03574 3.78641 1.99277 3.78641 2.58344 4.36239L5.33308 7.03233L12.129 0.430489Z'
											fill='#0CE408'
										/>
									</svg>

									<p className={styles.feature} title={feature.tooltip}>
										{feature.title}
									</p>
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
