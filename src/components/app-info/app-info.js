import './app-info.css';

function AppInfo(props) {
	const { numberOfEmployees, numberOfIncrease } = props;
	return (
		<div className='app-info'>
			<h1>Облік працівників компанії </h1>
			<h2>Загальна кількість працівників: {numberOfEmployees}</h2>
			<h2>Премію отримають: {numberOfIncrease}</h2>
		</div>
	);
}

export default AppInfo;
