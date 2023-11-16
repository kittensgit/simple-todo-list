import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 } from 'uuid';
import TodoList from './TodoList';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const newTodo = {
            id: v4(),
            task,
            complete: false,
        };
        setTodos([...todos, newTodo]);
        console.log(todos);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        console.log('gfgf');
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <TodoList deleteTodo={deleteTodo} todos={todos} />
        </div>
    );
};

export default App;
