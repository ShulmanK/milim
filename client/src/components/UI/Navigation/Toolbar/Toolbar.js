import React, {Fragment} from 'react';
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import s from './Toolbar.module.scss';

const Toolbar = (props) => {
    return (
        <div className={s.Toolbar}>
            <DrawerToggle clicked = {props.clicked} show = {props.show}/>
            <div>
                <NavigationItem link = {'/login'}>Log In</NavigationItem>
            </div>
        </div>
    );
};

export default Toolbar;