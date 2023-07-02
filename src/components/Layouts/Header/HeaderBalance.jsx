import classes from './HeaderBalance.module.css';

const HeaderBalance = (props) => {
    return (
        <div className={classes['header-balance']}>
            <span className={classes['header-balance__title']}>Balance:</span>
            <span>$</span>
            <span className={classes['header-balance__amount']}>{props.total.toFixed(2)}</span>
        </div>
    );
        
};

export default HeaderBalance;