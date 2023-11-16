import React, { useState } from 'react';
import Todo from './Todo';
import { v4 } from 'uuid';
import TodoForm from './TodoForm';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (tasks) => {
        const newTodo = {
            id: v4(),
            tasks,
            status: false,
        };
        setTodos([newTodo, ...todos]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, status: !todo.status } : { ...todo }
            )
        );
        console.log(todos);
    };
    return (
        <div className="app">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    status={todo.status}
                    tasks={todo.tasks}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    );
};

export default App;
