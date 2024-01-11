import styles from './style.module.sass';

const Promo = ({ setActive }) => {
	return (
		<section className={`container ${styles.section}`}>
			<h2 className={styles.title}>Начать с нами</h2>
			<div className={styles.subtitle}>
				Надоело это ворчание и стоны под капотом? Давайте починим этого
				зверя. Нажмите ниже, чтобы записаться на прием.
			</div>
			<div className={styles['btn-wrapper']}>
				<button
					className={styles.button}
					onClick={() => setActive(true)}
				>
					Почини мою машину
				</button>
			</div>

			<div className={styles.figure}>
				<div
					className={`${styles.ellipse} ${styles['ellipse-1']}`}
				></div>
				<div
					className={`${styles.ellipse} ${styles['ellipse-2']}`}
				></div>
			</div>
		</section>
	);
};

export default Promo;
