import './Counters.css';

// Hooks
import { useState } from 'react';

function Counters() {
	// State
	const [count, setCount] = useState(0);

	// Handlers
	const handlePlusOne = () => {
		setCount(count + 1);
	};

	const handleMinusOne = () => {
		setCount(count - 1);
	};

	const handleMultiplyByFive = () => {
		setCount(count * 5);
	};

	const handleDivideByFive = () => {
		setCount(count / 5);
	};

	const handleReset = () => {
		setCount(0);
	};

	const handleDivideByHundred = () => {
		if (count !== 0) {
			setCount(count / 100);
		} else {
			console.log('No se puede dividir por 0');
		}
	};

	return (
		<div className='container'>
			<p className='counters'>Has clicado {count} veces</p>
			<button
				type='button'
				onClick={handlePlusOne}>
				Pulsame para sumar
			</button>
			<button
				type='button'
				onClick={handleMinusOne}>
				Pulsame para restar
			</button>
			<button
				type='button'
				onClick={handleMultiplyByFive}>
				Pulsame para multiplicar por 5
			</button>
			<button
				type='button'
				onClick={handleDivideByFive}>
				Pulsame para dividir por 5
			</button>
			<button
				type='button'
				onClick={handleReset}>
				Pulsame para resetear
			</button>
			<button
				type='button'
				onClick={handleDivideByHundred}>
				Pulsame para dividir por 100
			</button>
		</div>
	);
}

export default Counters;
