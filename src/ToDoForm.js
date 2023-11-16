import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

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
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="enter task"
                onKeyDown={handleEnter}
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default TodoForm;
