import React from "react"
import DeleteComment from "./DeleteComment"

export default function CommentCard({
	id,
	commentAuthor,
	articalAuthor,
	body,
	date,
	votes,
	setDeleted,
}) {
	return (
		<li className='comment-card' key={id}>
			<h5>{commentAuthor} says:</h5>
			<DeleteComment
				articalAuthor={articalAuthor}
				commentAuthor={commentAuthor}
				comment_id={id}
				setDeleted={setDeleted}
			/>
			<p>{body}</p>
			<span>{date}</span>
			<span className='comment-likes'>Likes: {votes}</span>
			<hr />
		</li>
	)
}
