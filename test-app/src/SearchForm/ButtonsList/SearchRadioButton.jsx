import React from 'react';

const SearchRadioButton = ({ value, name, label }) => {
	return (
		<div>
			<input name={name} label={name} value={value} type="radio" />
			<label htmlFor={name}>{value}</label>
		</div>
	);
};
export default SearchRadioButton;
