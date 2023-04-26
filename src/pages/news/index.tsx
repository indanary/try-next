interface NewsArticleListProps {
	articles: any
}

const NewsArticleList: React.FC<NewsArticleListProps> = ({articles}) => {
	return (
		<>
			<h1>List of Articles</h1>
			{articles.map((article: any) => (
				<div key={article.id}>
					<h2>
						{article.id} {article.title} | {article.category}
					</h2>
				</div>
			))}
		</>
	)
}

export default NewsArticleList

export async function getServerSideProps() {
	const response = await fetch("http://localhost:4000/news")
	const data = await response.json()

	return {
		props: {
			articles: data,
		},
	}
}
