import emailjs from '@emailjs/browser';

import styles from './style.module.sass';
import useInputValidate from '../../helpers/hooks/useInputValidate';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const validateEmail = (value) => {
	return (
		value.trim().length > 0 &&
		String(value)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
	);
};

const validatePhone = (value) => {
	if (value.length > 0 && value.charAt(0) !== '+') return false;
	if (value.length > 1 && value.charAt(1) !== '7') return false;
	if (value.length > 12 || value.length < 12) return false;
	return !Number.isNaN(+value);
};

const ModalForm = ({ setActiveModalForm }) => {
	const [isSendForm, setIsSendForm] = useState(false);

	const {
		value: nameInputValue,
		isValid: nameInputIsValid,
		hasError: nameInputHasError,
		inputValueChangeHandler: nameInputChangeHandler,
		inputLostFocus: nameInputLostFocus,
		clearInput: nameInputClearValue,
	} = useInputValidate((value) => {
		return value.trim().length > 0;
	});

	const {
		value: emailInputValue,
		isValid: emailInputIsValid,
		hasError: emailInputHasError,
		inputValueChangeHandler: emailInputChangeHandler,
		inputLostFocus: emailInputLostFocus,
		clearInput: emailInputClearValue,
	} = useInputValidate(validateEmail);

	const {
		value: phoneInputValue,
		isValid: phoneInputIsValid,
		hasError: phoneInputHasError,
		inputValueChangeHandler: phoneInputChangeHandler,
		inputLostFocus: phoneInputLostFocus,
		clearInput: phoneInputClearValue,
	} = useInputValidate(validatePhone);

	const {
		value: messageInputValue,
		isValid: messageInputIsValid,
		hasError: messageInputHasError,
		inputValueChangeHandler: messageInputChangeHandler,
		inputLostFocus: messageInputLostFocus,
		clearInput: messageInputClearValue,
	} = useInputValidate((value) => {
		return value.trim().length > 10;
	});

	const isFormValid =
		nameInputIsValid &&
		emailInputIsValid &&
		phoneInputIsValid &&
		messageInputIsValid;

	function sendEmail(e) {
		e.preventDefault();

		const serviceId = 'service_3zo61li';
		const templateId = 'template_e2pyv8z';
		const publicKey = 'cXwZwbXjVyNDeb4ia';

		const templateParams = {
			user_name: nameInputValue,
			user_email: emailInputValue,
			user_phone: phoneInputValue,
			message: messageInputValue,
		};

		emailjs.send(serviceId, templateId, templateParams, publicKey);

		(async function () {
			const object = {
				user_name: nameInputValue,
				user_email: emailInputValue,
				user_phone: phoneInputValue,
				message: messageInputValue,
			};

			const options = {
				method: 'POST',
				body: JSON.stringify(object),
			};

			const response = await fetch(
				'https://carservice-6f60c-default-rtdb.europe-west1.firebasedatabase.app/car_service_applications.json',
				options
			);
		})();

		nameInputClearValue('');
		emailInputClearValue('');
		phoneInputClearValue('');
		messageInputClearValue('');
		setIsSendForm(true);
	}

	const content = (
		<form className={styles.sendForm} onSubmit={sendEmail}>
			<div
				className={`${styles['input-wrapper']} ${
					nameInputHasError ? styles.invalid : ''
				}`}
			>
				<label htmlFor='user_name'>Имя:</label>
				<input
					className={styles.input}
					type='text'
					name='user_name'
					id='user_name'
					autoComplete='off'
					value={nameInputValue}
					onChange={nameInputChangeHandler}
					onBlur={nameInputLostFocus}
				/>
			</div>

			<div
				className={`${styles['input-wrapper']} ${
					emailInputHasError ? styles.invalid : ''
				}`}
			>
				<label htmlFor='user_email'>Email:</label>
				<input
					className={styles.input}
					type='email'
					name='user_email'
					id='user_email'
					autoComplete='off'
					value={emailInputValue}
					onChange={emailInputChangeHandler}
					onBlur={emailInputLostFocus}
				/>
			</div>

			<div
				className={`${styles['input-wrapper']} ${
					phoneInputHasError ? styles.invalid : ''
				}`}
			>
				<label htmlFor='user_phone'>Телефон:</label>
				<input
					className={styles.input}
					type='tel'
					name='user_phone'
					id='user_phone'
					value={phoneInputValue}
					autoComplete='off'
					placeholder='+79991239932'
					onChange={(e) => phoneInputChangeHandler(e)}
					onBlur={phoneInputLostFocus}
				/>
			</div>

			<div
				className={`${styles['input-wrapper']} ${
					messageInputHasError ? styles.invalid : ''
				}`}
			>
				<label htmlFor='message'>Сообщение:</label>
				<textarea
					className={styles.textarea}
					name='message'
					id='message'
					autoComplete='off'
					value={messageInputValue}
					onChange={messageInputChangeHandler}
					onBlur={messageInputLostFocus}
				/>
			</div>
			<div className={styles['btn-wrapper']}>
				<button
					className={styles.btn}
					type='submit'
					disabled={!isFormValid}
				>
					Отправить
				</button>
			</div>
		</form>
	);

	return !isSendForm ? (
		content
	) : (
		<Modal isActive={isSendForm} setActive={setIsSendForm}>
			<h3>Спасибо за оставленную заявку, мы уже её обрабатываем!</h3>
		</Modal>
	);
};

export default ModalForm;
