import styles from './style.module.sass';

const Comments = () => {
	return (
		<section className={`container ${styles.section}`}>
			<div className={styles.grid}>
				<div className={`${styles.item} ${styles['item-1']}`}>
					<div className={styles.comment}>
						Моя машина кричала, как динозавр. Спасибо этой команде
						за то, что разобрались с моей проблемой!
					</div>
					<div className={styles.author}>Анатолий</div>
				</div>
				<div className={`${styles.item} ${styles['item-2']}`}>
					<div className={styles.comment}>
						Думал, мой движок сдох. Теперь он мурлычет, как котенок
						на клавиатуре.
					</div>
					<div className={styles.author}>Марат</div>
				</div>
			</div>
		</section>
	);
};

export default Comments;
