import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "./DrawerToggle/DrawerToggle";


const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div className={attachedClasses.join(' ')}>
            <DrawerToggle clicked = {props.clicked} show = {props.show}/>
            <nav>
                <NavigationItems clicked = {props.clicked} show = {props.show}/>
            </nav>
        </div>
    );
};

export default SideDrawer;