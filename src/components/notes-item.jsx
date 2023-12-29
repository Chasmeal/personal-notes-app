import React from 'react';
import { showFormattedDate } from '../utils';
import { PropTypes } from 'prop-types';

import Button from './button';

function NoteItem({ note, handlerChange, onDelete }) {
	return (
		<div className='note-item'>
			<div className='note-item__content'>
				<h3 className='note-item__title'>{note?.title}</h3>
				<p className='note-item__date'>{showFormattedDate(note?.createdAt)}</p>
				<p className='note-item__body'>{note?.body}</p>
			</div>
			<div className='note-item__action'>
				<Button
					eventHandler={() => onDelete(note.id)}
					label='Delete'
					className='note-item__delete-button'
				/>
				<Button
					eventHandler={() => handlerChange(note.id)}
					label={note.archived ? 'Active' : 'Archive'}
					className='note-item__archive-button'
				/>
			</div>
		</div>
	);
}

NoteItem.propTypes = {
	note: PropTypes.array,
	onDelete: PropTypes.func,
	handlerChange: PropTypes.func,
};

export default NoteItem;
