import { useContext, useEffect, useState } from 'react';
import styles from './style.module.sass';
import { AuthContext } from '../../context/AuthProvider';
import useFetch from '../../helpers/hooks/useFetch';
import Spinner from '../Spinner/Spinner';

const AdminPanel = () => {
	const {
		data: applications,
		fetchFunction,
		error,
		isLoading,
	} = useFetch(
		import.meta.env.VITE_FIREBASE_DB_URL + '/car_service_applications.json',
		{},
		(response) => response.json()
	);
	const context = useContext(AuthContext);
	const arrayOfApplications = [];

	const toggleIsDone = async (id) => {
		const newObject = {
			[id]: {
				user_email: applications[id].user_email,
				user_phone: applications[id].user_phone,
				user_name: applications[id].user_name,
				message: applications[id].message,
				isDone: !applications[id].isDone,
			},
		};

		await fetch(
			import.meta.env.VITE_FIREBASE_DB_URL +
				'/car_service_applications.json',
			{
				method: 'PATCH',
				body: JSON.stringify(newObject),
			}
		);

		fetchFunction();
	};

	const logout = () => {
		localStorage.removeItem('isLogged');
		context.logOut();
	};

	for (const key in applications) {
		const bodyObj = applications[key];
		arrayOfApplications.push({
			id: key,
			user_email: bodyObj.user_email,
			user_phone: bodyObj.user_phone,
			user_name: bodyObj.user_name,
			user_message: bodyObj.message,
			isDone: bodyObj.isDone,
		});
	}

	return (
		<>
			{isLoading ? <Spinner /> : null}
			<div className={styles['btn-wrapper']}>
				<button className={styles.button} onClick={logout}>
					Выход
				</button>
			</div>
			<table className={styles.table} cellSpacing={0}>
				<thead>
					<tr>
						<th>userId</th>
						<th>user_email</th>
						<th>user_name</th>
						<th>user_phone</th>
						<th>user_message</th>
						<th>is_done</th>
					</tr>
				</thead>
				<tbody>
					{arrayOfApplications?.map((item) => {
						return (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.user_email}</td>
								<td>{item.user_name}</td>
								<td>{item.user_phone}</td>
								<td>{item.user_message}</td>
								<td className={styles['rd-check']}>
									<input
										type='checkbox'
										className={styles.input}
										checked={item.isDone}
										onChange={() => toggleIsDone(item.id)}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default AdminPanel;
