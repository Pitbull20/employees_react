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
			data: [
				{ name: 'Alex.W', salary: 900, increase: false, id: 1 },
				{ name: 'Andrey.L', salary: 5000, increase: true, id: 2 },
				{ name: 'Danil.G', salary: 9000, increase: false, id: 3 },
			],
		};
		this.idCounter = this.state.data.length;
	}
	deletItem = id => {
		this.setState(({ data }) => {
			return {
				data: data.filter(el => el.id !== id),
			};
		});
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
			return {
				data: dataClone,
			};
		});
		this.idCounter++;
		console.log(this.idCounter);
	};
	render() {
		return (
			<div className='app'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={this.deletItem}
				/>
				<EmployeesAddForm onAddEmployees={this.addItem} />
			</div>
		);
	}
}

export default App;
