import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Auth from './pages/Auth';

import React, { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import AdminPanel from './components/AdminPanel/AdminPanel';
import NotFoundPage from './pages/NotFoundPage';
import ContactsPage from './pages/ContactsPage';

function App() {
	const context = useContext(AuthContext);

	return (
		<>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route
					path='/admin'
					element={context.isAdmin ? <AdminPanel /> : <Auth />}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
