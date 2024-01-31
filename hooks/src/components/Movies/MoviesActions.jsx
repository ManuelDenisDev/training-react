import './MoviesActions.css';

function MoviesActions(props) {
	return (
		<div className='actions'>
			<button onClick={props.onFilterAll}>All</button>
			<button onClick={props.onFilterAction}>Action</button>
			<button onClick={props.onFilterComedy}>Comedy</button>
			<button onClick={props.onFilterHorror}>Horror</button>
			<button onClick={props.onFilterDrama}>Drama</button>
		</div>
	);
}

export default MoviesActions;
