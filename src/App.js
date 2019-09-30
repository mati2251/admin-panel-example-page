import React from 'react';
import styles from './App.module.scss'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./screens/Home/Home";
import New from "./screens/New/New";
import Edit from "./screens/Edit/Edit";

const App = () => {
    return (
        <Router>
            <div className={styles.container}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/new" component={New}/>
                    <Route path="/edit" component={Edit}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
