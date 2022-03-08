import { useEffect, useState } from "react"
import * as api from "../api"
import ArticleCard from "./ArticleCard"
import LoadingCircle from "./LoadingCircle"

export default function ArticlesList() {
	const [articlesList, setArticlesList] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	useEffect(() => {
		setIsLoading(true)
		setError(null)
		api
			.fetchArticles()
			.then(articles => {
				setIsLoading(false)
				setArticlesList(articles)
			})
			.catch(err => {
				setError("something went wrong")
				setIsLoading(false)
				return err
			})
	}, [])

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
		<>
			{articlesList.map(article => {
				return (
					<ArticleCard
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
		</>
	)
}
