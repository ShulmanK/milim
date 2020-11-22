import React, {Fragment} from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <DrawerToggle clicked = {props.clicked} show = {props.show}/>

            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>

            <div>
                <NavigationItem link = {'/login'}>Log In</NavigationItem>
            </div>
        </div>
    );
};

export default Toolbar;