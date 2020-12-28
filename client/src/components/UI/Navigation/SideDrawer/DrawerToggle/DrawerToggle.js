import React from 'react';
import classes from './DrawerToggle.module.css'

const DrawerToggle = (props) => {
    let change = '';
    if (props.show) {
        change = classes.change;
    }
    return (
        <div className={[classes.DrawerToggle, change].join(' ')} onClick={props.clicked}>
            <div className={[classes.bar1].join(' ')}></div>
            <div className={[classes.bar2].join(' ')}></div>
            <div className={[classes.bar3].join(' ')}></div>
        </div>
    );
};

export default DrawerToggle;