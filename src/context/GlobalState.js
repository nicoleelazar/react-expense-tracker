import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Inital State
const initialState = {
    transactions: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Salary", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 },
    ],
};

//Create new context
export const GlobalContext = createContext(initialState);

//Create provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions }}>
            {children}
        </GlobalContext.Provider>
    );
};

//consumer not needed when using hooks, it is replaced by useContext hook
