import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    complete={todo.complete}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
