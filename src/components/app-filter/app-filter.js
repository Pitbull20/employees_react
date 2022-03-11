import './app-filter.css';

function AppFilter() {
	return (
		<div className="btn-groupe">
			<button 
				className="btn btn-light" 
				type='button'>
				Всі працівники
			</button>
			<button 
				className="btn btn-outline-light" 
				type='button'>
				На підвищення
			</button>
			<button 
				className="btn btn-outline-light" 
				type='button'>
				З/П більше 1000$
			</button>
		</div>
	);
}

export default AppFilter;