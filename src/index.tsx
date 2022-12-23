import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./Redux/state";


ReactDOM.render(<App PostsMessages={state.posts}
                     DialogsMessages={state.messages}
                     DialogFriends={state.dialogs}/>,
    document.getElementById('root'));