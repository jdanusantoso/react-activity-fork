import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from "react-router-dom"


const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
    numberOfIncompleteTasks={numberOfIncompleteTasks}
    </BrowserRouter>
  )
}

/*TEST 1*/ 

//FAILED TEST because it cannot find 5 elements on the site
it('should render the correct amount of incomplete task', async () => {
    render(<MockTodoFooter 
      numberOfIncompleteTasks={5}
      />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  /*TEST 2*/ 

//FAILED TEST because it cannot find 1 elements on the site
it('should render "task" when the number of incomplete tasks is one', async () => {
  render(<MockTodoFooter 
    numberOfIncompleteTasks={5}
    />);
  const paragraphElement = screen.getByText(/1 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

/*TEST 3: Truthy*/ 
//Used to determine if a value is boolean true
//FAILED TEST because it cannot find 1 elements on the site

 it('p element should be truthy when the number of incomplete tasks is one', () => {
   render(
       <MockTodoFooter 
         numberOfIncompleteTasks={1}
       />
   );
   const pElement = screen.getByText(/1 task left/i);
   expect(pElement).toBeTruthy();
 });

 /*TEST 4: Visibility*/ 
//Used to determine if a value is visible to the user
//FAILED TEST because it cannot find 1 elements on the site

it('"task" should be visible when the number of incomplete tasks is one', () => {
     render(
         <MockTodoFooter 
           numberOfIncompleteTasks={1}
         />
     );
     const pElement = screen.getByText(/1 task left/i);
     expect(pElement).toBeVisible();
   });

   /*TEST 5: Contains*/ 
//Used to determine if the value contains a tag
//FAILED TEST because it cannot find 1 elements on the site

it('should contain p tag with correct text', () => {
     render(
         <MockTodoFooter 
           numberOfIncompleteTasks={1}
         />
     );
     const pElement = screen.getByText(/1 task left/i);
     expect(pElement).toContain('p');
   });

/*TEST 6: Have text content*/ 
//Used to determine if the value has the text content
//FAILED TEST because it cannot find 1 elements on the site
   
  it('should render correct text content', () => {
   render(
       <MockTodoFooter 
         numberOfIncompleteTasks={1}
       />
   );
   const pElement = screen.getByText(/1 task left/i);
   expect(pElement).toHaveTextContent("1 task left");
 });

 /*TEST 7: No*/ 
//Used to determine if test the opposite
//FAILED TEST because it cannot find 1 elements on the site

it('should render not be falsy', () => {
   render(
       <MockTodoFooter 
         numberOfIncompleteTasks={1}
       />
   );
   const pElement = screen.getByText(/1 task left/i);
   expect(pElement).not.toBeFalsy();
 });

  /*TEST 8: Assert element value*/ 
//Used to determine if test the opposite
//FAILED TEST because it cannot find 1 elements on the site

  it('should render the correct assert text content value', () => {
   render(
       <MockTodoFooter 
         numberOfIncompleteTasks={1}
       />
   );
   const pElement = screen.getByText(/1 task left/i);
   expect(pElement.textContent).toBe("1 task left");
 });