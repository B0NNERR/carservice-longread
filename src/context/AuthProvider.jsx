import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
	const [isAdmin, setIsAdmin] = useState(
		localStorage.getItem('isLogged') ? true : false
	);

	const logIn = () => {
		setIsAdmin(true);
	};
	const logOut = () => {
		setIsAdmin(false);
	};
	return (
		<AuthContext.Provider
			value={{
				isAdmin,
				logIn,
				logOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
