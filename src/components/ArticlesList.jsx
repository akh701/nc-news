import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as api from "../api"
import ArticleCard from "./ArticleCard"
import LoadingCircle from "./LoadingCircle"

export default function ArticlesList() {
	const [articlesList, setArticlesList] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	const { topic } = useParams()

	useEffect(() => {
		setIsLoading(true)

		api
			.fetchArticles(topic)
			.then(articles => {
				setIsLoading(false)
				setArticlesList(articles)
				setError(null)
			})
			.catch(err => {
				setError("something went wrong")
				setIsLoading(false)
				return err
			})
	}, [topic])

	if (isLoading) {
		return (
			<h1>
				<LoadingCircle /> Loading
			</h1>
		)
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div className='articles_container'>
			<ul>
				{articlesList.map(article => {
					return (
						<ArticleCard
							key={article.article_id}
							id={article.article_id}
							title={article.title}
							votes={article.votes}
							topic={article.topic}
							comment_count={article.comment_count}
							author={article.author}
							created_at={article.created_at.slice(0, 10)}
						/>
					)
				})}
			</ul>
		</div>
	)
}
