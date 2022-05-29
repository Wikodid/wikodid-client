import { useRef } from "react";

import Link from "next/link";
import styles from "@/components/LandingPage/Nav/Nav.module.css";

const links = [
	{
		id: "#",
		name: "Home",
	},
	{
		id: "#about",
		name: "About",
	},
	{
		id: "#services",
		name: "Services",
	},
	{
		id: "#pricing",
		name: "Pricing",
	},
	{
		id: "#contact",
		name: "Contact",
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
					<a>Wikodid</a>
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
