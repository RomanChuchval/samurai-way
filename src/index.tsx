import React from 'react';
import state /*{subscribe}*/ from "./Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./Redux/state";

// let rerenderEntireTree = () => {
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
// }


/*
rerenderEntireTree()

subscribe(rerenderEntireTree);*/
