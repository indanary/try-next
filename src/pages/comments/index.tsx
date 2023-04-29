import {useState} from "react"

interface CommentsPageProps {}

const CommentsPage: React.FC<CommentsPageProps> = ({}) => {
	const [comments, setComments] = useState([])
	const [newComment, setNewComment] = useState("")

	const fetchComments = async () => {
		const response = await fetch("/api/comments")
		const data = await response.json()

		if (data) setComments(data)
	}

	const submitComment = async () => {
		const response = await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({newComment}),
			headers: {
				"Content-Type": "application/json",
			},
		})
		const data = await response.json()
	}

	return (
		<>
			<input
				type="text"
				value={newComment}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setNewComment(e.target.value)
				}
			/>
			<button onClick={submitComment}>Submit Comment</button>
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
