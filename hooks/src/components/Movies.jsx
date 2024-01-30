import './Movies.css';

// Hooks
import { useState } from 'react';

// Data
import movies from '../db/movies.json';

// Components
import MoviesWrapper from './Movies/MoviesWrapper';
import MoviesMain from './Movies/MoviesMain';
import Card from './Movies/Card';

function Movies() {
	// Hooks - useState

	const [fadeIn, setFadeIn] = useState(true);
	const changeVisibility = (toshow) => {
		setFadeIn(false);
		setTimeout(() => {
			setFadeIn(true);
			setMoviesList(toshow);
		}, 500);
	};

	const [moviesList, setMoviesList] = useState(movies);

	const filterAction = () => {
		let actionMovies = movies.filter((movie) => movie.genre.includes('Action'));
		changeVisibility(actionMovies);
	};

	const filterComedy = () => {
		let comedyMovies = movies.filter((movie) => movie.genre.includes('Comedy'));
		changeVisibility(comedyMovies);
	};

	const filterHorror = () => {
		let horrorMovies = movies.filter((movie) => movie.genre.includes('Horror'));
		changeVisibility(horrorMovies);
	};

	const filterDrama = () => {
		let dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
		changeVisibility(dramaMovies);
	};

	const filterAll = () => {
		changeVisibility(movies);
	};

	return (
		<MoviesMain>
			<div className='actions'>
				<button onClick={filterAll}>All</button>
				<button onClick={filterAction}>Action</button>
				<button onClick={filterComedy}>Comedy</button>
				<button onClick={filterHorror}>Horror</button>
				<button onClick={filterDrama}>Drama</button>
			</div>
			<MoviesWrapper>
				{moviesList.map((movie) => (
					<Card
						key={movie.id}
						movie={movie}
						fadeIn={fadeIn}
					/>
				))}
			</MoviesWrapper>
		</MoviesMain>
	);
}

export default Movies;
