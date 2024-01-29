import './CardInfo.css';

// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardInfo(props) {
	return (
		<div className='info-container'>
			<h3>
				{props.freelancer.first_name}
				{` `}
				{props.freelancer.last_name}
			</h3>
			<p>{props.freelancer.role}</p>
			<div className='hire'>
				<div>
					Rate: <span className='price'>${props.freelancer.fee}/hr</span>
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
				<div>({props.freelancer.reviews} Reviews)</div>
			</div>
		</div>
	);
}

export default CardInfo;
