import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliar>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Header}>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <span className={classes.BrandName}>Burger Builder</span>
                    <button className={classes.CloseButton} onClick={props.closed} aria-label="Close menu">×</button>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
                <p className={classes.Footer}>Built with React</p>
            </div>
        </Auxiliar>
    );
};

export default sideDrawer;
