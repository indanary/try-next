import { ReactNode } from "react"
import Head from "next/head"
import Footer from "../../components/Footer"

const About = () => {
	return <>
    <Head>
      <title>About Next</title>
      <meta name="description" content="Trying Next Js" />
    </Head>
    <h1 className="content">About</h1>
  </>
}

export default About

About.getLayout = function PageLayout(page: ReactNode) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}