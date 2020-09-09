import React from 'react';
import classes from './Menu.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const toolbar = (props) => {
    return (
        <div className={classes.Menu}>
            <ul className={classes.NavigationItems}>
                <NavigationItem link='/' exact>Calculator</NavigationItem>
                <NavigationItem link='/history'>History</NavigationItem>
            </ul>            
        </div>
    );
}

export default toolbar;