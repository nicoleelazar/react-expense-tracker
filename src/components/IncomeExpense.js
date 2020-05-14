import React from "react";

const IncomeExpense = () => {
    return (
        <div className="expense-container">
            <div className="flex-item">
                <h4>Income</h4>
                <p className="money-amount">+$0.00</p>
            </div>

            <div className="flex-item">
                <h4>Expense</h4>
                <p className="money-amount">+$0.00</p>
            </div>
        </div>
    );
};

export default IncomeExpense;
