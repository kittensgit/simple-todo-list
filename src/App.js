import React, { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: 'to go to the gym', complete: 'false' },
    ]);

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div className="App">
            <ToDoForm />
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
