interface NewsProps {
	data: any
}

const News: React.FC<NewsProps> = ({data}) => {
	return <h1 className="content">{data}</h1>
}

export default News

export async function getStaticProps(context: any) {
  console.log(context.previewData)
	return {
		props: {
			data: context.preview
				? "List of draft articles"
				: "List of published articles",
		},
	}
}
