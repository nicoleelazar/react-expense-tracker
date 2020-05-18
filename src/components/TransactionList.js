import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
    //destructuring of context.transactions
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h4 className="sub-heading">History</h4>
            <ul className="list">
                {transactions.map((item) => (
                    <Transaction key={item.id} transaction={item} />
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
