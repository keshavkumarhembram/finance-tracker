import Card from '../UI/Card';
import classes from './TransactionItem.module.css';

const TransactionItem = (props) => {
    return (
        <Card>
        <li className={classes.transaction}>
            {props.type === 'income' ? <div className={classes['transaction-type-income']}>Income</div> : <div className={classes['transaction-type-expense']}>Expense</div>}
            <h3>{props.title}</h3>
            <div>${props.amount}</div>
            <div>{props.date}</div>
        </li>
        </Card>
    );
};

export default TransactionItem;