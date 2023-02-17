import React from 'react';
import classes from './App.module.css';
import {Route, Switch} from "react-router-dom";
import {Heading} from "./components/Heading/Heading";
import {Homepage} from "./components/HomePage/Homepage";


function App() {
    return (
        <Switch>
            <Route path={'/'} exact>
                <div className={classes.App}>
                    <Heading/>
                    <Homepage/>
                </div>
            </Route>
        </Switch>
    );
}

export default App;
