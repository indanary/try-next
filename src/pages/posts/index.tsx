import Post from "../../../components/post"

interface PostListProps {
	posts: any
}

const PostList: React.FC<PostListProps> = ({posts}) => {
	return (
		<>
			<h1>List of Posts</h1>
			{posts.map((post: any, index: number) => (
				<div key={post.id}>
					<Post post={post} />
				</div>
			))}
		</>
	)
}

export default PostList

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts")
	const data = await response.json()

	return {
		props: {
			posts: data,
		},
	}
}
