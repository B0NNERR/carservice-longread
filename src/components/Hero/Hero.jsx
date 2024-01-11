import Header from '../Header/Header';

import styles from './style.module.sass';

const Hero = ({ setTheme, theme }) => {
	return (
		<section className={`container ${styles.section}`}>
			<Header setTheme={setTheme} theme={theme}></Header>

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
