import React from 'react';

const SearchField = ({ changeSearchValue, searchValue }) => {
	return <input type="text" onChange={changeSearchValue} value={searchValue} />;
};
export default SearchField;
