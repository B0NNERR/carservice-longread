import styles from './style.module.sass';

const Experience = () => {
	return (
		<section className={`container ${styles.section}`}>
			<h2>Ощутите разницу</h2>

			<div className={styles.wrapper}>
				<div className={styles.image}>
					<div className={styles.figure}></div>
				</div>
				<div className={styles.advantages}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<h3 className={styles.title}>
								Ремонт высшего качества
							</h3>
							<div className={styles.description}>
								Ваша поездка заслуживает самого лучшего.
								Испытайте оптимальный уход за автомобилем, как
								никогда раньше.
							</div>
						</li>
						<li className={styles.item}>
							<h3 className={styles.title}>
								Квалифицированный персонал
							</h3>
							<div className={styles.description}>
								Наши механики подобраны вручную и имеют за
								плечами многолетний опыт работы.
							</div>
						</li>
						<li className={styles.item}>
							<h3 className={styles.title}>
								Быстрое время выполнения заказа
							</h3>
							<div className={styles.description}>
								Мы обещаем, что ваша машина не останется у нас
								на ночь
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Experience;
