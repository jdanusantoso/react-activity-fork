import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput"

const mockedSetTodo = jest.fn();

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
    })
})
