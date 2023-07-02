import { useState, useEffect, Fragment } from "react";

import Header from "./components/Layouts/Header/Header";
import TransactionList from "./components/Transactions/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";


function App() {
  
  const [transactions,setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const transactionsJSON = localStorage.getItem('transactions');
    let transactions = [];
    if(transactionsJSON !== '') {
      transactions = JSON.parse(transactionsJSON);
    }
    setTransactions(transactions);
    if(!transactions) return;
    const total = transactions.reduce((total, curr) => {
      if (curr.type === 'income') {
        return total + curr.amount * 1;
      } else {
        return total - curr.amount * 1;
      }
    }, 0);

    setTotal(total);
  },[]);

  
  const addTransactionHandler = (event) => {
    event.preventDefault();
    const transactionsJSON = localStorage.getItem('transactions');
    let transactions = [];
    if(transactionsJSON !== '') {
      transactions = JSON.parse(transactionsJSON);
    }
    const form = event.target;
    const transaction = {
      id: `t${transactions.length}`,
      title: form[0].value,
      amount: form[1].value,
      date: form[2].value,
      type: form[3].value,
    }
    transactions.push(transaction);
    setTransactions(transactions);
    setTotal(prevState => {
      let newState = 0;
      if(transaction.type === 'income') {
        newState = prevState + transaction.amount * 1;
      }
      if(transaction.type === 'expense') {
        newState = prevState - transaction.amount * 1;
      }
      return newState;
    });
    const transactionsString = JSON.stringify(transactions);
    localStorage.setItem('transactions', transactionsString);
  };

  return (
    <Fragment>
    <Header total={total}/>
    <AddTransaction addTransaction={addTransactionHandler}/>
      {transactions && <TransactionList transactions={transactions}/>}
    </Fragment>
  );
}

export default App;
