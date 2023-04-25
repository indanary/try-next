import Link from "next/link"

interface ProductListProps {
	productId: number
}

const ProductList: React.FC<ProductListProps> = ({productId = 100}) => {
	return (
		<>
			<Link href="/" legacyBehavior>
				Home
			</Link>
			<div>ProductList</div>
			<h2>
				<Link href="/product/1" legacyBehavior>
					<a>Product 1</a>
				</Link>
			</h2>
			<h2>
				<Link href="/product/2" legacyBehavior>
					<a>Product 2</a>
				</Link>
			</h2>
			<h2>
				<Link href="/product/3" legacyBehavior replace>
					<a>Product 3</a>
				</Link>
			</h2>
			<h2>
				<Link href={`/product/${productId}`} legacyBehavior>
					<a>Product {productId}</a>
				</Link>
			</h2>
		</>
	)
}

export default ProductList
