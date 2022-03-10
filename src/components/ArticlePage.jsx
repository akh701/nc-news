import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ArticleContent from "./ArticleContent"
import AddComment from "./AddComment"
import * as api from "../api"
import LoadingCircle from "./LoadingCircle"
import CommentsList from "./CommentsList"

export default function ArticlePage() {
	const [isLoading, setIsLoading] = useState(true)
	const [singleArticle, setSingleArticle] = useState({})
	const [error, setError] = useState(null)
	const { article_id } = useParams()

	useEffect(() => {
		setIsLoading(true)
		api
			.fetchArticleById(article_id)
			.then(article => {
				setIsLoading(false)
				setSingleArticle(article)
				setError(null)
			})
			.catch(err => {
				setError("something went wrong")
				setIsLoading(false)

				return err
			})
	}, [article_id])

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
			<main>
				<h5>{window.location.href}</h5>
				<ArticleContent
					title={singleArticle.title}
					body={singleArticle.body}
					author={singleArticle.author}
					votes={singleArticle.votes}
					created_at={singleArticle.created_at}
				/>
				<AddComment />

				<CommentsList />
			</main>
		</>
	)
}
