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

// Find the first element
describe("FollowersList", () => {
    test('renders learn react link-fail', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
   });

})
 

 