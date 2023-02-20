import React from 'react';
import classes from './App.module.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {Heading} from "./components/Heading/Heading";
import {Homepage} from "./components/HomePage/Homepage";
import {DetailsPage} from "./components/DetailsPage/DetailsPage";


function App() {
    return (<div>
            <Heading/>
            <Switch>
                <Route path={'/'} exact>
                    <Redirect to={'/home'}/>
                </Route>
                <Route path={'/home'}>
                    <div className={classes.App}>

                        <Homepage/>
                    </div>
                </Route>
                <Route path={'/details/:country'}>
                    <DetailsPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
