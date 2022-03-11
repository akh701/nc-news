import React, { useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import * as api from "../api"
import { UserContext } from "../contexts/UserContext"
import Popup from "./Popup"
import LoadingCircle from "./LoadingCircle"

export default function AddComment({
	articalAuthor,
	commentSuccess,
	setCommentSuccess,
}) {
	const [newComment, setNewComment] = useState({ body: "", username: "" })
	const { loggedInUser } = useContext(UserContext)
	const [error, setError] = useState(null)
	// const [commentSuccess, setCommentSuccess] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const { article_id } = useParams()
	let navigate = useNavigate()

	const [isOpen, setIsOpen] = useState(false)

	const togglePopup = () => {
		setIsOpen(!isOpen)
		if (isOpen) setNewComment(currComment => ({ ...currComment, body: "" }))
	}

	const submitNewComment = () => {
		if (!loggedInUser.username) {
			navigate("/login")
		}

		if (newComment.body.length) {
			setIsLoading(true)
			api
				.postNewComment(article_id, newComment)
				.then(() => {
					// const postedComment = { ...comment }
					setIsLoading(false)
					setCommentSuccess(true)

					// setComments(currentComments => {
					// 	const newCurrentComments = { ...currentComments, postedComment }
					// 	return newCurrentComments
					// })
				})
				.catch(err => {
					setError("something went wrong please refresh the page and try again")
					setIsLoading(false)
					return err
				})
		}
		setCommentSuccess(false)

		togglePopup()
	}
	const handleInputComment = e => {
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
	if (isLoading) {
		return (
			<h1>
				<LoadingCircle /> Posting
			</h1>
		)
	}

	if (error) {
		return <h3 className='error'>{error}</h3>
	}
	return (
		<div className='add-comment-container'>
			{isOpen && commentSuccess && (
				<Popup
					content={<h3 className='success'>your comment has been posted</h3>}
					handleClose={togglePopup}
				/>
			)}
			{isOpen && newComment.body.length === 0 && (
				<Popup
					content={<h3 className='error'>You cannot post an empty comment</h3>}
					handleClose={togglePopup}
				/>
			)}

			<div className='comment-label'>Add comment: </div>
			<div className='comment-box'>
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
		</div>
	)
}
