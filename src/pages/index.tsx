import Link from "next/link"

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
	return (
		<>
			<div>Home</div>
			<Link href="/blog" legacyBehavior>
				<a>Blog</a>
			</Link>
			<Link href="/product" legacyBehavior>
				<a>Products</a>
			</Link>
		</>
	)
}

export default Home
