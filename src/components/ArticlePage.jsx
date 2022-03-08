import React from "react"
import ArticleContent from "./ArticleContent"
import AddComment from "./AddComment"

export default function ArticlePage() {
	return (
		<>
			<main>
				<h5>Breadcrumb</h5>
				<ArticleContent />
				<AddComment />
			</main>
		</>
	)
}
