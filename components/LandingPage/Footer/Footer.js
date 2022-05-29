import Link from "next/link";

import styles from "@/components/LandingPage/Footer/Footer.module.css";

const linkList = [
	{
		title: "Wikodid",
		links: [
			{
				title: "Materials",
				href: "#",
			},
			{
				title: "Products",
				href: "#",
			},
			{
				title: "Pricing",
				href: "#",
			},
			{
				title: "About",
				href: "#",
			},
			{
				title: "Contact",
				href: "#",
			},
		],
	},
	{
		title: "More",
		links: [
			{
				title: "Coming Soon",
				href: "#",
			},
		],
	},
	{
		title: "Legal",
		links: [
			{
				title: "Terms of Services",
				href: "#",
			},
			{
				title: "Privacy Policy",
				href: "#",
			},
		],
	},
];

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logo}>Wikodid</div>

				<div className={styles["link-container"]}>
					{linkList.map((list) => (
						<div className={styles["link-group"]} key={list.title}>
							<h1>{list.title}</h1>

							<ul>
								{list.links.map((link) => (
									<li key={link.title}>
										<Link href={link.href}>
											<a className={styles.link}>{link.title}</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className={styles.small}>
				<p>
					&copy; Copyright 2022 - All rights reserved - Developed by Kyriakos
					Bekas
				</p>
			</div>
		</footer>
	);
};

export default Footer;
