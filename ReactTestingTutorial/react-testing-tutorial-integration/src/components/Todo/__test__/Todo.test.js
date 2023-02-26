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

/*TEST 1 Element Only*/ 

describe("Todo", () => {
  test('should render same text passed into title prop', () => {
     render(< MockTodo/>);
     const inputElement = screen.getAllByPlaceholderText(/Add a new task here.../i)
     const buttonElement = screen.getAllByRole("button", {name: /Add/i});
     fireEvent.change(inputElement, {target: { value: "Go Grocery Shopping"} } )
     fireEvent.click(buttonElement)
     const divElement = screen.getByText(/Go Grocery Shopping/i)
     expect(divElement).toBeInTheDocument()
    });
})
 
  