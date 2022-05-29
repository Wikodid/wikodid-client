import styles from "@/components/Accordion/AccordionItem/AccordionItem.module.css";

const AccordionItem = ({ item, count, index, selected, handleClick }) => {
	const cssClasses = selected
		? `${styles.item} ${styles.selected}`
		: styles.item;

	return (
		<div className={cssClasses}>
			<div className={styles.title} onClick={handleClick}>
				<h2>
					{count && <span>{`${index + 1}. `}</span>}
					{item.title}
				</h2>

				<svg
					className={styles.svg}
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM24 0C37.224 0 48 10.752 48 24C48 37.224 37.224 48 24 48C10.752 48 0 37.224 0 24L0.00922394 23.3286C0.365189 10.3906 10.9765 0 24 0ZM25.272 30.168C24.936 30.504 24.48 30.696 24 30.696C23.52 30.696 23.064 30.504 22.728 30.168L14.4 21.792C13.68 21.096 13.68 19.968 14.4 19.248C15.096 18.552 16.248 18.552 16.944 19.272L24 26.352L31.056 19.272C31.752 18.552 32.88 18.552 33.6 19.248C33.96 19.608 34.128 20.064 34.128 20.544C34.128 21 33.96 21.456 33.6 21.792L25.272 30.168Z'
						fill='#747474'
					/>
				</svg>
			</div>

			<div className={styles.details}>
				<p>{item.details}</p>
			</div>
		</div>
	);
};

export default AccordionItem;
