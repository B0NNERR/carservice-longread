import { useState } from 'react';

import Comments from '../components/Comments/Comments';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
import Hero from '../components/Hero/Hero';
import Modal from '../components/Modal/Modal';
import Promo from '../components/Promo/Promo';

import ModalForm from '../components/ModalForm/ModalForm';

const Main = () => {
	const [isActiveModalForm, setActiveModalForm] = useState(false);
	return (
		<>
			<Hero/>
			<Gallery />
			<Experience />
			<Comments />
			<Promo setActiveModalForm={setActiveModalForm} />
			<Footer />
			{!isActiveModalForm ? null : (
				<Modal
					isActive={isActiveModalForm}
					setActive={setActiveModalForm}
				>
					<ModalForm setActiveModalForm={setActiveModalForm} />
				</Modal>
			)}
		</>
	);
};

export default Main;
