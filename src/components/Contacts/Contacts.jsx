import styles from './style.module.sass';

const Contacts = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.contacts}>
				<div className={styles.container}>
					<div className={styles.name}>Адрес:</div>
					<div className={styles.value}>
						Альметьевск, ул. Шевченко, дом 37
					</div>
				</div>
				<div className={styles.container}>
					<div className={styles.name}>Телефон:</div>
					<div className={styles.value}>+7 (999) - 999 - 99 - 99</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
