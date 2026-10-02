import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={process.env.PUBLIC_URL + '/'} active>Builder</NavigationItem>
        <NavigationItem link="https://github.com/diegomottadev/delivery-burguer-app" external>GitHub</NavigationItem>
    </ul>
);

export default navigationItems;
