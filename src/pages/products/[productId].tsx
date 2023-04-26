import {useRouter} from "next/router"

interface ProductProps {
	product: any
}

const Product: React.FC<ProductProps> = ({product}) => {
	const router = useRouter()

	if (router.isFallback) {
		return <div>Loading...</div>
	}

	return (
		<>
			<h2>
				{product.id} {product.title} {product.price}
			</h2>
			<p>{product.description}</p>
			<hr />
		</>
	)
}

export default Product

export async function getStaticPaths() {
	return {
		paths: [{params: {productId: "1"}}],
		fallback: true,
	}
}

export async function getStaticProps(context: any) {
	const {params} = context
	const response = await fetch(
		`http://localhost:4000/products/${params.productId}`,
	)
	const data = response.json()

	return {
		props: {
			product: data,
		},
	}
}
