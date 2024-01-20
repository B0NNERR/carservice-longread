import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './firebase/firebaseAuth';
import AuthProvider from './context/AuthProvider.jsx';
import MainProvider from './context/MainProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<MainProvider>
				<AuthProvider>
				<App />
			</AuthProvider>
			</MainProvider>
		</BrowserRouter>
	</React.StrictMode>
);
