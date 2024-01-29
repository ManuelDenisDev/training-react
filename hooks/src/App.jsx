import './App.css';

// Hooks
import { useState } from 'react';
import Person from './components/Person';

function App() {
	// State
	// const [count, setCount] = useState(0);

	return (
		<div>
			<Person />
			{/* <h1>Counter</h1> */}
			{/* <p>Has clicado {count} veces</p> */}
			{/* <button onClick={() => setCount(count + 1)}>Pulsame</button> */}
		</div>
	);
}

export default App;
