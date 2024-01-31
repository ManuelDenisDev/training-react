import './Expenses.css';

// Components
import Wrapper from './wrappers/Wrapper';
import ItemContainer from './wrappers/ItemContainer';
import ItemIcon from './items/ItemIcon';
import ItemInfo from './items/ItenInfo';
import ItemCost from './items/ItemCost';

// Data
import { itemsList } from '../db/items';

function Expenses() {
	return (
		<Wrapper>
			<ItemContainer>
				<ItemIcon icons={itemsList[0].icons} />
				<ItemInfo data={itemsList[0].data} />
				<ItemCost money={itemsList[0].money} />
			</ItemContainer>
		</Wrapper>
	);
}

export default Expenses;
