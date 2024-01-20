import React from 'react';
import Header from '../components/Header/Header';
import Contacts from '../components/Contacts/Contacts';

const ContactsPage = () => {
	return (
		<>
			<div className="container">
				<Header></Header>
				<Contacts></Contacts>
			</div>
		</>
	);
};

export default ContactsPage;
