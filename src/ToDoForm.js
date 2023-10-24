import React, { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleAddTodo = () => {
        addTodo(value);
        setValue('');
    };
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div>
            <input
                onChange={handleChange}
                value={value}
                placeholder="enter task"
                onKeyDown={handleEnter}
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default ToDoForm;
