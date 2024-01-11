import ReactDOM from 'react-dom';

import styles from './style.module.sass';

const Modal = ({ isActive, setActive, children }) => {
	return ReactDOM.createPortal(
		<div
			className={`${styles.modal} ${isActive ? styles.active : ''}`}
			onClick={() => setActive(false)}
		>
			<div
				className={styles['modal-content']}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					className={styles.close}
					onClick={() => setActive(false)}
				>
					✕
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
