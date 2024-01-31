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

export const itemsList = [
	{
		icons: [faSquare, faChampagneGlasses],
		data: { title: 'Food & Drinks', date: new Date('2022-08-24').toLocaleDateString() },
		money: { income: false, amount: 20 },
	},
	{
		icons: [faSquare, faBriefcase],
		data: { title: 'Freelancing Work', date: new Date('2021-08-31').toLocaleDateString() },
		money: { income: true, amount: 260 },
	},
	{
		icons: [faSquare, faCommentDollar],
		data: { title: 'Send Bizum to friend', date: new Date('2022-09-01').toLocaleDateString() },
		money: { income: false, amount: 50 },
	},

	{
		icons: [faSquare, faSackDollar],
		data: { title: 'Payroll', date: new Date('2022-09-01').toLocaleDateString() },
		money: { income: true, amount: 2500 },
	},
];
