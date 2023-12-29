import { useState, useEffect } from 'react';
import { getInitialData } from './utils';
import SectionNotes from './components/section-notes';
import Header from './components/header';

function App() {
	const [query, setQuery] = useState('');
	const [notes, setNotes] = useState(getInitialData());
	const [activeNotes, setActiveNotes] = useState('');
	const [archivedNotes, setArchivedNotes] = useState('');

	useEffect(() => {
		setActiveNotes(notes.filter((note) => note.archived === false));
		setArchivedNotes(notes.filter((note) => note.archived === true));
	}, [notes]);

	const createHandler = (note) => {
		setNotes([...notes, note]);
	};

	const removeHandler = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
	};

	const handlerChange = (id) => {
		setNotes(
			notes.map((note) => {
				if (note.id === id) {
					return { ...note, archived: !note.archived };
				}
				return note;
			})
		);
	};

	useEffect(() => {
		if (query.length) {
			setActiveNotes(
				activeNotes.filter((note) =>
					note.title.toLowerCase().includes(query.toLowerCase())
				)
			);
			setArchivedNotes(
				archivedNotes.filter((note) =>
					note.title.toLowerCase().includes(query.toLowerCase())
				)
			);
		} else {
			setActiveNotes(notes.filter((note) => note.archived === false));
			setArchivedNotes(notes.filter((note) => note.archived === true));
		}
	}, [query]);

	return (
		<>
			<Header
				query={query}
				searchQuery={(e) => {
					setQuery(e.target.value);
				}}
				updateNotes={setNotes}
			/>
			<SectionNotes
				createNotes={createHandler}
				activeNotes={activeNotes}
				archiveNotes={archivedNotes}
				onDelete={removeHandler}
				handlerChange={handlerChange}
			/>
		</>
	);
}

export default App;
