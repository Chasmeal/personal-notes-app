import React from 'react';
import NotesList from './note-list';
import NoteInput from './note-input';
import { PropTypes } from 'prop-types';

function SectionNotes({
	onDelete,
	handlerChange,
	activeNotes,
	archiveNotes,
	createNotes,
}) {
	return (
		<div className='note-app__body'>
			<NoteInput createNotes={createNotes} />
			<h2>Active Notes</h2>
			<NotesList
				notes={activeNotes}
				onDelete={onDelete}
				handlerChange={handlerChange}
			/>
			<h2>Archived Notes</h2>
			<NotesList
				notes={archiveNotes}
				onDelete={onDelete}
				handlerChange={handlerChange}
			/>
		</div>
	);
}

SectionNotes.propTypes = {
	activeNotes: PropTypes.array,
	archiveNotes: PropTypes.array,
	onDelete: PropTypes.func,
	handlerChange: PropTypes.func,
	createNotes: PropTypes.func,
	archived: PropTypes.bool,
};

export default SectionNotes;
