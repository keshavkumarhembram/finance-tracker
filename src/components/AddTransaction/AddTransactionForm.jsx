import classes from "./AddTransactionForm.module.css";
import Card from "../UI/Card";

const AddTransactionForm = ({ addTransaction }) => {


    return (
        <Card >
            <form onSubmit={addTransaction}>
                <div>
                    <div className={classes.row}>
                <div className={classes.input} >
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div className={classes.input}>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" />
                </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.input}>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" />
                    </div>
                    <div className={classes.input}>
                        <label htmlFor="type">Type</label>
                    <select id="type" className={classes['transaction-type']}>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    </div>
                </div>
                </div>
                <div>
                    <button className={classes.button} type="submit">Add Transaction</button>
                </div>
            </form>
        </Card>
    );
};

export default AddTransactionForm;