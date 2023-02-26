import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return(
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

/*TEST 1*/ 

// FAILED TEST
describe("FollowersList", () => {
    test('renders learn react link-fail', () => {
        render(<MockFollowersList />);
        const headingElement = screen.getByText(/learn react/i);
        expect(headingElement).toBeInTheDocument();
   });

})
 

 