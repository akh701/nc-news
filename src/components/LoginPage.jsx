import React from "react"
import RegisteredUsers from "./RegisteredUsers"

export default function LoginPage() {
	return (
		<main>
			<h3>Please Login to be able to Comment or vote on an article</h3>
			<RegisteredUsers />
		</main>
	)
}
