import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: localStorage.getItem('data')
				? JSON.parse(localStorage.getItem('data'))
				: [
						{
							name: 'Alex.W',
							salary: 900,
							rise: true,
							increase: false,
							id: 1,
						},
						{
							name: 'Andrey.L',
							salary: 5000,
							rise: false,
							increase: true,
							id: 2,
						},
						{
							name: 'Danil.G',
							salary: 9000,
							rise: false,
							increase: false,
							id: 3,
						},
				  ],
			term: '',
			filter: 'all',
		};
		this.idCounter = this.state.data.length;
	}
	deletItem = id => {
		this.setState(({ data }) => {
			return {
				data: data.filter(el => el.id !== id),
			};
		});
		localStorage.setItem(
			'data',
			JSON.stringify(this.state.data.filter(el => el.id !== id))
		);
	};
	addItem = (name, salary) => {
		this.setState(({ data }) => {
			let dataClone = data.slice();
			dataClone.push({
				name: name,
				salary: salary,
				increase: false,
				id: this.idCounter,
			});
			localStorage.setItem('data', JSON.stringify(dataClone));
			return {
				data: dataClone,
			};
		});
		this.idCounter++;
	};
	onToggleIncrease = id => {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = { ...old, increase: !old.increase };
			const newArr = [
				...data.slice(0, index),
				newItem,
				...data.slice(index + 1),
			];

			return {
				data: newArr,
			};
		});
	};
	onToggleRise = id => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, rise: !item.rise };
				}
				return item;
			}),
		}));
	};
	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(el => el.name.indexOf(term) > -1);
	};
	onUpdateSearch = term => {
		this.setState({ term });
	};
	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(el => el.rise);
			case 'moreThen1000':
				return items.filter(el => el.salary > 1000);

			default:
				return items;
		}
	};
	onFilterSelect = filter => {
		this.setState({ filter });
	};
	render() {
		const { data, term, filter } = this.state;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);
		const calcEmployeesToIncrease = data.reduce((accum, item) => {
			if (item.increase) {
				accum += 1;
			}
			return accum;
		}, 0);
		return (
			<div className='app'>
				<AppInfo
					numberOfEmployees={data.length}
					numberOfIncrease={calcEmployeesToIncrease}
				/>
				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter
						filter={this.state.filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deletItem}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise}
				/>
				<EmployeesAddForm onAddEmployees={this.addItem} />
			</div>
		);
	}
}

export default App;
