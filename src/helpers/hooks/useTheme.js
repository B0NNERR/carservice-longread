import React, { useLayoutEffect, useState } from 'react';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)');
const defaultTheme = isDarkTheme ? 'dark-theme' : 'light-theme';

const useTheme = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme')
			? localStorage.getItem('theme')
			: defaultTheme
	);

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return [theme, setTheme];
};

export default useTheme;
