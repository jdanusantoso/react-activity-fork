import React from 'react';

//render a todo item and want user to know when it has been completed or not
function todo({todo}) {
    const { id, title, completed } = todo;
    const h1 = <h1>{title}</h1>;
    const text = completed ? <strike>{h1}</strike>:h1;
    return <div data-testid={`todo-${id}`}>{ text }</div>
}

export default todo;