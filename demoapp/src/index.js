// import react libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const App = () => {
    const buttonLabel = 'Click Me!';

    return (
        <div>
            <label>Name</label>
            <input />
            <button style={{ backgroundColor: 'blue' }} >{buttonLabel}</button>
        </div >
    );
};

//  take react component and show it to screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);