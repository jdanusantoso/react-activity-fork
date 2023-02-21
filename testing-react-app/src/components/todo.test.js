import { render, screen, cleanup}from '@testing-library/react'

import Todo from '../todo';

test('should render todo component', () => {
    const todo = {id: 1, title: 'wash dishes', completed: false, };
    render(<Todo todo ={todo}/>);
    const todoElement = screen.getByTestID('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextConent('Hello World');
})