import { render, screen } from '@testing-library/react';
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

/*TEST 1*/ 

// FAILED TEST

describe("Todo", () => {
  test('should render same text passed into title prop', () => {
     render(< Todo/>);
    //  const headingElement = screen.getByText(/learn react/i);
    //  expect(headingElement).toBeInTheDocument();
    });
})
 
  