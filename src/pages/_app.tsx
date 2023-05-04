import "@/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import type {AppLayoutProps} from "next/app"
import "../styles/layout.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function App({Component, pageProps}: AppLayoutProps) {

	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />)
	}

	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
