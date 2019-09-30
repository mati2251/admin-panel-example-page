import React from 'react';
import ArticlePanel from "../../Components/ArticlePanel/ArticlePanel";
import {MdAdd} from 'react-icons/md';
import {Link} from "react-router-dom";

const App = () => {
    return (
        <React.Fragment>
            <div> Add article<Link to="/new"><MdAdd/></Link></div>
            <ArticlePanel title="TITLE" date="2018-08-08"/>
        </React.Fragment>
    );
};

export default App;
