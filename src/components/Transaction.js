import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

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

            <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction.id)}
            >
                x
            </button>
        </div>
    );
};

export default Transaction;
