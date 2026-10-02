import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={process.env.PUBLIC_URL + '/'} active>Burger Builder</NavigationItem>
    </ul>
);

export default navigationItems;