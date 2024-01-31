import './App.css';

// Hooks
import { useState } from 'react';

// Components
import Expenses from './components/Expenses';
import InputExpenses from './components/InputExpenses';

function App() {
	const [addExpense, setAddExpense] = useState({});
	const saveNewExpense = (newExpense) => {
		setAddExpense(newExpense);
	};

	return (
		<div className='main'>
			<h1>Transactions</h1>
			<InputExpenses onSaveNewExpense={saveNewExpense} />
			<Expenses onNewExpense={addExpense} />
		</div>
	);
}

export default App;
