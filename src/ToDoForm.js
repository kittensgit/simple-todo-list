import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAddTodo = () => {
        addTodo(value);
        setValue('');
    };
    return (
        <div>
            <input
                onChange={handleChange}
                value={value}
                placeholder="enter task"
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default TodoForm;
