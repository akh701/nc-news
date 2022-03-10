import { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import * as api from "../api"
import { useParams } from "react-router-dom"

export default function CommentsList() {
	const [comments, setComments] = useState([])
	const { article_id } = useParams()

	useEffect(() => {
		api.fetchComments(article_id).then(data => {
			setComments(data)
		})
	}, [article_id])

	return (
		<div className='comments-container'>
			<ul>
				{comments.map((comment, index) => {
					return (
						<CommentCard
							id={index}
							author={comment.author}
							body={comment.body}
							date={comment.created_at.slice(0, 10)}
							votes={comment.votes}
						/>
					)
				})}
			</ul>
		</div>
	)
}
