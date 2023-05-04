import Head from "next/head"
import "@/styles/globals.css"
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
			<Head>
				<title>Trying Next</title>
				<meta name="description" content="Trying Next" />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
