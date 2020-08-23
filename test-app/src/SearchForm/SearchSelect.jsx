import React from 'react';

export const SearchSelect = ({ name, options }) => {
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
