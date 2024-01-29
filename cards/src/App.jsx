// Estilos
import './App.css';

// Componentes
import CardsContainer from './components/CardsContainer';
import CardWrapper from './components/CardWrapper';
import CardImg from './components/CardImg';
import CardInfo from './components/CardInfo';
import CardIcons from './components/CardIcons';

// Datos
import { freelancers } from './db/freelancer';

// Componente principal
function App() {
	// Para visualizar los datos en consola
	console.log(freelancers);
	return (
		<CardsContainer>
			{freelancers.map((freelancer) => {
				return (
					<CardWrapper key={freelancer.id}>
						<CardImg freelancer={freelancer} />
						<CardInfo freelancer={freelancer} />
						<CardIcons />
					</CardWrapper>
				);
			})}
		</CardsContainer>
	);
}

export default App;
