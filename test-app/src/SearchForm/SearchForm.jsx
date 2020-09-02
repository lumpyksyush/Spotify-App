import React, { Component } from 'react';
import { searchType, searchLimits } from '../utils/consts';
import SearchField from './SearchField';
import SearchSelect from './ButtonsList/SearchSelect';
import SearchRadioButton from './ButtonsList/SearchRadioButton';
import SearchButton from './ButtonsList/SearchButton';

export default class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.search = this.search.bind(this);
		this.changeSearchValue = this.changeSearchValue.bind(this);

		this.state = {
			searchValue: '',
		};
	}

	search() {
		alert(this.state.searchValue);
	}

	changeSearchValue(event) {
		this.setState(() => {
			return {
				[event.target.searchValue]: event.target.value,
			};
		});
	}

	render() {
		return (
			<div className="search-form__container">
				<SearchField
					searchValue={this.state.searchValue}
					changeSearchValue={this.changeSearchValue}
				/>
				<SearchSelect name="type" optionsList={searchType} />
				{searchLimits.map((option) => (
					<SearchRadioButton
						name="limit"
						key={option}
						label={option}
						value={option}
					/>
				))}
				<SearchButton onClick={this.search} />
			</div>
		);
	}
}
