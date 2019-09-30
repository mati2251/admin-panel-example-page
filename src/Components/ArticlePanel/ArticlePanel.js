import React from 'react'
import { MdModeEdit, MdClose} from "react-icons/md";

const ArticlePanel = (props) => {
    return(
        <div>
            {props.title}   {props.date}  <button><MdClose/></button> <button><MdModeEdit/></button>
        </div>
    )
};

export default ArticlePanel;