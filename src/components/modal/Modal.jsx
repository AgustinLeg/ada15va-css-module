import styles from './Modal.module.css';

import { AiOutlineCloseCircle } from 'react-icons/ai';

// title string
// withButton boolean
// withOverlay boolean

export const Modal = ({
	isOpen,
	setIsOpen,
	children,
	title,
	withButton = true,
	withOverlay = true,
}) => {
	const closeModal = () => setIsOpen(false);

	return (
		<>
			{isOpen && (
				<div className={styles.container}>
					{withOverlay && (
						<div className={styles.overlay} onClick={closeModal} />
					)}
					<div className={styles.modal}>
						{withButton && (
							<button className={styles.btn} onClick={closeModal}>
								<AiOutlineCloseCircle size={20} />
							</button>
						)}
						<h2>{title}</h2>
						<div className="content">{children}</div>
					</div>
				</div>
			)}
		</>
	);
};
