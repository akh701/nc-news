import React from "react"
import * as api from "../api"

export default function DeleteComment({ comment_id }) {
	const handleCommentDeletion = () => {
		api.deleteComment(comment_id)
	}

	return (
		<span onClick={handleCommentDeletion} className='comment-delete'>
			x
		</span>
	)
}
