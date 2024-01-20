import Header from '../Header/Header';

import styles from './style.module.sass';

const Hero = () => {
	return (
		<section className={`container ${styles.section}`}>
			<Header></Header>

			<h1 className={styles.hero}>repair</h1>

			<div className={styles.description}>
				Для решения проблем с автомобилем, которые никуда не денутся. У
				нас есть электроинструменты, у вас есть лошадиные силы. Давайте
				запустим эти двигатели и вернем вас на дорогу!
			</div>
		</section>
	);
};

export default Hero;
