import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { v4 } from 'uuid';

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

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo key={todo.id} task={todo.task} />
            ))}
        </div>
    );
};

export default App;
