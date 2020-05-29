import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    //destructuring of context.transactions
    const { transactions } = useContext(GlobalContext);

    //calculate balance
    const amounts = transactions.map((item) => item.amount);
    const totalBalance = amounts
        .reduce((previousBalance, newItem) => (previousBalance += newItem), 0)
        .toFixed(2);

    return (
        <div>
            <h4 className="sub-heading">Your Balance</h4>
            <p className="balance-total">${totalBalance}</p>
        </div>
    );
};

export default Balance;
