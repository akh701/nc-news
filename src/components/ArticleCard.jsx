import React from "react"
import { Link } from "react-router-dom"

//article card represents article title ad info without the body of article
export default function ArticleCard({
	id,
	title,
	votes,
	topic,
	comment_count,
	author,
	created_at,
}) {
	return (
		<li key={id} className='card'>
			<Link to={`/articles/${id}`}>
				<div className='card_head'>
					<h3>{title}</h3>
					<h5>
						By <Link to={`/author/${author}`}>{author}</Link>
					</h5>
				</div>
			</Link>
			<div className='card_details'>
				<span className='carddetails'>Votes: {votes}</span>
				<span>Comments: {comment_count}</span>
				<span>Date: {created_at}</span>

				<Link className='card_readmore' to={`/articles/${id}`}>
					Read more
				</Link>
			</div>
		</li>
	)
}
