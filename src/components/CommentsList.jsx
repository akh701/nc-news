import { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import LoadingCircle from "./LoadingCircle"
import * as api from "../api"
import { useParams } from "react-router-dom"

export default function CommentsList({ totalComments, newComment }) {
	const [comments, setComments] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	const { article_id } = useParams()

	useEffect(() => {
		setIsLoading(true)

		api
			.fetchComments(article_id)
			.then(data => {
				setIsLoading(false)
				setComments(data.reverse())
			})
			.catch(err => {
				setError("something went wrong please try to refresh the page")
				setIsLoading(false)
				return err
			})
	}, [article_id, newComment])

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
			<div className='comments-header'>Total Comments: {totalComments}</div>
			<div className='comments-container'>
				<ul>
					{comments.map(comment => {
						return (
							<CommentCard
								id={comment.comment_id}
								author={comment.author}
								body={comment.body}
								date={comment.created_at.slice(0, 10)}
								votes={comment.votes}
							/>
						)
					})}
				</ul>
			</div>
		</>
	)
}
