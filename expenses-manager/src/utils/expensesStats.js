export const expensesStats = (itemsList) => {
	let incomes = 0,
		expenses = 0,
		total = 0;

	if (itemsList.length === 0) {
		return [0, 0];
	}
	itemsList.forEach((element) => {
		if (element.money.income) {
			incomes += +element.money.amount;
		} else {
			expenses += +element.money.amount;
		}
	});
	total = Math.abs(incomes) + Math.abs(expenses);
	let incomePercentage = Math.round((incomes / total) * 100);
	let expensesPercentage = Math.round((expenses / total) * 100);
	return [incomePercentage, expensesPercentage];
};
