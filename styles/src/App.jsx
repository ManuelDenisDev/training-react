// Importing styled-components
import styled from 'styled-components';

const Wrapper = styled.section.attrs((props) => ({
	id: 'header',
	size: props.size || '1.5em',
}))`
	font-size: ${(props) => props.size};
	padding: 4em;
	background: ${(props) => (props.darkTheme ? 'DarkSlateGrey' : 'DarkOliveGreen')};
	text-align: center;

	&:hover h1 {
		color: SkyBlue;
	}
	h1 {
		font-size: 1.5em;
		text-align: center;
		color: AliceBlue;
		margin-bottom: 1rem;
		p {
			color: YellowGreen;
		}
	}
`;
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: AliceBlue;
	margin-bottom: 1rem;
`;

const Paragraph = styled(Title)`
	color: YellowGreen;
`;

function App() {
	return (
		<Wrapper darkTheme size={'1em'}>
			<h1>
				Hello, World!
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
				</p>
			</h1>
		</Wrapper>
	);
}

export default App;
