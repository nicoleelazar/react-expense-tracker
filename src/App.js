import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState"

function App() {
    return (
        <GlobalProvider>
            <div className="contain-app">
                <div className="app-wrapper">
                    <Header />
                    <Balance />
                    <IncomeExpense />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
