// Hooks
import { useState, useEffect } from 'react';

// Components
import Wrapper from './wrappers/Wrapper';
import ItemContainer from './wrappers/ItemContainer';
import ItemIcon from './items/ItemIcon';
import ItemInfo from './items/ItenInfo';
import ItemCost from './items/ItemCost';

// Data
import { itemsList, classes } from '../db/items';

// Icons
import { faChampagneGlasses, faSquare, faBriefcase, faCommentDollar, faSackDollar, faBoltLightning, faCar } from '@fortawesome/free-solid-svg-icons';
import ExpensesFilters from './ExpensesFilters';

function Expenses(props) {
	const [expenses, setNewExpenses] = useState(itemsList);

	// let expense = {};

	const getIcons = (category) => {
		switch (category) {
			case 'incoming':
				return [faSquare, faBriefcase];
			case 'transfer':
				return [faSquare, faSackDollar];
			case 'car':
				return [faSquare, faCar];
			case 'bizum':
				return [faSquare, faCommentDollar];
			case 'bill':
				return [faSquare, faChampagneGlasses];
			case 'electricity':
				return [faSquare, faBoltLightning];
			default:
				console.log(`category ${category} not found`);
		}
	};

	useEffect(() => {
		if (Object.keys(props.onNewExpense).length > 0) {
			const expense = {
				icons: getIcons(props.onNewExpense.category),
				classes: classes[props.onNewExpense.category],
				data: { title: props.onNewExpense.title, date: new Date(Date.now()).toLocaleDateString() },
				money: { income: props.onNewExpense.isIncome, amount: props.onNewExpense.amount },
			};

			setNewExpenses([...expenses, expense]);
		}
	}, [props.onNewExpense]);

	return (
		<>
			<ExpensesFilters months={expenses} />
			<Wrapper
				content={expenses.map((item, index) => {
					return (
						<ItemContainer key={index}>
							<ItemIcon icons={item.icons} classes={item.classes} />
							<ItemInfo data={item.data} />
							<ItemCost money={item.money} />
						</ItemContainer>
					);
				})}
			/>
		</>
	);
}

export default Expenses;
