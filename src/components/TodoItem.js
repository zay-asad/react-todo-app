import './TodoItem.css';
import React from 'react'

function TodoItem(props) {
    return (
        <div className="TodoItem">
                <p className="TodoItem-Text">{props.item}</p>
                <button className="TodoItem-Delete"
                     onClick={props.deleteItem}>
                         Delete
                </button>
            </div>
    )
}

export default TodoItem;

