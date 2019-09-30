import React from 'react'
import { MdModeEdit, MdClose} from "react-icons/md";
import * as firebase from "firebase";
import {Link} from "react-router-dom";

const ArticlePanel = (props) => {
    return(
        <div>
            {props.title}   {props.date}  {props.id}<button onClick={() => firebase.database().ref(props.id).remove()}><MdClose/></button> <Link to={"/edit?id=" + props.id}><MdModeEdit/></Link>
        </div>
    )
};

export default ArticlePanel;