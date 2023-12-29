import React from 'react';
import { PropTypes } from 'prop-types';

function Header({ searchQuery, query }) {
	return (
		<div className='note-app__header'>
			<h1>Notes</h1>
			<div className='note-search'>
				<input
					type='text'
					placeholder='Find Notes ...'
					onChange={searchQuery}
					value={query}
				/>
			</div>
		</div>
	);
}

Header.propTypes = {
	searchQuery: PropTypes.func,
	query: PropTypes.string,
};

export default Header;
