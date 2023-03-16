import styles from './Navbar.module.css';

import { LoginModal } from '../auth/LoginModal';
import { RegisterModal } from '../auth/RegisterModal';

export const Navbar = ({ user, setUser }) => {
	return (
		<nav className={styles.nav}>
			<h1>Clase 13</h1>

			{user && <span>{user}</span>}
			{!user && (
				<div className={styles.auth_container}>
					<LoginModal setUser={setUser} />
					<RegisterModal />
				</div>
			)}
		</nav>
	);
};
