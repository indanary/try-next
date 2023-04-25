import Post from "../../../components/post"

interface PostDetailProps {
	post: any
}

const PostDetail: React.FC<PostDetailProps> = ({post}) => {
	return (
		<>
			<Post post={post} />
			<p>{post.body}</p>
		</>
	)
}

export default PostDetail

export async function getStaticPaths() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts")
	const data = await response.json()

	const paths = data.map((post: any) => {
		return {
			params: {
				postId: `${post.id}`,
			},
		}
	})

	return {
		paths: paths,
		fallback: false,
	}
}

export async function getStaticProps(context: any) {
	const {params} = context
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`,
	)
	const data = await response.json()

	return {
		props: {
			post: data,
		},
	}
}
