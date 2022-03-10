import { useEffect, useState, useContext } from "react"
import * as api from "../api"
import { UserContext } from "../contexts/UserContext"

export default function RegisteredUsers() {
	const { loggedInUser, setLoggedInUser } = useContext(UserContext)
	const [allUsers, setAllUsers] = useState([])

	useEffect(() => {
		api.fetchUsers().then(users => {
			setAllUsers(users)
		})
	}, [])

	return (
		<>
			<ul className='dropdown'>
				<li className='dropbtn'>
					{loggedInUser.username ? "Choose another user" : "login"}
				</li>
				<div className='dropdown-content'>
					{allUsers.map((user, index) => {
						return (
							<button
								className='btn'
								key={index}
								onClick={() => setLoggedInUser(user)}
							>
								{user.username}
							</button>
						)
					})}
				</div>
			</ul>
		</>
	)
}
