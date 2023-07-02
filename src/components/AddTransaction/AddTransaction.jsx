import classes from './AddTransaction.module.css';
import AddTransactionForm from './AddTransactionForm';

const AddTransaction = (props) => {
    return (
        <div className={classes['add-transaction-container']}>
            <h2>Add New Transaction</h2>
            <AddTransactionForm addTransaction={props.addTransaction}/>
        </div>
    );
};

export default AddTransaction;