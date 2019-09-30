import React from 'react';
import styles from './App.module.scss'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./screens/Home/Home";
import New from "./screens/New/New";

const App = () => {
    return (
        <Router>
            <div className={styles.container}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/new" component={New}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
