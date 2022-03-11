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
					{loggedInUser.username ? "Pick user" : "login"}
				</li>
				<li className='dropdown-content'>
					<ul>
						{allUsers.map((user, index) => {
							return (
								<li
									className='users'
									key={index}
									onClick={() => setLoggedInUser(user)}
								>
									{user.username}
								</li>
							)
						})}
					</ul>
				</li>
			</ul>
		</>
	)
}
