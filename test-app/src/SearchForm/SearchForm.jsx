import React from 'react';
import SearchField from './SearchField';
import SearchSelect from './SearchSelect';
import SearchRadioButton from './SearchRadioButton';
import SearchButton from './SearchButton';

export default class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: '',
		};
	}
}
