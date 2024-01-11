const BASE_URL = import.meta.env.VITE_CARS_BASE_URL;

export const getMakesCars = async () => {
	const url = BASE_URL + 'cars';
	const options = {
		method: 'GET',
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		return result;
	} catch (error) {
		console.error(error);
	}
};
