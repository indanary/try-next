import Head from "next/head"

interface BlogProps {
	article: {
		title: string
		description: string
	}
}

const Blog: React.FC<BlogProps> = ({article}) => {
	return (
		<>
			<Head>
				<title>{article.title}</title>
				<meta name="description" content={article.description} />
			</Head>
			<h1 className="content">Article</h1>
		</>
	)
}

export default Blog

export async function getServerSideProps() {
	return {
		props: {
			article: {
				title: "Article Title",
				description: "Article description",
			},
		},
	}
}
