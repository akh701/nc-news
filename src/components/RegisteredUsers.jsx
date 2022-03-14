import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import * as api from "../api"
import { UserContext } from "../contexts/UserContext"

export default function RegisteredUsers() {
	const { loggedInUser, setLoggedInUser } = useContext(UserContext)
	const [allUsers, setAllUsers] = useState([])
	let navigate = useNavigate()

	useEffect(() => {
		api.fetchUsers().then(users => {
			setAllUsers(users)
		})
	}, [])

	const handleLogOut = () => {
		setLoggedInUser("")
		navigate("/")
	}

	return (
		<>
			<span onClick={handleLogOut} className='logout'>
				{loggedInUser.username ? "Log Out" : ""}
			</span>
			<ul className='dropdown login'>
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
