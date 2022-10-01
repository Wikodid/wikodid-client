import Link from "next/link";

import styles from "@/components/LandingPage/Footer/Footer.module.css";

const linkList = [
	{
		title: "Wikodid",
		links: [
			{
				title: "About",
				href: "/#about",
			},
			{
				title: "Υλικά",
				href: "/#materials",
			},
			{
				title: "Themes",
				href: "/#themes",
			},
			{
				title: "Pricing",
				href: "/#pricing",
			},
			{
				title: "Επικοινωνία",
				href: "/#contact",
			},
			{
				title: "Terms of Service",
				href: "/terms-of-service",
			},
		],
	},
];

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<svg
						width='239'
						height='39'
						viewBox='0 0 239 39'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M230 0H239V39H206V5H230V0ZM215 14H230V30H215V14Z'
							fill='black'
						/>
						<path d='M62 5H53V14H62V5Z' fill='black' />
						<path d='M62 18H53V39H62V18Z' fill='black' />
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M176 0H185V39H152V5H176V0ZM161 14H176V30H161V14Z'
							fill='black'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M107 0H146V39H107V0ZM116 9H137V30H116V9Z'
							fill='black'
						/>
						<path d='M132 14H121V25H132V14Z' fill='black' />
						<path
							d='M77 0H68V39H77L84 29L90 39H101L90 21L101 5H90L77 23.5V0Z'
							fill='black'
						/>
						<path d='M200 5H191V14H200V5Z' fill='black' />
						<path d='M200 18H191V39H200V18Z' fill='black' />
						<path d='M8 0H0V39H47V0H38V30H28V5H19V30H8V0Z' fill='black' />
					</svg>
				</div>

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
					&copy; Copyright 2022 - All rights reserved - Developed by{" "}
					<Link href='https://www.linkedin.com/in/kyriakos-bekas/'>
						<a target='_blank' className={styles.dev}>
							Kyriakos Bekas
						</a>
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
