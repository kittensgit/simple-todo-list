import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
