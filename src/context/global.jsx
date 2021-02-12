import { createContext, useState } from 'react';

const initialState = {
	title: 'The App',
};

export const AppContext = createContext();

export const AppContextProvider = (props) => {
	const [globalState, setGlobalState] = useState(initialState);

	return (
		<AppContext.Provider value={{ globalState, setGlobalState }}>
			{props.children}
		</AppContext.Provider>
	);
};
