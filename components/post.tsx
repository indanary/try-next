import Link from "next/link"

interface PostProps {
	post: any
}

const Post: React.FC<PostProps> = ({post}) => {
	return (
		<>
			<Link href={`/posts/${post.id}`} passHref>
				<p>{post.title}</p>
			</Link>
			<hr />
		</>
	)
}

export default Post
