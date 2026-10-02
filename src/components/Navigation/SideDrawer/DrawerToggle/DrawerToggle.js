import React from 'react';

import classes from './DrawerToggle.css';


const drawerToggle = (props) => (
    <button className={classes.DrawerToggle} onClick={props.clicked} aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
);

export default drawerToggle;
