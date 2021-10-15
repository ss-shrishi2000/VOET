//Reducer is simply a function that takes in the old state , and an action and returns the new state
//Actions can be like Add Transaction , Delete a given transaction , etc.



const contextReducer = (state, action) => {
    let transactions;
  
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        transactions = state.filter((transaction) => transaction.id !== action.payload);
  
        localStorage.setItem('transactions', JSON.stringify(transactions));
  
        return transactions;
      case 'ADD_TRANSACTION':
        transactions = [action.payload, ...state];
  
       // localStorage.setItem('transactions', JSON.stringify(transactions));
  
        return transactions;
      default:
        return state;
    }
  };
  
  export default contextReducer;
  