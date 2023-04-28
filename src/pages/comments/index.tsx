import {useState} from "react"

interface CommentsPageProps {}

const CommentsPage: React.FC<CommentsPageProps> = ({}) => {
	const [comments, setComments] = useState([])

	const fetchComments = async () => {
		const response = await fetch("/api/comments")
		const data = await response.json()

		if (data) setComments(data)
	}

	return (
		<>
			<button onClick={fetchComments}>Fetch Comments</button>
			{comments.map((comment: any) => (
				<div key={comment.id}>
					{comment.id} {comment.text}
				</div>
			))}
		</>
	)
}

export default CommentsPage
