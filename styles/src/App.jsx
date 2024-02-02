// Importing styled-components
import styled from 'styled-components';

const Wrapper = styled.section`
	font-size: 1.5em;
	padding: 4em;
	background: DarkOliveGreen;
	text-align: center;
`;

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: AliceBlue;
	margin-bottom: 1rem;
`;

function App() {
	return (
		<Wrapper>
			<Title>Hello, World!</Title>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
				quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
			</p>
		</Wrapper>
	);
}

export default App;
