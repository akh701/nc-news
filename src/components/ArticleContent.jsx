import React from "react"
import Votes from "./Votes"

export default function ArticleContent({
	title,
	body,
	author,
	votes,
	created_at,
}) {
	if (!created_at) return <h2>Loading</h2>

	return (
		<section className='article-content'>
			<ul>
				<li className='article-title'>
					<h1>{title}</h1>
				</li>
				<li>
					<p>{body}</p>
				</li>
			</ul>
			<hr />
			<ul className='article-info'>
				<li>Author: {author}</li>
				<li>
					Votes: <Votes votes={votes} author={author} />
				</li>

				<li>Published: {created_at.slice(0, 10)}</li>
			</ul>
			<hr />
		</section>
	)
}
