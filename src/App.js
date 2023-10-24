import React, { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import { v4 } from 'uuid';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        if (task) {
            const newTodo = {
                id: v4(),
                task,
                complete: false,
            };
            setTodos([...todos, newTodo]);
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <ToDo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    complete={todo.complete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default App;
