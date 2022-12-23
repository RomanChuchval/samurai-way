import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hello!', likeCount: 12},
    {id: 2, message: 'How Are you?', likeCount: 11},
    {id: 3, message: 'What a day!', likeCount: 23},
    {id: 4, message: 'hahahha lol!', likeCount: 43},
    {id: 5, message: 'Go home!', likeCount: 13},
    {id: 6, message: 'How match it cost?', likeCount: 4},
    {id: 7, message: 'Yo!', likeCount: 123},
];



ReactDOM.render(<App array={posts} />, document.getElementById('root'));