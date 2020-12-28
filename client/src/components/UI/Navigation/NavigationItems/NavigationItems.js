import React, {Fragment} from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link = {'/training'} ><span onClick={props.clicked}>Train words</span></NavigationItem>
            <NavigationItem link = {'/words'} ><span onClick={props.clicked}>My Words</span></NavigationItem>
            <NavigationItem link = {'/edit'} ><span onClick={props.clicked}>Add / Edit Words</span></NavigationItem>
        </ul>
    );
};

export default NavigationItems;