interface ArticleListByCategoryProps {
	articles: any
	category: string
}

const ArticleListByCategory: React.FC<ArticleListByCategoryProps> = ({
	articles,
	category,
}) => {
	return (
		<>
			<h1>Showing news for category {category}</h1>
			{articles.map((article: any) => (
				<div key={article.id}>
					<h2>
						{article.id} {article.title}
					</h2>
					<p>{article.description}</p>
				</div>
			))}
		</>
	)
}

export default ArticleListByCategory

export async function getServerSideProps(context: any) {
	const {params} = context
	const response = await fetch(
		`http://localhost:4000/news?category=${params.category}`,
	)
	const data = await response.json()

	return {
		props: {
			articles: data,
			category: params.category,
		},
	}
}
