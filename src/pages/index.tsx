import Link from "next/link"
import {useRouter} from "next/router"

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
	const router = useRouter()

	const handleClick = () => {
		router.push("/product")
	}

	return (
		<>
			<div>Home</div>
			<Link href="/blog" legacyBehavior>
				<a>Blog</a>
			</Link>
			<Link href="/product" legacyBehavior>
				<a>Products</a>
			</Link>
			<button onClick={handleClick}>Place Order</button>
		</>
	)
}

export default Home
