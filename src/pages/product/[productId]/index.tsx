import {useRouter} from "next/router"

interface ProductDetailProps {}

const ProductDetail: React.FC<ProductDetailProps> = ({}) => {
	const router = useRouter()
	const productId = router.query.productId

	return <div>Product {productId} Detail </div>
}

export default ProductDetail
