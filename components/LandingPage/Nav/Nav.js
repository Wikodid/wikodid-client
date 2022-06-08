import { useRef } from "react";

import Link from "next/link";
import styles from "@/components/LandingPage/Nav/Nav.module.css";

const links = [
	{
		id: "#",
		name: "Αρχική",
	},
	{
		id: "#about",
		name: "About us",
	},
	{
		id: "#materials",
		name: "Υπηρεσίες",
	},
	{
		id: "#pricing",
		name: "Pricing",
	},
	{
		id: "#contact",
		name: "Επικοινωνία",
		cssClass: "contact-btn",
	},
];

const Nav = () => {
	const navigation = useRef();

	const handleClick = () => {
		navigation.current.classList.toggle(styles["nav-open"]);
	};

	return (
		<nav className={styles.navigation} ref={navigation}>
			<div className={styles.logo}>
				<Link href='#'>
					<a>
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
					</a>
				</Link>
			</div>

			<ul className={styles["nav-links"]}>
				{links.map((link) => (
					<li key={link.id}>
						<Link href={link.id}>
							{link.cssClass ? (
								<a className={styles[`${link.cssClass}`]}>{link.name}</a>
							) : (
								<a>{link.name}</a>
							)}
						</Link>
					</li>
				))}
			</ul>

			<div className={styles.burger} onClick={handleClick}>
				<div className={styles["line-1"]}></div>
				<div className={styles["line-2"]}></div>
				<div className={styles["line-3"]}></div>
			</div>
		</nav>
	);
};

export default Nav;
