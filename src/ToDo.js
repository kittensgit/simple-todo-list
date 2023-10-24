import React from 'react';

const ToDo = ({ id, task, complete, deleteTodo }) => {
    return (
        <div className="item-todo">
            <div>{task}</div>
            <div
                onClick={() => {
                    deleteTodo(id);
                }}
                className="item-delete"
            >
                X
            </div>
        </div>
    );
};

export default ToDo;
