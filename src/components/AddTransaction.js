import React, { useState } from "react";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h4 className="sub-heading">Add new Transaction</h4>
            <form className="form">
                <div className="form-section">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter description..."
                    />
                </div>

                <div className="form-section">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter positive or negative value..."
                    />
                </div>
                <div className="button-box">
                    <button className="button">Add transaction</button>
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;
