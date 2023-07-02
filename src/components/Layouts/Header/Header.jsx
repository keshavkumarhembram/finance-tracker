import HeaderBalance from './HeaderBalance';

import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
        <h1>Finance Tracker</h1>
        <HeaderBalance total={props.total} />
        </header>
    );
};

export default Header;
