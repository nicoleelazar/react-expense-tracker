import React from "react";

const AddTransaction = () => {
    return (
        <div>
            <h4 className="sub-heading">Add new Transaction</h4>
            <form className="form">
                <div className="form-section">
                    <label htmlFor="description">Description</label>
                    <input type="text" placeholder="Enter description..." />
                </div>

                <div className="form-section">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
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
