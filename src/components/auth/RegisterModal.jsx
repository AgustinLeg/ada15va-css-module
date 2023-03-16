import styles from './Auth.module.css';

import { useState } from 'react';
import { Modal } from '../modal/Modal';

export const RegisterModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);

	return (
		<>
			<button onClick={openModal} className={styles['btn-login']}>
				Crear Cuenta
			</button>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Register">
				<form>
					<div>
						<label htmlFor="name">Nombre</label>
						<input type="text" id="name" />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="text" id="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<button>Iniciar Sesion</button>
				</form>
			</Modal>
		</>
	);
};
