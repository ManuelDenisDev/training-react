// Estilos
import './App.css';

// Componentes
import CardWrapper from './components/CardWrapper';

// Imagenes
import freelancer1 from './assets/img/freelancer1.jpg';

// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleCheck, faDollarSign, faEnvelope, faAddressBook, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

// Componente principal
function App() {
	// Datos de prueba
	const freelancer = [
		{
			id: 0,
			firstName: 'MR',
			lastName: 'ROBERT',
			role: 'UI/UX Designer',
			rate: 85,
			rating: 5,
			reviews: 105,
		},
	];

	return (
		<div className='card-container'>
			<CardWrapper>
				<div className='img-container'>
					<div className='img-wrapper'>
						<img
							src={freelancer1}
							alt='freelancer-one'
						/>
						<span className='dot'></span>
					</div>
				</div>
				<div className='info-container'>
					<h3>MR ROBERT</h3>
					<p>UI/UX Designer</p>
					<div className='hire'>
						<div>
							Rate: <span className='price'>$85/hr</span>
						</div>
						<button className='hire-button'>Hire ME</button>
					</div>
					<div className='rating'>
						<div>5.0</div>
						<div>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
						<div>(105 Reviews)</div>
					</div>
				</div>
				<div className='icons-container'>
					<div className='verified'>
						<FontAwesomeIcon icon={faCircleCheck} />
						<span>Verified</span>
					</div>
					<div className='icons-circle'>
						<span className='circle available'>
							<FontAwesomeIcon icon={faDollarSign} />
						</span>
						<span className='circle available'>
							<FontAwesomeIcon icon={faEnvelope} />
						</span>
						<span className='circle not-available'>
							<FontAwesomeIcon icon={faAddressBook} />
						</span>
						<span className='circle not-available'>
							<FontAwesomeIcon icon={faPhoneFlip} />
						</span>
					</div>
				</div>
			</CardWrapper>
		</div>
	);
}

export default App;
