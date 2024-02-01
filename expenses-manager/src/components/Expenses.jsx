// Hooks
import { useState, useEffect } from 'react';

// Components
import ExpensesFilters from './ExpensesFilters';
import Wrapper from './wrappers/Wrapper';
import ItemContainer from './wrappers/ItemContainer';
import ItemIcon from './items/ItemIcon';
import ItemInfo from './items/ItenInfo';
import ItemCost from './items/ItemCost';
import InfoAlert from './alerts/InfoAlert';

// Data
import { itemsList, classes } from '../db/items';

// Utils
import { expensesStats } from '../utils/expensesStats';
import { monthToString } from '../utils/monthToString';

// Icons
import { faChampagneGlasses, faSquare, faBriefcase, faCommentDollar, faSackDollar, faBoltLightning, faCar } from '@fortawesome/free-solid-svg-icons';

function Expenses(props) {
	const [filter, setFilter] = useState(monthToString(new Date().toLocaleDateString()));

	const [expenses, setNewExpenses] = useState(itemsList);

	const filteredMonth = (month) => {
		setFilter(month);
	};

	let stats = [0, 0];

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
				return [faSquare, faSquare];
		}
	};

	let filteredMonths = [];

	useEffect(() => {
		if (Object.keys(props.onNewExpense).length > 0) {
			const expense = {
				icons: getIcons(props.onNewExpense.category),
				classes: classes[props.onNewExpense.category],
				data: { title: props.onNewExpense.title, date: new Date(Date.now()).toLocaleDateString() },
				money: { income: props.onNewExpense.isIncome, amount: props.onNewExpense.amount },
			};

			setNewExpenses([...expenses, expense]);
			props.onClearExpense();
		}
	}, [props.onNewExpense]);

	if (filter !== '') {
		filteredMonths = expenses.filter((item) => monthToString(item.data.date) === filter);
		if (filteredMonths.length > 0) {
			stats = expensesStats(filteredMonths);
		} else {
			stats = [0, 0];
		}
	}

	return (
		<>
			<ExpensesFilters onStats={stats} onSelectMonth={filteredMonth} month={expenses} />
			<Wrapper
				content={
					(filteredMonths.length > 0 &&
						filteredMonths.map((item, index) => {
							return (
								<ItemContainer key={index}>
									<ItemIcon icons={item.icons} classes={item.classes} />
									<ItemInfo data={item.data} />
									<ItemCost money={item.money} />
								</ItemContainer>
							);
						})) || <InfoAlert info='No expenses availables.' />
				}
			/>
		</>
	);
}

export default Expenses;
