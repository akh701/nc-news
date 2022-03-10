import React from "react"

export default function CommentCard({ id, author, body, date, votes }) {
	return (
		<li className='comment-card' key={id}>
			<h5>{author} says:</h5>

			<p>{body}</p>
			<span>{date}</span>
			<span className='comment-likes'>Likes: {votes}</span>
			<hr />
		</li>
	)
}
