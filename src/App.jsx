import { useState } from 'react';
import './App.css';
import { Inputs } from './components/ejercicios/Inputs';
import { Total } from './components/ejercicios/Total';
import { Navbar } from './components/navbar/Navbar';

function App() {
	const [user, setUser] = useState(null);
	const [values, setValues] = useState({
		uno: 0,
		dos: 0,
	});

	return (
		<div className="container">
			<Navbar setUser={setUser} user={user} />
			<div>
				<Inputs values={values} setValues={setValues} />
				<Total values={values} />
			</div>
		</div>
	);
}

export default App;
