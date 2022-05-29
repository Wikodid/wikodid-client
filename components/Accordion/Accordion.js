import { useState } from "react";
import AccordionItem from "@/components/Accordion/AccordionItem/AccordionItem";

import styles from "@/components/Accordion/Accordion.module.css";

const Accordion = ({ data, count }) => {
	const [selected, setSelected] = useState(null);

	const toggle = (index) => {
		if (selected === index) return setSelected(null);

		setSelected(index);
	};

	return (
		<div className={styles.accordion}>
			{data.map((item, index) => {
				if (count)
					return (
						<AccordionItem
							key={index}
							item={item}
							count={count}
							index={index}
							selected={selected === index}
							handleClick={() => toggle(index)}
						/>
					);

				return (
					<AccordionItem
						key={index}
						item={item}
						count={count}
						selected={selected === index}
						handleClick={() => toggle(index)}
					/>
				);
			})}
		</div>
	);
};

export default Accordion;
