import ReactDOM from 'react-dom';

import styles from './style.module.sass';

const Spinner = () => {
	return ReactDOM.createPortal(
		<div className={styles.wrapper}>
			<div className={styles.spinner1}>
				<div className={styles.spinner2}></div>
			</div>
		</div>,
		document.getElementById('spinner')
	);
};

export default Spinner;
