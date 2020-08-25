import React from 'react';

const SearchSelect = ({ name, optionsList }) => {
	return (
		<select name={name}>
			{optionsList.map((option, id) => (
				<option value={option} key={id}>
					{option}
				</option>
			))}
		</select>
	);
};

export default SearchSelect;
