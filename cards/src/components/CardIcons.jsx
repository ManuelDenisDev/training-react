import './CardIcons.css';

// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faDollarSign, faEnvelope, faAddressBook, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

function CardIcons() {
	return (
		<div className='card-icons'>
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
	);
}

export default CardIcons;
