interface ProductListProps {
	products: any
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
	return (
		<>
			<h1>List of Products</h1>
			{products.map((product: any) => (
				<div key={product.id}>
					<h2>
						{product.id} {product.title} {product.price}
					</h2>
					<hr />
				</div>
			))}
		</>
	)
}

export default ProductList

export async function getStaticProps() {
	const response = await fetch("http://localhost:4000/products")
	const data = await response.json()

	return {
		props: {
			products: data,
		},
	}
}
