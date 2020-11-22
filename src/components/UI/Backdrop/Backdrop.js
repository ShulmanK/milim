import React from 'react';
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import classes from './Backdrop.module.css';

const Backdrop = (props) =>
    props.show ? (<div className={classes.Backdrop}>
        <NavigationItems/>
    </div>) : null;

export default Backdrop;