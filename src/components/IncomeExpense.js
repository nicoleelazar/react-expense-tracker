import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((item) => item.amount);
    //calculate income
    const income = amounts
        .filter((item) => item > 0)
        .reduce((previousItem, newItem) => (previousItem += newItem), 0)
        .toFixed(2);

    //calculate expense
    const expense = amounts
        .filter((item) => item <= 0)
        .reduce((previousItem, newItem) => (previousItem += newItem), 0);

    const expenseNoMinus = (expense * -1).toFixed(2);

    return (
        <div className="expense-container">
            <div className="flex-item">
                <h4>Income</h4>
                <p className="money-amount positive">${income}</p>
            </div>

            <div className="flex-item">
                <h4>Expense</h4>
                <p className="money-amount negative">${expenseNoMinus}</p>
            </div>
        </div>
    );
};

export default IncomeExpense;
