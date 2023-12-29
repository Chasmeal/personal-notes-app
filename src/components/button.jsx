import React from 'react';
import { FaNoteSticky } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

const Button = ({ label, eventHandler, className }) => {
	return (
		<button type='button' onClick={eventHandler} className={className}>
			{label}
			{label === 'Delete' ? <FaTrash /> : <FaNoteSticky />}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string,
	eventHandler: PropTypes.func,
	className: PropTypes,
};

export default Button;
