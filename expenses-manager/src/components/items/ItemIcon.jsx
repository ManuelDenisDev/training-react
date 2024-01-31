import './ItemIcon.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ItemIcon(props) {
	return (
		<div className={`item-icon ${props.size || 'fa-4x'} flex-20 flex-center`}>
			<span className='fa-layers fa-fw fa-xl' onClick={props.onClick || null}>
				<FontAwesomeIcon icon={props.icons[0]} className={props.classes.bgColor} />
				<FontAwesomeIcon icon={props.icons[1]} className={props.classes.color} inverse transform='shrink-8' />
			</span>
		</div>
	);
}

export default ItemIcon;
