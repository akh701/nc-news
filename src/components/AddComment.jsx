import React, { useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import * as api from "../api"
import { UserContext } from "../contexts/UserContext"

export default function AddComment({ articalAuthor }) {
	const [newComment, setNewComment] = useState({ body: "", username: "" })
	const { loggedInUser } = useContext(UserContext)
	const [error, setError] = useState(null)
	const [commentSuccess, setCommentSuccess] = useState(false)
	const { article_id } = useParams()
	let navigate = useNavigate()

	const submitNewComment = () => {
		if (!loggedInUser.username) {
			navigate("/login")
		}

		api.postNewComment(article_id, newComment).catch(err => {
			setError("something went wrong please refresh the page and try again")

			return err
		})
		setCommentSuccess(true)
	}
	const handleInputComment = e => {
		e.preventDefault()
		setNewComment({ body: e.target.value, username: loggedInUser.username })
	}
	if (loggedInUser.username === articalAuthor) {
		return (
			<h3 className='error'>
				You cannot comment on your own article to comment please chose another
				article
			</h3>
		)
	}
	if (newComment === "" || newComment === " ") {
		setError("You cannot post an empty comment")
	}
	if (commentSuccess) {
		return <h3 className='success'>your comment has been posted</h3>
	}
	if (error) {
		return <h3 className='error'>{error}</h3>
	}
	return (
		<div className='add-comment-form'>
			<label className='label'>Add comment: </label>
			<textarea
				disabled={articalAuthor === loggedInUser.username}
				name='add-comment'
				type='text'
				className='add-comment'
				placeholder='add comment'
				value={newComment.body}
				onChange={handleInputComment}
			/>
			<button
				disabled={articalAuthor === loggedInUser.username}
				onClick={submitNewComment}
				className='btn submit-comment'
			>
				Post
			</button>
		</div>
	)
}
