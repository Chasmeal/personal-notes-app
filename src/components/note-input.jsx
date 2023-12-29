import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function NoteInput({ createNotes }) {
	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');

	const changeHandler = (event) => {
		const inputTitle = event.target.value;

		if (inputTitle.length <= 50) {
			setTitle(inputTitle);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const timestamp = new Date().toISOString();

		createNotes({
			id: timestamp,
			title: title,
			body: note,
			archived: false,
			createdAt: timestamp,
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h2>Create Notes</h2>
				<div className='note-input__title__char-limit'>
					Remaining Characters: {50 - title.length}
				</div>
				<div className='note-input'>
					<input
						id='title'
						value={title}
						placeholder='Write a title ...'
						type='text'
						onChange={changeHandler}
						required
					/>
					<textarea
						id='note'
						value={note}
						placeholder='Write your Notes here ...'
						type='textarea'
						className='note-input__body'
						onChange={(e) => setNote(e.target.value)}
						required
					/>
					<button type='submit'>Create Note</button>
				</div>
			</form>
		</>
	);
}

NoteInput.propTypes = {
	createNotes: PropTypes.func,
};

export default NoteInput;
