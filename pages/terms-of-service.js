import Footer from "@/components/LandingPage/Footer/Footer";
import Nav from "@/components/LandingPage/Nav/Nav";
import style from "@/styles/TermsOfService.module.css";
import { termsOfService } from "data/terms-of-service";

const TermsOfService = () => {
	return (
		<>
			<Nav />

			<div className={style.container}>
				<main className={style.main}>
					<article>
						<h1>{termsOfService.title}</h1>

						{termsOfService.desciption.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}

						{termsOfService.terms.map((term, index) => (
							<section className={style.section} key={index}>
								<h2>{term.title}</h2>

								{term.description.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}

								{term.list.length > 0 && (
									<ul className={style.list}>
										{" "}
										{term.list.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								)}
							</section>
						))}
					</article>
				</main>
			</div>

			<Footer />
		</>
	);
};

export default TermsOfService;
