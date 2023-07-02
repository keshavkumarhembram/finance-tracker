import TransactionItem from './TransactionItem';
import classes from './TransactionList.module.css';

const TransactionList = (props) => {
  const transactions = props.transactions ? props.transactions.map(transaction => <TransactionItem type={transaction.type} key={transaction.id} id={transaction.id} title={transaction.title} amount={transaction.amount} date={transaction.date} />) : [];
  return (
    <ul className={classes['transaction-list']}>
      {transactions.length > 0 && transactions}
    </ul>
  );
};

export default TransactionList;