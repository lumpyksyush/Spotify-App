import React from 'react';

const SearchRadioButton = ({ value, name, label }) => {
	return (
		<div>
			<input name={name} label={name} value={value} type="radio" />
			<label for={name}>{value}</label>
		</div>
	);
};
export default SearchRadioButton;
