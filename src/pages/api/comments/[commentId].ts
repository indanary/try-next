import {comments} from "../../../../data/comments"

export default function handler(req: any, res: any) {
	const {commentId} = req.query
	const comment = comments.find(
		(comment: any) => comment.id === parseInt(commentId),
	)
	res.status(200).json(comment)
}
