import React from 'react'
import classes from './BuildControl.css'
const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>
                {props.label}
                <span className={classes.Price}>+${props.price.toFixed(2)}</span>
            </div>
            <div className={classes.Stepper}>
                <button
                    className={classes.Less}
                    onClick={props.removed}
                    disabled={props.disabled}
                    aria-label={'Less ' + props.label}>−</button>
                <span className={classes.Count}>{props.count}</span>
                <button
                    className={classes.More}
                    onClick={props.added}
                    aria-label={'More ' + props.label}>+</button>
            </div>
        </div>
    )
}

export default buildControl;
