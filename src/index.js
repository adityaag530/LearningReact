import ReactDOM from 'react-dom/client';

// import React from 'react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


// index.js is the first file to be get executed
// React-dom is a dependency  and react is also a depency or package.
// react are split in two diff dependencies
// craete root works as place holder where to place the render component
// we are able to write html in js because of JSX - js-xml
// chrome dev tools -> sources tab -> static/js -> all transofrmed code with react and react dom libs
// clear instruction in vanilla js -> imperative approach
// react -> declarative approact -> define the end state and react will take care _> like adding para in root element
// add new component in new files
