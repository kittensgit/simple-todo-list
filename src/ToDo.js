import React from 'react';

const Todo = ({ id, task, complete, toggleTodo, deleteTodo }) => {
    return (
        <div>
            <div
                onClick={() => {
                    toggleTodo(id);
                }}
                className={complete ? 'complete' : ''}
            >
                {task}
            </div>
            <button onClick={() => deleteTodo(id)}>delete</button>
        </div>
    );
};

export default Todo;
