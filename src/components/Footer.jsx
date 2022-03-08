import React from "react"

export default function Footer() {
	return (
		<footer>
			<div className='footer ft-bottom'>
				&copy;
				{new Date().getFullYear()} Ahmed Hamdi
			</div>
		</footer>
	)
}
