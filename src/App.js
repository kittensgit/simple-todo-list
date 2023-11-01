import React, { useState } from 'react';
import Todo from './Todo';
import { v4 } from 'uuid';
import TodoForm from './TodoForm';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: v4(),
            tasks: 'to go to the gym',
            status: false,
        },
        {
            id: v4(),
            tasks: 'to go to the store',
            status: false,
        },
    ]);

    const addTodo = (tasks) => {
        const newTodo = {
            id: v4(),
            tasks,
            status: false,
        };
        setTodos([newTodo, ...todos]);
    };
    return (
        <div className="app">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo tasks={todo.tasks} />
            ))}
        </div>
    );
};

export default App;
