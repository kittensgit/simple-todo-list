import React from 'react';

const Todo = ({ id, tasks, removeTodo }) => {
    return (
        <div className="todo">
            <div>{tasks}</div>
            <button
                onClick={() => {
                    removeTodo(id);
                }}
            >
                delete
            </button>
        </div>
    );
};

export default Todo;
