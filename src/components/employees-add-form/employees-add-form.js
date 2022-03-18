import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
		};
	}
	onValueChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	onSubmit = (e, name, salary) => {
		e.preventDefault();
		if (name.length > 3 && name && salary) {
			this.props.onAddEmployees(name, salary);
			this.setState({
				name: '',
				salary: '',
			});
		}
	};
	render() {
		const { name, salary } = this.state;
		return (
			<div className='app-add-form'>
				<h3>Додайте працівника</h3>
				<form className='add-form d-flex'>
					<input
						type='text'
						className='form-control new-post-label'
						placeholder='Як його звати?'
						name='name'
						onChange={this.onValueChange}
						value={name}
					/>
					<input
						type='number'
						className='form-control new-post-label'
						placeholder='З/П в $?'
						name='salary'
						onChange={this.onValueChange}
						value={salary}
					/>

					<button
						type='submit'
						className='btn btn-outline-light'
						onClick={e => this.onSubmit(e, name, salary)}
					>
						Добавити
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;
