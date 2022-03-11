import { useContext, useState } from "react"
import * as api from "../api"
import { UserContext } from "../contexts/UserContext"
import LoadingCircle from "./LoadingCircle"
import Popup from "./Popup"

export default function DeleteComment({
	comment_id,
	articalAuthor,
	commentAuthor,
	setDeleted,
	deleted,
}) {
	const { loggedInUser } = useContext(UserContext)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const [isOpen, setIsOpen] = useState(false)

	const togglePopup = () => {
		setIsOpen(!isOpen)
	}

	const handleCommentDeletion = () => {
		setIsLoading(true)
		api
			.deleteComment(comment_id)
			.then(() => {
				setIsLoading(false)
				setDeleted(true)
			})
			.then(err => {
				setError("something went wrong please refresh the page and try again")
				return err
			})
		setDeleted(false)
		togglePopup()
	}

	if (isLoading) {
		return (
			<h1>
				<LoadingCircle /> deleting
			</h1>
		)
	}
	if (error) {
		return <h3 className='error'>{error}</h3>
	}

	if (
		articalAuthor === loggedInUser.username ||
		commentAuthor === loggedInUser.username
	) {
		return (
			<>
				{/* {isOpen && deleted && (
					<Popup
						content={<h3 className='success'>your comment has been deleted</h3>}
						handleClose={togglePopup}
					/>
				)} */}
				<span onClick={handleCommentDeletion} className='comment-delete'>
					x
				</span>
			</>
		)
	} else {
		return null
	}
}
