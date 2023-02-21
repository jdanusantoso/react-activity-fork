/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { isTSAnyKeyword } from '@babel/types';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';

it("renders without crashing", () => {
    //create an element
    const div = document.createElement("div");
    //render the element and attach it to the div
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", () => {
    //create an element
    const {getByTestId} = render(<Button label="click me please"></Button>);
    //render the element and attach it to the div
    expect(getByTestId('button')).toHaveTextContent("click me please");
})