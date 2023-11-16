import React from 'react';

const Todo = ({ id, task, complete, toggleTodo, deleteTodo }) => {
    return (
        <div>
            {task}
            <button onClick={() => deleteTodo(id)}>delete</button>
        </div>
    );
};

export default Todo;
