import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

//Integration test -> testing the parent component of the interacting components

//To overcome error that says that you should not use <Link> outside a <Router>
const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

//Adding each task that has inputted into the component through array
const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i} );
  tasks.forEach((task) => {
      fireEvent.change(inputElement, { target: { value: task } });
      fireEvent.click(buttonElement);
  })
}

/*TEST 1 Element*/ 

describe("Todo", () => {
  test('should render same text passed into title prop', () => {
     render(< MockTodo/>);
     addTask(["Go Grocery Shopping"])
     const divElement = screen.getByText(/Go Grocery Shopping/i)
     expect(divElement).toBeInTheDocument()
    });

/*TEST Multiple Elements*/ 

it('should render multiple items', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
    const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
    expect(divElements.length).toBe(3)
});

/*TEST Complete Class Element*/ 

it('task should not have complete class when initally rendered', () => {
  render(
      <MockTodo />
  );
  addTask(["Go Grocery Shopping"])
  const divElement = screen.getByText(/Go Grocery Shopping/i);
  expect(divElement).not.toHaveClass("todo-item-active")
});

it('task should have complete class when clicked', () => {
  render(
      <MockTodo />
  );
  addTask(["Go Grocery Shopping"])
  const divElement = screen.getByText(/Go Grocery Shopping/i);
  fireEvent.click(divElement)
  expect(divElement).toHaveClass("todo-item-active")
});


});
 
 