import { useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as api from "../api"
import { UserContext } from "../contexts/UserContext"

export default function Votes({ votes, author }) {
	const [articeleVotes, setArticleVotes] = useState(votes)
	const { article_id } = useParams()
	const [error, setError] = useState(null)
	const { loggedInUser } = useContext(UserContext)
	let navigate = useNavigate()

	const handleClick = voteInc => {
		if (!loggedInUser.username) {
			navigate("/login")
			return
		}

		setArticleVotes(currentVote => currentVote + voteInc)
		api.patchArticleVote(article_id, voteInc).catch(err => {
			setArticleVotes(currentVote => currentVote - voteInc)
			setError("Couldn't update votes, please try again")
			return err
		})
	}
	
	if (error) {
		return <h1>{error}</h1>
	}
	return (
		<>
			{articeleVotes}{" "}
			<button
				disabled={
					articeleVotes === votes - 1 || author === loggedInUser.username
				}
				onClick={() => handleClick(-1)}
				className='btn vote decrement'
			>
				-
			</button>
			<button
				disabled={
					articeleVotes === votes + 1 || author === loggedInUser.username
				}
				onClick={() => handleClick(1)}
				className='btn vote increment'
			>
				+
			</button>
		</>
	)
}
