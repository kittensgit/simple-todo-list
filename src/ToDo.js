import React from 'react';

const Todo = ({ id, tasks, removeTodo, toggleTodo, status }) => {
    return (
        <div className="todo">
            <div
                onClick={() => toggleTodo(id)}
                className={status ? 'complete' : ''}
            >
                {tasks}
            </div>
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
