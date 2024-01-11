import styles from './style.module.sass';

const Footer = () => {
	return (
		<footer className={`container ${styles.footer}`}>
			<ul className={styles.list}>
				<li className={styles.link}>
					<a href='https://twitter.com/?lang=ru' target='_blank'>
						<svg
							width='32px'
							height='32px'
							viewBox='0 -2 20 20'
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
						>
							<g id='Page-1' strokeWidth={1} fillRule='evenodd'>
								<g
									id='Dribbble-Light-Preview'
									transform='translate(-60.000000, -7521.000000)'
								>
									<g
										id='icons'
										transform='translate(56.000000, 160.000000)'
									>
										<path
											d='M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705'
											id='twitter-[#154]'
										></path>
									</g>
								</g>
							</g>
						</svg>
					</a>
				</li>
				<li className={styles.link}>
					<a href='https://www.instagram.com/' target='_blank'>
						<svg
							height='32px'
							width='32px'
							version='1.1'
							id='Icons'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							viewBox='0 0 32 32'
							xmlSpace='preserve'
						>
							<path
								d='M23,0H9C4,0,0,4,0,9v6v8c0,5,4,9,9,9h14c5,0,9-4,9-9v-8V9C32,4,28,0,23,0z M16,10c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6
	S12.7,10,16,10z M22,7c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S22,8.1,22,7z'
							/>
						</svg>
					</a>
				</li>
				<li className={styles.link}>
					<a href='https://vk.com/' target='_blank'>
						<svg
							width='37px'
							height='37px'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M3.4 3.4C2 4.81333 2 7.07333 2 11.6V12.4C2 16.92 2 19.18 3.4 20.6C4.81333 22 7.07333 22 11.6 22H12.4C16.92 22 19.18 22 20.6 20.6C22 19.1867 22 16.9267 22 12.4V11.6C22 7.08 22 4.82 20.6 3.4C19.1867 2 16.9267 2 12.4 2H11.6C7.08 2 4.82 2 3.4 3.4ZM5.37333 8.08667C5.48 13.2867 8.08 16.4067 12.64 16.4067H12.9067V13.4333C14.58 13.6 15.8467 14.8267 16.3533 16.4067H18.72C18.4773 15.5089 18.0469 14.6727 17.4574 13.9533C16.8679 13.234 16.1326 12.6478 15.3 12.2333C16.0461 11.779 16.6905 11.1756 17.1929 10.461C17.6953 9.7464 18.045 8.93585 18.22 8.08H16.0733C15.6067 9.73334 14.22 11.2333 12.9067 11.3733V8.08667H10.7533V13.8467C9.42 13.5133 7.74 11.9 7.66666 8.08667H5.37333Z'
							/>
						</svg>
					</a>
				</li>
			</ul>
			<div className={styles.footnote}>
				© Created by{' '}
				<a href='https://t.me/timmur_kom' target='_blank'>
					Timur Gabdrashitov
				</a>
			</div>
			<div>2024</div>
		</footer>
	);
};

export default Footer;
