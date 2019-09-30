import React from 'react'
import * as firebase from 'firebase';

class New extends React.Component {
    state = {
        title: "",
        tags: "",
        author: "",
        main: ""
    };

    newAritcleHandler = () => {
        firebase.database().ref('articles').push(this.state);
    }

    render() {
        var firebaseConfig = {
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

        return (
            <div>
                Title <input value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/> <br/>
                Tags <input value={this.state.tags} onChange={(event) => this.setState({tags: event.target.value})}/> <br/>
                Author <input value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/> <br/>
                Main <textarea value={this.state.main} style={{width: 500, height: 500}} onChange={(event) => this.setState({main: event.target.value})}/> <br/>
                <button onClick={this.newAritcleHandler}>Add</button>
            </div>
        )
    }
};

export default New;