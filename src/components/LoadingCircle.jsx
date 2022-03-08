import React from "react"
import loadingCircleCss from "../loadingCircleCss.css"

export default function LoadingCircle() {
	return (
		<div className='lds-roller'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
