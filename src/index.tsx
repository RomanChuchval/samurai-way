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

let messages = [
    {message: 'Hello!'},
    {message: 'How Are you?'},
    {message: 'What a day!'},
    {message: 'hahahha lol!'},
    {message: 'Go home!'},
    {message: 'How match it cost?'},
    {message: 'Yo!'},
]

let dialogs = [
    {id: '1', name: 'Roman'},
    {id: '2', name: 'Lera'},
    {id: '3', name: 'Dimych'},
    {id: '4', name: 'Sergey'},
    {id: '5', name: 'Pavel'},
    {id: '6', name: 'Andrew'},
]


ReactDOM.render(<App PostsArray={posts}
                     DialogsMessages={messages}
                     DialogFriends={dialogs}/>,
    document.getElementById('root'));