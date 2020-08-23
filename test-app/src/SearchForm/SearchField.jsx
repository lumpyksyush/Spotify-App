import React from 'react';

export const SearchField = ({ changeSearchValue, searchValue }) => {
	return <input type="text" onChange={changeSearchValue} value={searchValue} />;
};
