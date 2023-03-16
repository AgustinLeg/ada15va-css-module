import { useState } from 'react';
import { Modal } from '../modal/Modal';
import { validateLogin } from '../../utils/validation';

export const LoginModal = ({ setUser }) => {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);

	const onLogin = (e) => {
		e.preventDefault();
		if (validateLogin(values.email, values.password)) {
			alert('pasooooo');
			setUser(values.email);
		}
	};

	const handleChange = (e) => {
		// const { name, value } = e.target;
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<button className="btn" onClick={openModal}>
				Iniciar Sesion
			</button>

			<Modal title="Login" isOpen={isOpen} setIsOpen={setIsOpen}>
				<form onSubmit={onLogin}>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							autoComplete="off"
							name="email"
							value={values.email}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							autoComplete="off"
							id="password"
							name="password"
							value={values.password}
							onChange={handleChange}
						/>
					</div>
					<button>Iniciar Sesion</button>
				</form>
			</Modal>
		</>
	);
};
