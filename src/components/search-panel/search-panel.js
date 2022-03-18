import './search-panel.css';
import { Component } from 'react';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}
	onUpdateSearch = e => {
		let term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	};
	render() {
		return (
			<input
				type='text'
				className='form-control search-input'
				placeholder='Знайти працівника'
				onChange={this.onUpdateSearch}
			/>
		);
	}
}

export default SearchPanel;
