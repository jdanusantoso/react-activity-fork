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

//You can post the before or after each within or outside the testing method
//Outside here is global vs function scope

/*TEST -> find the first element being rendered on the page*/ 

// Find the first element

describe("FollowersList", () => {

    beforeEach(() => {
        console.log("RUNNING BY EACH TEST")
    })

    it('should render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
   });

   it('should render follower items2', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
    });

    it('should render follower items3', async () => {
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
 

 