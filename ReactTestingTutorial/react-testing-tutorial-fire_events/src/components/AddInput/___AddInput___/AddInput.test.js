import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput"

const mockedSetTodo = jest.fn();

/*Test 1 
Used to fetch the placeholder text
*/
describe("AddInput", () => {
    render(
        <AddInput 
            //get the todos from state in AddInput.js
            todos={[]}
            //passing the mockedSetTodo into the set todos
            setTodos={mockedSetTodo}
        />
    )
    it('', async () => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    it ("should be able to type into input", () => {
        render(
            <AddInput 
                //get the todos from state in AddInput.js
                todos={[]}
                //passing the mockedSetTodo into the set todos
                setTodos={mockedSetTodo}
            />
        );

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping"}})
        expect(inputElement.value).toBe("Go Grocery Shopping");
            
        });
})
