import {useRouter} from "next/router"

interface ReviewProps {}

const Review: React.FC<ReviewProps> = ({}) => {
	const router = useRouter()
	const {productId, reviewId} = router.query

	return (
		<div>
			Review {reviewId} for product {productId}
		</div>
	)
}

export default Review
