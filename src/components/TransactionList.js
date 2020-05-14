import React from "react";

const TransactionList = () => {
    return (
        <div>
            <h4 className="sub-heading">History</h4>
            <ul className="list">
                <li className="list-item plus">
                    cash <span>+$400</span>
                    <button className="delete-btn">x</button>
                </li>
                <li className="list-item minus">
                    cash <span>-$400</span>
                    <button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    );
};

export default TransactionList;
