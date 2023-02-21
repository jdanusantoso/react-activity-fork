import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../todo';

afterEach(() => {
    cleanup();
});

test('should render non-completed todo component', () => {
    const todo = {id: 1, title: 'wash dishes', completed: false, };
    render(<Todo todo ={todo}/>);
    //Get by test id
    const todoElement = screen.getByTestId('todo-1');
    //assert that its in the document
    expect(todoElement).toBeInTheDocument();
    //Testing to see if you have text content
    //expect(todoElement).toHaveTextContent("Hi!"); -> fail
    //expect(todoElement).toHaveTextContent("Hello World!");
    expect(todoElement).toHaveTextContent("wash dishes");
    expect(todoElement).not.toContainHTML('<strike>');

})

test('should render completed todo component', () => {
    const todo = {id: 2, title: 'wash car', completed: true, };
    render(<Todo todo ={todo}/>);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash car');
    expect(todoElement).not.toContainHTML('<strike>');
})

//snapshot 
test ('matches snapshot', () => {
    const todo = {id: 1, title: 'wash dishes', completed: false, };
    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
})