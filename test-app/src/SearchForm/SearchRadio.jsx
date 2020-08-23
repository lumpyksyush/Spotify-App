import React from 'react';

export const SearchRadio = ({ value, name }) => {
	return (
		<div>
			<input name={name} id={name} value={value} type="radio" />
		</div>
	);
};
