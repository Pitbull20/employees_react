import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({ data, onDelete, onToggleIncrease, onToggleRise }) {
	let element = data.map(item => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleIncrease={() => onToggleIncrease(id)}
				onToggleRise={() => onToggleRise(id)}
			/>
		);
	});

	return <ul className='app-list list-group'>{element}</ul>;
}

export default EmployeesList;
