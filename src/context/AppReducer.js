//reducer specifies state changes and sends them down to app

export default (state, action) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            //set the new state to be all transactions except the one that was deleted
            return {
                ...state,
                transactions: state.transactions.filter(
                    (item) => item.id !== action.payload
                ),
            };

        case "ADD_TRANSACTION":
            return {
                ...state,
                //adding the new trans. sent as payload + existing transactions
                transactions: [action.payload, ...state.transactions],
            };

        default:
            return state;
    }
};
