import {comments} from "../../../data/comments"

interface CommentProps {
	comment: any
}

const Comment: React.FC<CommentProps> = ({comment}) => {
	return (
		<>
			{comment.id} {comment.text}
		</>
	)
}

export default Comment

export async function getStaticPaths() {
	return {
		paths: [
			{params: {commentId: "1"}},
			{params: {commentId: "2"}},
			{params: {commentId: "3"}},
		],
		fallback: false,
	}
}
export async function getStaticProps(context: any) {
	const {commentId} = context.params

	const comment = comments.find(
		(comment: any) => comment.id === parseInt(commentId),
	)

	return {
		props: {
			comment,
		},
	}
}
