import React from 'react'
import * as firebase from 'firebase';
import {withRouter} from 'react-router-dom'
import queryString from 'query-string'

class Edit extends React.Component {
    state = {
        title: "",
        tags: "",
        author: "",
        main: "",
        date: ""
    };

    newAritcleHandler = () => {
        if(this.state.tags === "" || this.state.author === "" || this.state.title === "" || this.state.main === ""){
            alert("BAD DATA");
        }
        else {
            const values = queryString.parse(this.props.location.search);
            const date = new Date(Date.now());
            this.setState({date: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()}, () => {
                firebase.database().ref(values.id).set(this.state);
            });
            alert("SUCCES");
        }
    };

    render() {
        return (
            <div>
                Title <input value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/> <br/>
                Tags <input value={this.state.tags} onChange={(event) => this.setState({tags: event.target.value})}/> <br/>
                Author <input value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/> <br/>
                Main <textarea value={this.state.main} style={{width: 500, height: 500}} onChange={(event) => this.setState({main: event.target.value})}/> <br/>
                <button onClick={this.newAritcleHandler}>Edit</button>
            </div>
        )
    }
};

export default withRouter(Edit);