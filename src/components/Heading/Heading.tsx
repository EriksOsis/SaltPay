import classes from "./Heading.module.css";
import React from "react";

export function Heading(): JSX.Element {
    return (
        <header className={classes['heading-container']}>
            <h1 className={classes.heading}>Where in the world?</h1>
        </header>
    )
}