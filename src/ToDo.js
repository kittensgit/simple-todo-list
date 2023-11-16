import React from 'react';

const Todo = ({ id, task, complete, toggleTodo }) => {
    return (
        <div>
            {task}
            <button>delete</button>
        </div>
    );
};

export default Todo;
