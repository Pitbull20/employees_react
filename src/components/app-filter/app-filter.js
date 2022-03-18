import './app-filter.css';

function AppFilter(props) {
	const buttnonsData = [
		{ name: 'all', label: 'Всі працівники' },
		{ name: 'rise', label: 'На підвищення' },
		{ name: 'moreThen1000', label: 'З/П більше 1000$' },
	];
	const buttons = buttnonsData.map(({ name, label }) => {
		const active = props.filter === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light';
		return (
			<button
				className={`btn ${clazz}`}
				onClick={() => props.onFilterSelect(name)}
				type='button'
				key={name}
			>
				{label}
			</button>
		);
	});
	return <div className='btn-groupe'>{buttons}</div>;
}

export default AppFilter;
