import FbMessenger from "@/layouts/FbMessenger";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<FbMessenger>
			<Component {...pageProps} />
		</FbMessenger>
	);
}

export default MyApp;
