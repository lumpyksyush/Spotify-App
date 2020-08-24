import React from 'react';
import { SEARCH_LIMITS, SEARCH_TYPE } from '../../utils/const';
import SearchField from './SearchField';
import SearchSelect from './ButtonsList/SearchSelect';
import SearchRadioButton from './ButtonsList/SearchRadioButton';
import SearchButton from './ButtonsList/SearchButton';

export default class SearchForm extends React.Component {
	constructor(props) {
		super(props);

		this.search = this.search.bind(this);
		this.changeSearchValue = this.changeSearchValue.bind(this);

		this.state = {
			searchValue: '',
		};
	}

	//search() method
	//changeSearchValue() method

	render() {
		return (
			<div className="search-form__container">
				<SearchField
					searchValue={this.state.searchValue}
					changeSearchValue={this.changeSearchValue}
				/>
				<SearchSelect name="type" optionsList={SEARCH_TYPE} />
				{SEARCH_LIMITS.map((option) => (
					<SearchRadioButton name="limit" label={option} value={option} />
				))}
				{/*<SearchButton onClick={this.search} />*/}
			</div>
		);
	}
}
