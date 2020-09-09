import React from 'react';
import classes from './Layout.module.css';
import Menu from '../../components/Menu/Menu';

const layout = props => {   
    return(
        <div className={classes.Layout}>
            <div className={classes.Nav}>
                <Menu/>
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );   
}

export default layout;
