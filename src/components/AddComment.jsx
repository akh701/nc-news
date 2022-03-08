import React from "react"

export default function AddComment() {
	return (
		<form className='add-comment-form'>
			<label className='label'>Add comment: </label>
			<textarea
				name='add-comment'
				type='text'
				className='add-comment'
				placeholder='add comment'
			/>
			<button className='btn submit-comment'>Add comment</button>
		</form>
	)
}
