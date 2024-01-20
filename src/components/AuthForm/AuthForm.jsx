import { useContext, useRef } from 'react';
import {
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { AuthContext } from '../../context/AuthProvider';
import styles from './style.module.sass';

const AuthForm = () => {
	const context = useContext(AuthContext);
	const formRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const email = formRef.current[0].value;
		const password = formRef.current[1].value;

		const auth = getAuth();

		signInWithEmailAndPassword(auth, email, password)
			.then((data) => {
				context.logIn();
				localStorage.setItem('isLogged', true);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	return (
		<form
			method='POST'
			ref={formRef}
			className={styles['form']}
			onSubmit={submitHandler}
		>
			<div className={styles['input-wrapper']}>
				<label className={styles['label']} htmlFor='login'>
					Email:
				</label>
				<input
					className={styles['input']}
					type='email'
					name='login'
					id='login'
				/>
			</div>
			<div className={styles['input-wrapper']}>
				<label className={styles['label']} htmlFor='password'>
					Пароль:
				</label>
				<input
					className={styles['input']}
					type='password'
					name='password'
					id='password'
				/>
			</div>
			<div className={styles['btn-wrapper']}>
				<button className={styles.btn}>Войти</button>
			</div>
		</form>
	);
};

export default AuthForm;
