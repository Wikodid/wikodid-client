import { useRef } from "react";

import styles from "@/components/LandingPage/Testimonials/Testimonials.module.css";

const reviews = [
	{
		id: "tuktuk",
		customer: {
			name: "Μπάμπης Ασκερίδης",
			position: "CEO",
			store: "Tuk Tuk",
			img: {
				src: "/images/customers/tuk-tuk.png",
				alt: "Tuk Tuk Store Image",
			},
		},
		headline: "Το συνιστώ ανεπιφύλακτα",
		details:
			"Πολύ δυνατή προσθήκη ο κατάλογος της Wikodid, φανταστική απεικόνιση του μενού που ταιριάζει με την αισθητική του εστιατορίου μας. Πρωτότυπα υλικά, ενώ το αυτοκόλλητο μενού που τοποθετήσαμε έξω από το κατάστημα δίνει άμεσα λεπτομερείς πληροφορίες των πιάτων μας σε όποιον το σκανάρει. Το συνιστώ ανεπιφύλακτα, ειδικά για μαγαζιά στο κέντρο της Αθήνας που τα επισκέπτονται τουρίστες.",
	},
	{
		id: "artemis",
		customer: {
			name: "Κώστας Λάμπρου",
			position: "Owner",
			store: "Artemis",
			img: {
				src: "/images/customers/artemis.png",
				alt: "Artemis Store Image",
			},
		},
		headline: "Μας έλυσε τα χέρια!",
		details:
			"Καταπληκτικό εργαλείο, ειδικά για τουριστικές περιοχές όπως το Πευκί. Με την Wikodid ξεχνάς τους χάρτινους καταλόγους, προσαρμόζεις εύκολα οποιαδήποτε αλλαγή σε τιμές ή προϊόντα και διατίθεται σε όποια γλώσσα ζητήσεις. Μας έλυσε τα χέρια!",
	},
	{
		id: "palermo",
		customer: {
			name: "Georgios Papadopoulos",
			position: "CEO",
			store: "Palermo",
			img: {
				src: "/images/demos/plain-demo.png",
				alt: "Store Image",
			},
		},
		headline: "I suggest them to anyone that is serious about their business!",
		details:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate dolor nesciunt nobis consectetur recusandae id quos nisi odio nostrum! Quis, aliquam. Maxime quo quos neque vitae nostrum. Nisi nobis possimus sapiente.",
	},
];

const Testimonials = () => {
	const selectedBubble = useRef();
	const reviewsText = [];

	for (let i = 0; i < reviews.length; i++) reviewsText.push(useRef());

	const handleClick = (e) => {
		if (selectedBubble.current === e.target) return;

		selectedBubble.current = e.target;
		const review = selectedBubble.current.getAttribute("review");

		handleImageChange(review);
	};

	const handleImageChange = (review) => {
		reviewsText.map((text) => {
			text.current.getAttribute("id") === review
				? text.current.classList.add(styles.selected)
				: text.current.classList.remove(styles.selected);
		});
	};

	return (
		<section className={styles["testimonials-section"]}>
			<div className={styles.bubbles}>
				{reviews.map((review, index) => {
					if (index === 0)
						return (
							<div
								key={review.id}
								className={styles.bubble}
								review={review.id}
								ref={selectedBubble}
								onClick={handleClick}>
								<img
									src={review.customer.img.src}
									alt={review.customer.img.alt}
									className={styles.thumbnail}
								/>
								<div className={styles.owner}>
									<p className={styles.name}>{review.customer.name}</p>
									<p className={styles.position}>
										{review.customer.position + ", " + review.customer.store}
									</p>
								</div>
							</div>
						);

					return (
						<div
							key={review.customer.name}
							className={styles.bubble}
							review={review.id}
							onClick={handleClick}>
							<img
								src={review.customer.img.src}
								alt={review.customer.img.alt}
								className={styles.thumbnail}
							/>
							<div className={styles.owner}>
								<p className={styles.name}>{review.customer.name}</p>
								<p className={styles.position}>
									{review.customer.position + ", " + review.customer.store}
								</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className={styles["testimonials-container"]}>
				<svg
					className={styles["blockquotes-svg"]}
					width='53'
					height='57'
					viewBox='0 0 53 57'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M21.8911 55.5373C21.9528 56.0507 21.6118 56.5288 21.1029 56.6203C14.7935 57.7542 9.74357 56.3483 5.95294 52.4025C1.98431 48.2713 0 42.0746 0 33.8124V1C0 0.447716 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1V27.424C22 27.9762 21.5523 28.424 21 28.424H11.2781C10.7559 28.424 10.3206 28.8257 10.2885 29.3468C10.1048 32.3222 10.1694 35.1129 10.4824 37.719C10.9137 40.5928 11.9059 42.8829 13.4588 44.5892C14.8641 46.052 17.011 46.7794 19.8997 46.7715C20.4264 46.77 20.8841 47.151 20.9469 47.6738L21.8911 55.5373Z'
						fill='#ECF5FF'
					/>
					<path
						d='M52.8911 55.5373C52.9528 56.0507 52.6118 56.5288 52.1029 56.6203C45.7935 57.7542 40.7436 56.3483 36.9529 52.4025C32.9843 48.2713 31 42.0746 31 33.8124V1C31 0.447716 31.4477 0 32 0H52C52.5523 0 53 0.447715 53 1V27.424C53 27.9762 52.5523 28.424 52 28.424H42.2781C41.7559 28.424 41.3206 28.8257 41.2885 29.3468C41.1048 32.3222 41.1694 35.1129 41.4824 37.719C41.9137 40.5928 42.9059 42.8829 44.4588 44.5892C45.8641 46.052 48.011 46.7794 50.8997 46.7715C51.4264 46.77 51.8841 47.151 51.9469 47.6738L52.8911 55.5373Z'
						fill='#ECF5FF'
					/>
				</svg>

				{reviews.map((review, index) => (
					<div
						key={review.id}
						id={review.id}
						className={`${
							index === 0
								? styles.testimonial + " " + styles.selected
								: styles.testimonial
						}`}
						ref={reviewsText[index]}>
						<h2 className={styles.headline}>{review.headline}</h2>

						<blockquote className={styles.details}>{review.details}</blockquote>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
