import './App.css';
import Welcome from './components/Welcome';

function App() {
	let today = new Date(Date.now()).toLocaleDateString();
	return (
		<div className='main'>
			<Welcome
				userName='Manuel'
				today={today}
			/>
			<Welcome
				userName='Elena'
				today={today}
			/>
			<Welcome
				userName='Alexis'
				today={today}
			/>
		</div>
	);
}

export default App;
