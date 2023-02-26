import { render, screen } from '@testing-library/react';
import Header from '../Header';

/*TEST 1*/ 

// FAILED TEST
 test('renders learn react link-fail', () => {
     render(<Header title="My Header"/>);
     const headingElement = screen.getByText(/learn react/i);
     expect(headingElement).toBeInTheDocument();
   });

  //SUCCESSFUL TEST
  test('renders learn react link-pass', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  /*TEST 2*/ 
//Get by role mimics what the user will be doing.

// FAILED TEST
 test('should render same text passed into title prop-fail', () => {
     render(<Header title="My Header"/>);
     const headingElement = screen.getByRole("paragraph");
     expect(headingElement).toBeInTheDocument();
   });

  //SUCCESSFUL TEST
  test('should render same text passed into title prop-pass', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  //SUCCESSFUL TEST
  test('should render same text passed into title prop-pass-2', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading", { name: "My Header"});
    expect(headingElement).toBeInTheDocument();
  });

  /*TEST 3 : Semantic Tags*/
  
  it('should render same text passed into title prop-semantic-pass-2', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
  });

  /*TEST 4 : Test Id*/
  
  it('should render same text passed into title prop-test_id-pass', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTestId("header-2");
    expect(headingElement).toBeInTheDocument();
  });

// WITH FINDBY
//Asynchronous functions use find by

it('should render same text passed into title prop', async () => {
    render(
    <Header 
           title="todo"
         />
     );
     //need await or test fails
     const h1Element = await screen.findByText(/todo/i);
     expect(h1Element).toBeInTheDocument();
     });

// WITH QUERYBY

it('should render same text passed into title prop -qb', () => {
     render(
         <Header 
           title="todo"
         />
     );
     const h1Element = screen.queryByText(/dogs/i);
     // eslint-disable-next-line jest/valid-expect, no-unused-expressions
     expect(h1Element).not.toBeInTheDocument
 });

 //WITH GET ALL BY
 //Return array

 it('should render same text passed into title prop-get-all-by', () => {
     render(
         <Header 
           title="todo"
         />
     );
     const h1Elements = screen.getAllByText(/todo/i);
     expect(h1Elements.length).toBe(1);
 });

