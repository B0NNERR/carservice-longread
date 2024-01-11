import styles from './style.module.sass';

const Gallery = () => {
	return (
		<section className={styles.section}>
			<div className={styles.grid}>
				<div
					className={`${styles.item} ${styles['item-1']} ${styles['image-1']}`}
				></div>
				<div
					className={`${styles.item} ${styles['item-2']} ${styles['image-2']}`}
				></div>
				<div
					className={`${styles.item} ${styles['item-3']} ${styles['image-3']}`}
				></div>
				<div
					className={`${styles.item} ${styles['item-4']} ${styles['image-4']}`}
				></div>
			</div>
		</section>
	);
};

export default Gallery;
