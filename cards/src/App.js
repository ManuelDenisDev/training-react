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
	return (
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
						Rate: <span>$85/hr</span>
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
				<div>
					<FontAwesomeIcon icon={faDollarSign} />
					<FontAwesomeIcon icon={faEnvelope} />
					<FontAwesomeIcon icon={faAddressBook} />
					<FontAwesomeIcon icon={faPhoneFlip} />
				</div>
			</div>
		</CardWrapper>
	);
}

export default App;
