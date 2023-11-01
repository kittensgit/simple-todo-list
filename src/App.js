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
    return (
        <div className="app">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    tasks={todo.tasks}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};

export default App;
