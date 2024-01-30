import './MembersList.css';

function MembersList() {
	const members = [
		{
			id: 1,
			first_name: 'Ash',
			age: 55,
		},
		{
			id: 2,
			first_name: 'Michael',
			age: 92,
		},
		{
			id: 3,
			first_name: 'Leela',
			age: 1,
		},
		{
			id: 4,
			first_name: 'Bert',
			age: 77,
		},
		{
			id: 5,
			first_name: 'Oralee',
			age: 24,
		},
		{
			id: 6,
			first_name: 'Vida',
			age: 52,
		},
		{
			id: 7,
			first_name: 'Tory',
			age: 29,
		},
		{
			id: 8,
			first_name: 'Simone',
			age: 41,
		},
		{
			id: 9,
			first_name: 'Jemie',
			age: 8,
		},
		{
			id: 10,
			first_name: 'Saraann',
			age: 59,
		},
	];

	const filteredMembers = members.filter((member) => member.age < 50);

	// console.log(filteredMembers);

	return (
		<div className='container'>
			<ul>
				{filteredMembers.map((member) => {
					return (
						<li key={member.id}>
							<div>
								<strong>Name: </strong>
								{member.first_name}
							</div>
							<div>
								<strong>Age: </strong>
								{member.age}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default MembersList;
