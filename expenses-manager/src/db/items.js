// Icons
import {
	faChampagneGlasses,
	faSquare,
	faBurger,
	faGlassWater,
	faArrowDownLong,
	faArrowUpLong,
	faBriefcase,
	faCommentDollar,
	faSackDollar,
	faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

export const classes = {
	incoming: {
		bgColor: 'light-incoming',
		color: 'incoming',
	},
	transfer: {
		bgColor: 'light-transfer',
		color: 'transfer',
	},
	car: {
		bgColor: 'light-car',
		color: 'car',
	},
	bizum: {
		bgColor: 'light-bizum',
		color: 'bizum',
	},
	bill: {
		bgColor: 'light-bill',
		color: 'bill',
	},
	electricity: {
		bgColor: 'light-electricity',
		color: 'electricity',
	},
	insurance: {
		bgColor: 'light-insurance',
		color: 'insurance',
	},
};

export const itemsList = [
	{
		icons: [faSquare, faChampagneGlasses],
		classes: classes.bill,
		data: { title: 'Food & Drinks', date: new Date('2022-08-24').toLocaleDateString() },
		money: { income: false, amount: 20 },
	},
	{
		icons: [faSquare, faBriefcase],
		classes: classes.incoming,
		data: { title: 'Freelancing Work', date: new Date('2021-08-31').toLocaleDateString() },
		money: { income: true, amount: 260 },
	},
	{
		icons: [faSquare, faCommentDollar],
		classes: classes.bizum,
		data: { title: 'Send Bizum to friend', date: new Date('2022-09-01').toLocaleDateString() },
		money: { income: false, amount: 50 },
	},

	{
		icons: [faSquare, faSackDollar],
		classes: classes.incoming,
		data: { title: 'Payroll', date: new Date('2022-09-01').toLocaleDateString() },
		money: { income: true, amount: 2500 },
	},
];
