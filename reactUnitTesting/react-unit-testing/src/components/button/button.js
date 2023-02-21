import React from 'react';

function Button({label}){
    //test id to mock it
    return <div data-testid="button">{label}</div>
}

export default Button;