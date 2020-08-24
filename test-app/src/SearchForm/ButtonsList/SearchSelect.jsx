import React from 'react';

const SearchSelect = ({ name, options }) => {
	return (
		<select name={name}>
			{options.map((option, id) => (
				<option value={option} key={id}>
					{option}
				</option>
			))}
		</select>
	);
};

export default SearchSelect;
