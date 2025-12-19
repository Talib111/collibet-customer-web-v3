import { createContext, useReducer } from "react";
import { globalReducer } from "./reducer";

export const initialState = {
	isAuthenticated: false,
	isLoading: true,
	profile: null,
	isProfile: false,
	cartCount: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(globalReducer, initialState);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
