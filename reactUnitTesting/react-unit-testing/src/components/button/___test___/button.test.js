import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { isTSAnyKeyword } from '@babel/types';
import { render } from '@testing-library/react'
import "jest-dom/extend-expect";

it("renders without crashing", () => {
    //create an element
    const div = document.createElement("div");
    //render the element and attach it to the div
    ReactDOM.render(<Button></Button>, div)
})