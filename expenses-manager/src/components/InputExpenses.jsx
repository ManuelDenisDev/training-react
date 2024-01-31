import './InputExpenses.css';

// Hooks
import { useState } from 'react';

// Components
import Wrapper from './wrappers/Wrapper';
import ItemIcon from './items/ItemIcon';

// Icons
import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

// Classes
import { classes } from '../db/items';

function InputExpenses(props) {
	// Estado para el click en el icono y mostrar el formulario
	const [visible, setVisible] = useState(false);
	const handleVisible = (e) => {
		e.stopPropagation();
		setVisible(!visible);
	};

	// Estado para el formulario
	const [expense, setExpense] = useState({
		title: '',
		amount: 0,
		category: 'incoming',
		isIncome: false,
	});

	// Funciones para el formulario
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(expense);
		props.onSaveNewExpense(expense);
		setExpense({
			title: '',
			amount: 0,
			category: 'incoming',
			isIncome: false,
		});
	};

	const handleInputChange = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		setExpense({
			...expense,
			[name]: value,
		});
	};

	return (
		<Wrapper
			content={
				<form className='new-expense' onSubmit={handleSubmit}>
					<ItemIcon onClick={handleVisible} icons={[faCircle, faPlus]} classes={classes.insurance} size='fa-2x' />
					<h2>Input Expense</h2>
					<div className={`form-container ${!visible && 'hidden'}`}>
						<label htmlFor='title'>
							<h3>Title</h3>
						</label>
						<input type='text' onChange={handleInputChange} value={expense.title} name='title' id='title' />
					</div>
					<div className={`form-container ${!visible && 'hidden'}`}>
						<label htmlFor='amount'>
							<h3>Amount</h3>
						</label>
						<input type='number' onChange={handleInputChange} value={expense.amount} name='amount' id='amount' max={10000} min={1} step={0.1} />
					</div>
					<div className={`form-container ${!visible && 'hidden'}`}>
						<label htmlFor='category'>
							<h3>Category</h3>
						</label>
						<select name='category' onChange={handleInputChange} value={expense.category} id='category'>
							<option value='incoming'>Incoming</option>
							<option value='transfer'>Transfer</option>
							<option value='car'>Car</option>
							<option value='bizum'>Bizum</option>
							<option value='bill'>Bill</option>
							<option value='electricity'>Electricity</option>
						</select>
					</div>
					<div className={`form-container ${!visible && 'hidden'} income-container`}>
						<label htmlFor='isIncome'>
							<h3>Is Income</h3>
						</label>
						<input type='checkbox' onChange={handleInputChange} checked={expense.isIncome} name='isIncome' id='isIncome' />
						<span className='checkmark' aria-hidden='true'></span>
					</div>
					<button className={`${!visible && 'hidden'}`} type='submit'>
						Add Record
					</button>
				</form>
			}
		/>
	);
}

export default InputExpenses;
