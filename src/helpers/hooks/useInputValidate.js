import { useReducer, useState } from 'react';

const reducerForValidate = (_, action) => {
	switch (action.type) {
		case 'INPUT_VALUE_CHANGE':
			return {
				isValid: action.isValid,
				value: action.value,
			};

		default:
			return {
				isValid: false,
				value: '',
			};
	}
};

const useInputValidate = (manageData) => {
	const [stateInput, dispatchStateInputs] = useReducer(reducerForValidate, {
		isValid: false,
		value: '',
	});

	const [wasInputTouched, setWasInputTouched] = useState(false);

	const hasError = !stateInput.isValid && wasInputTouched;

	const inputValueChangeHandler = (e) => {
		dispatchStateInputs({
			type: 'INPUT_VALUE_CHANGE',
			value: e.target.value,
			isValid: manageData(e.target.value),
		});

		setWasInputTouched(true);
	};

	const inputLostFocus = (e) => {
		setWasInputTouched(true);
	};

	const clearInput = () => {
		dispatchStateInputs({ type: 'CLEAR' });
		setWasInputTouched(false);
	};

	return {
		value: stateInput.value,
		isValid: stateInput.isValid,
		hasError,
		inputValueChangeHandler,
		inputLostFocus,
		clearInput,
	};
};

export default useInputValidate;
