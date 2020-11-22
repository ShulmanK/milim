import React, {Fragment} from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link = {'/training'}>Train words</NavigationItem>
            <NavigationItem link = {'/words'}>My Words</NavigationItem>
            <NavigationItem link = {'/edit'}>Add / Edit Words</NavigationItem>
        </ul>
    );
};

export default NavigationItems;