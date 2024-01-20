import React from 'react';
import useTheme from '../helpers/hooks/useTheme';

export const MainContext = React.createContext();

const MainProvider = ({children}) => {
    
	const [theme, setTheme] = useTheme();
    const changeTheme = (value) => {
        setTheme(value)
    }
  return (
    <MainContext.Provider
			value={{theme, changeTheme}}
		>
			{children}
		</MainContext.Provider>
  )
}

export default MainProvider
