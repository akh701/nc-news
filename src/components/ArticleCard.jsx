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
				<h3>{title}</h3>
			</Link>

			<ul className='card-footer'>
				<li className='footer-item'>
					<span>Votes: </span>
					{votes}
				</li>
				<li className='footer-item'>
					<Link to={`/articles/topics/${topic}`}>
						<span>Topic: </span>
						{topic}
					</Link>
				</li>
				<li className='footer-item'>
					<span>Comments: </span>
					{comment_count}
				</li>
				<li className='footer-item'>
					<span>Author: </span>
					{author}
				</li>
				<li className='footer-item'>
					<span>Date: </span> {created_at}
				</li>

				<li className='footer-item read-more'>
					<Link to={`/articles/${id}`}>Read</Link>
				</li>
			</ul>
		</li>
	)
}
