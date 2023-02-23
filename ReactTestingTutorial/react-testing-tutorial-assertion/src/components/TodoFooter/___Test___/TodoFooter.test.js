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

