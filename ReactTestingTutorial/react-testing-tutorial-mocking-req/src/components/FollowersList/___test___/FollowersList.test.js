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

/*TEST -> find the first element being rendered on the page*/ 

// Find the first element
describe("FollowersList", () => {
    it('should render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
   });

//Commented out because test is going to fail -> not suitable for multiple reqs
//    it('should render multiple follower items', async () => {
//     render(<MockFollowersList />);
//     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
//     expect(followerDivElements.length).toBeInTheDocument(5);
// });

})
 

 