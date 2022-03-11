import React from "react"
import RegisteredUsers from "./RegisteredUsers"

export default function LoginPage() {
	return (
		<main>
			<div className='login-page'>
				<h3>Please Login to be able to Comment or vote on an article</h3>
				<RegisteredUsers />
			</div>
		</main>
	)
}
