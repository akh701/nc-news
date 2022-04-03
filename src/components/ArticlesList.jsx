import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import * as api from "../api"
import ArticleCard from "./ArticleCard"
import LoadingCircle from "./LoadingCircle"

export default function ArticlesList() {
	const [articlesList, setArticlesList] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	const { topic } = useParams()
	const [searchParams] = useSearchParams({})
	let sort
	let order
	if (searchParams) {
		sort = searchParams.get("sort_by")
		order = searchParams.get("order")
	}

	useEffect(() => {
		console.log("we are here")
		setIsLoading(true)

		api
			.fetchArticles(topic, sort, order)
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
	}, [topic, sort, order])

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
