import React,{useEffect, useState} from 'react';
import ArticlePanel from "../../Components/ArticlePanel/ArticlePanel";
import {MdAdd} from 'react-icons/md';
import {Link} from "react-router-dom";
import * as firebase from "firebase";

const App = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCESSkTmp4lcauyiC7UG8DdA89gulO3gK8",
        authDomain: "relations-20efb.firebaseapp.com",
        databaseURL: "https://relations-20efb.firebaseio.com",
        projectId: "relations-20efb",
        storageBucket: "relations-20efb.appspot.com",
        messagingSenderId: "622631998349",
        appId: "1:622631998349:web:8eb9d31717e68d4bcf23c4",
        measurementId: "G-CR0TLLSVWQ"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const getData = () => {
        return new Promise( resolve => {
            firebase.database().ref().on('value', (snap) => {
                let articles = snap.val();
                let article = [];
                for (let key in articles) {
                    article.push(<ArticlePanel title={articles[key].title} date={articles[key].date} id={key} key={key}/>);
                }
                resolve(article);
            });
        });
    };

    const [articlePanel, setArticlePanel] = useState(undefined);

    useEffect(() => {
        getData().then((item) => setArticlePanel(item))
    });

    return (
        <React.Fragment>
            <div> Add article<Link to="/new"><MdAdd/></Link></div>
            {articlePanel}
        </React.Fragment>
    );
};

export default App;
