import {render, screen, cleanup} from '@testing-library/react';
import Todo from '../todo';

test('should render todo component', () => {
    render(<Todo/>);
    //Get by test id
    const todoElement = screen.getByTestId('todo-1');
    //assert that its in the document
    expect(todoElement).toBeInTheDocument();
    //Testing to see if you have text content
    //expect(todoElement).toHaveTextContent("Hi!"); -> fail
    expect(todoElement).toHaveTextContent("Hello World!");

})

