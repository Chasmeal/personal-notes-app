import React from 'react';
import PropTypes from 'prop-types';

import NoteItem from './notes-item';

const NotesList = ({ notes, onDelete, handlerChange }) => {
	return (
		<div className='note-app__body'>
			{notes?.length ? (
				<div className='notes-list'>
					{notes?.map((note) => (
						<NoteItem
							key={note.id}
							note={note}
							onDelete={onDelete}
							handlerChange={handlerChange}
						/>
					))}
				</div>
			) : (
				<p className='notes-list__empty-message'>There are no note inside.</p>
			)}
		</div>
	);
};

NotesList.propTypes = {
	onDelete: PropTypes.func,
	handlerChange: PropTypes.func,
	notes: PropTypes.array,
};

export default NotesList;
