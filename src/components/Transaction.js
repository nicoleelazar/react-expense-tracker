import React from "react";

const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? "-" : "+";

    return (
        <div className="contain-list-item">
            <li
                className={`list-item ${
                    transaction.amount < 0 ? "minus" : "plus"
                }`}
            >
                {transaction.text}
                <span>
                    {/* abs makes figure display as positive, to remove any signs from data */}
                    {sign}${Math.abs(transaction.amount)}
                </span>
            </li>

            <button className="delete-btn">x</button>
        </div>
    );
};

export default Transaction;
